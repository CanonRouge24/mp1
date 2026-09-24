const thumbnail = document.getElementById("video-thumbnail"),
      dialog = document.getElementById("modal-content"),
      header = document.getElementById("modal-header"),
      video = document.getElementById("modal-video");

let transform, reverse;

function UpdateThumbnailTransforms (start, end)
{
  const dx = end.left - start.left,
        dy = end.top - start.top,
        sx = end.width / start.width,
        sy = end.height / start.height;

  transform = `translate(${dx}px, ${dy}px) scale(${sx}, ${sy})`;
}

thumbnail.addEventListener(
  "click",
  () =>
  {
    const start = thumbnail.getBoundingClientRect();

    dialog.classList.remove("fade-out");
    dialog.classList.add("fade-in");

    // Needed for going from display: none → display: flex
    dialog.style.backgroundColor = "transparent";
    header.style.opacity = "0";
    video.style.opacity = "0";

    requestAnimationFrame(
      () =>
      {
        const end = video.getBoundingClientRect();

        UpdateThumbnailTransforms(start, end);

        thumbnail.style.transform = transform;

        requestAnimationFrame(
          () =>
          {
            dialog.style.backgroundColor = "";
            header.style.opacity = "";
            video.style.opacity = "";
          }
        );
      }
    );
  }
);

dialog.addEventListener(
  "click",
  () =>
  {
    dialog.classList.remove("fade-in");
    dialog.classList.add("fade-out");
    thumbnail.style.transform = "";

    requestAnimationFrame(
      () =>
      {
        thumbnail.style.transform = reverse;
      }
    );
  }
);

video.addEventListener(
  "click",
  event => event.stopPropagation()
);

