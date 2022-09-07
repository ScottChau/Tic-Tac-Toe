const allBlank = document.querySelectorAll(".blank");

allBlank.forEach((blank) =>
  blank.addEventListener("click", function (e) {
    e.preventDefault();
    blank.textContent = "X";
  })
);
