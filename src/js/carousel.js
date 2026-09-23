const left = document.getElementById("carousel-left"),
      right = document.getElementById("carousel-right"),

      slider = document.getElementById("carousel-slider");

slider.style.transform = "translate(-33%)";

right.addEventListener(
  "click",
  () =>
  {
    const { classList } = slider;

    switch (true)
    {
      case classList.contains("two"):
        slider.style.transform = "none";
        slider.style.transform = "translate(-89%)";
        classList.remove("two");
        break;

      case classList.contains("three"):
        slider.style.transform = "none";
        slider.style.transform = "translate(-33%)";
        classList.remove("three");
        classList.add("two");
        break;
    }
  }
);

left.addEventListener(
  "click",
  () =>
  {
    const { classList } = slider;

    switch (true)
    {
      case !classList.contains("two") && !classList.contains("three"):
        slider.style.transform = "none";
        slider.style.transform = "translate(-33%)";
        classList.add("two");
        break;

      case classList.contains("two"):
        slider.style.transform = "none";
        slider.style.transform = "translate(31%)";
        classList.remove("two");
        classList.add("three");
        console.log("here");
        break;
    }
  }
);
