window.onresize = function () {
  if (window.innerWidth <= 600) {
    document.getElementById("info").classList.add("text-center");
    document.getElementById("hire").classList.add("w-100");
    document.getElementById("skills").classList.remove("m-5");
    document.getElementById("skills").classList.add("mt-5");
  } else if (window.innerWidth >= 700 && window.innerWidth <= 1000) {
    let i = 1;
    for (i; i < 4; i++) {
      document.getElementById("card" + i).classList.remove("p-3");
    }
    document.getElementById("contact-card").classList.add("ms-2");
  } else {
    document.getElementById("info").classList.remove("text-center");
    document.getElementById("hire").classList.remove("w-100");
    document.getElementById("skills").classList.remove("mt-5");
    document.getElementById("skills").classList.add("m-5");
  }

  console.log(window.innerWidth);
};
