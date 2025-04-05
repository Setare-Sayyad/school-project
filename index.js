document.getElementById("applyBtn").addEventListener("click", function () {
  const formSection = document.getElementById("formSection");
  const landingSection = document.getElementById("landing");

  landingSection.style.display = "none";
  formSection.style.display = "block";
});
