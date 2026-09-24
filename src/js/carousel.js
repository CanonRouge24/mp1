const left = document.getElementById("carousel-left"),
      right = document.getElementById("carousel-right"),

      slider = document.getElementById("carousel-slider");

const SLIDER_TRANSLATIONS = [
  31, -33, -89
];

slider.style.transform = `translate(${SLIDER_TRANSLATIONS[1]}%)`;

left.addEventListener(
  "click",
  () =>
  {
    const { classList } = slider;

    switch (true)
    {
      case classList.contains("two"):
        slider.style.transform = "none";
        slider.style.transform = `translate(${SLIDER_TRANSLATIONS[0]}%)`;
        classList.remove("two");
        break;

      case classList.contains("three"):
        slider.style.transform = "none";
        slider.style.transform = `translate(${SLIDER_TRANSLATIONS[1]}%)`;
        classList.remove("three");
        classList.add("two");
        break;
    }
  }
);

right.addEventListener(
  "click",
  () =>
  {
    const { classList } = slider;

    switch (true)
    {
      case !classList.contains("two") && !classList.contains("three"):
        slider.style.transform = "none";
        slider.style.transform = `translate(${SLIDER_TRANSLATIONS[1]}%)`;
        classList.add("two");
        break;

      case classList.contains("two"):
        slider.style.transform = "none";
        slider.style.transform = `translate(${SLIDER_TRANSLATIONS[2]}%)`;
        classList.add("three");
        classList.remove("two");
        break;
    }
  }
);

