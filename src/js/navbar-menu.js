const navbarToggle = document.getElementById("navbar-toggle");

let expanded = navbarToggle.getAttribute("aria-expanded") === "true";

navbarToggle.addEventListener(
  "click",
  () =>
  {
    navbarToggle.setAttribute("aria-expanded", expanded = !expanded);
  }
);

const desktopToggle = window.matchMedia("(min-width: 768px)"),
      mobileToggle = window.matchMedia("(max-width: 768px)"),
      links = document.querySelectorAll("#navbar-links .navbar-link");

function disableTransition ()
{
  for (const link of links)
  {
    link.classList.add("no-transition");
  }

  // force reflow so classes are respected
  void document.body.offsetWidth;

  window.requestAnimationFrame(
    () =>
    {
      for (const link of links)
      {
        link.classList.remove("no-transition");
      }
    }
  );
}

desktopToggle.addEventListener(
  "change",
  disableTransition
);

mobileToggle.addEventListener(
  "change",
  disableTransition
);
