var lessthan = document.getElementById("less-then")
// var greaterthan = document.getElementById("greater-then")

var navBar = document.getElementById("navbar")

// var navName = document.querySelectorAll(".nav-name")
// var navItems = document.querySelectorAll(".nav__items")

// var leftNavBar = document.getElementById("left-navbar")
// var Content = document.getElementById("content")

// var navBrand = document.getElementById("navbar-brands")

// var sectionContent = document.getElementById("section-content")

// var leftLogo = document.getElementById("left-logo")

// var Top = document.getElementById("top")
// var topbarContent = document.getElementById("topbar-content")

// console.log(Top)
var sectionContent = document.getElementById("section-content")

// var First = document.querySelector(".section-contents")

var count = 0

lessthan.addEventListener("click", () => {
  firstClick()
  secondClick()

  if (count < 1) {
    count++
  } else {
    count = 0
  }
})

function firstClick() {
  console.log("Hello")
  if (count == 0) {
    navBar.style.paddingLeft = "15%"
    sectionContent.style.paddingLeft = "15%"
  }
}

function secondClick() {
  if (count == 1) {
    navBar.style.paddingLeft = "5%"
    sectionContent.style.paddingLeft = "5%"
  }
}
