var sidemenu = document.getElementById("sidemenu");
function openmenu() {
  console.log("work");
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-40%";
}

// var dropdownbtn = document.getElementById("dropdownbtn");
// var dropdownbtn2 = document.getElementsByClassName("toggle2");
// var dropdownContent = document.getElementById("dropdown1");
// var dropdownContent2 = document.getElementById("dropdown2");

// document.addEventListener("DOMContentLoaded", function () {
//   var dropdownbtn = document.querySelector("#dropdownbtn");
//   var dropdownContent = document.querySelector("#dropdown1");

//   dropdownbtn.addEventListener("click", function () {
//     console.log("work");

//     // Toggle the 'active' class to show/hide the dropdownContent
//     dropdownContent.classList.toggle("active");

//     console.log("finish");
//   });

//   window.addEventListener("click", function (event) {
//     // Close the dropdown if the user clicks outside of it
//     if (
//       !event.target.matches("#dropdownbtn") &&
//       !event.target.matches("#dropdown1")
//     ) {
//       dropdownContent.classList.remove("active");
//     }
//     console.log("working");
//   });
// });

// dropdownContent.style.display =
//   dropdownContent.style.display === "block" ? "none" : "block";

document.addEventListener("DOMContentLoaded", function () {
  const toggle1 = document.querySelector("#toggle1");
  const toggle2 = document.querySelector("toggle2");
  const dropdown1 = document.getElementById("dropdown1");
  const dropdown2 = document.getElementById("dropdown2");
  const caret1 = document.getElementsByClassName("caret1");
  const caret2 = document.getElementsByClassName("caret2");
  const caretRotate1 = document.getElementsByClassName("caret-rotate1");
  const caretRotate2 = document.getElementsByClassName("caret-rotate2");

  opendropdown1 = () => {
    if (dropdown1.style.display === "block") {
      dropdown1.style.display = "none";
      dropdown2.style.display = "none";
    } else {
      dropdown1.style.display = "block";
      dropdown2.style.display = "none";
    }
  };

  opendropdown2 = () => {
    if (dropdown2.style.display === "block") {
      dropdown2.style.display = "none";
      dropdown1.style.display = "none";
      // caret1.style.display = "block";
      // caretRotate1.style.display = "none";
    } else {
      dropdown2.style.display = "block";
      dropdown1.style.display = "none";
    }
    // else {
    //   dropdown2.style.display = "none";
    //   caret2.style.display = "none";
    //   caretRotate2.style.display = "block";
    // }
  };
});

// window.addEventListener("click", function (event) {
//   if (!event.target.matches("#toggle1")) {
//     if (dropdown1.style.display === "block") {
//       dropdown1.style.display = "none";
//     }
//   }
//   console.log("working");
// });

// function opendropdown1() {
//   console.log("work");
//   dropdown1.style.display = "block";
// }
// function opendropdown2() {
//   console.log("work");
//   dropdown2.style.display = "block";
// }
// function closedropdown1() {
//   console.log("work");
//   dropdown1.style.display = "none";
// }
// function closedropdown2() {
//   console.log("work");
//   dropdown2.style.display = "none";
// }

// const dropdowns = document.querySelectorAll(".dropdown");

// dropdowns.forEach((dropdown) => {
//   const select = dropdown.querySelector(".select");
//   const caret = dropdown.querySelector(".caret");
//   const menu = dropdown.querySelector(".menu");
//   const options = dropdown.querySelector(".menu li a");
//   const selected = dropdown.querySelector(".selected");

//   select.addEventListener("click", () => {
//     select.classList.toggle("select-clicked");
//     caret.classList.toggle("caret-rotate");
//     menu.classList.toggle("menu-open");
//   });
//   options.forEach((option) => {
//     option.addEventListener("click", () => {
//       selected.innerText = option.innerText;
//       select.classList.remove("select-clicked");
//       caret.classList.remove("caret-rotate");
//       menu.classList.remove("menu-open");
//       option.forEach((option) => {
//         option.classList.remove("active");
//       });
//       option.classList, add("active");
//     });
//   });
// });
