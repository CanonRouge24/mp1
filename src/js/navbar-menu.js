const navbar = document.getElementById("navbar-container"),
      navbarToggle = document.getElementById("navbar-toggle");

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

for (const link of links)
{
  link.addEventListener(
    "click",
    function ()
    {
      document.getElementById(this.dataset.target).scrollIntoView(
        {
          behavior: "smooth"
        }
      );
    }
  );
}

// Tracks currently intersecting sections; the initial observe() callback
// reports every target, including ones that are not intersecting.
const visible = new Map();

const observer = new IntersectionObserver(
  (entries) =>
  {
    for (const entry of entries)
    {
      if (entry.isIntersecting)
      {
        visible.set(entry.target.id, entry.intersectionRatio);
      }
      else
      {
        visible.delete(entry.target.id);
      }
    }

    let activeId = null;
    let bestRatio = -1;

    for (const [id, ratio] of visible)
    {
      if (ratio > bestRatio)
      {
        bestRatio = ratio;
        activeId = id;
      }
    }

    for (const link of links)
    {
      link.style.background = (link.dataset.target === activeId)
        ? "radial-gradient(#fff8, #fff0)"
        : "";
    }

    if (activeId !== "hero-image")
    {
      navbar.classList.add("shrink");
    }
    else
    {
      navbar.classList.remove("shrink");
    }
  },

  {
    threshold: [0, 0.25, 0.5, 0.75, 1]
  }
);

for (const link of links)
{
  observer.observe(document.getElementById(link.dataset.target));
}

