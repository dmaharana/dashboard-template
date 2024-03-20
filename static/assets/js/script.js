// add hovered class to selected list item
let navList = document.querySelector(".navigation li");

function activeLink() {
  navList.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

navList.forEach((item) => item.addEventListener("mouseover", activeLink));

function displayFileContent() {
  const fileInput = document.getElementById("fileInput");
  const file = fileInput.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = function (event) {
      const fileContent = event.target.result;
      document.getElementById("fileContent").innerText = fileContent;
    };
    reader.readAsText(file);
  } else {
    document.getElementById("fileContent").innerText = "No file selected.";
  }
}
