// add hovered class to selected list item
let navList = document.querySelector(".navigation li");

function activeLink() {
  navList.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

// navList.forEach((item) => item.addEventListener("mouseover", activeLink));

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

// menu toggle
let toggle = document.querySelector(".toggle");
let toggleSidebar = document.querySelector(".toggle-sidebar");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");
let collapse = document.querySelector(".collapse");
let expand = document.querySelector(".expand");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};

toggleSidebar.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
  collapse.classList.toggle("active");
  expand.classList.toggle("active");
};
