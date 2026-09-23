const thumbnail = document.getElementById("video-button"),
      dialog = document.getElementById("modal-content"),
      video = document.getElementById("modal-video");

thumbnail.addEventListener(
  "click",
  () =>
  {
    dialog.classList.add("is-visible");
  }
);

dialog.addEventListener(
  "click",
  () =>
  {
    dialog.classList.remove("is-visible");
  }
);

video.addEventListener(
  "click",
  function (event) { event.stopImmediatePropagation(); }
);
