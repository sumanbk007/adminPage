var lessthan = document.getElementById("less-then")
var greaterthan = document.getElementById("greater-then")

var navBar = document.getElementById("navbar")

var navName = document.querySelectorAll(".nav-name")
var navItems = document.querySelectorAll(".nav__items")

var leftNavBar = document.getElementById("left-navbar")
var Content = document.getElementById("content")

var navBrand = document.getElementById("navbar-brands")

var sectionContent = document.getElementById("section-content")

var leftLogo = document.getElementById("left-logo")

var Top = document.getElementById("top")
var topbarContent = document.getElementById("topbar-content")

console.log(Top)
var sectionContent = document.getElementById("section-content")

var First = document.querySelector(".section-contents")

var count = 0

lessthan.addEventListener("click", () => {
  firstClick()
  secondClick()
  // greaterthan.style.display = "block"
  // lessthan.style.display = "none"
  // navBrand.style.display = "block"

  // // navBar.style.paddingLeft = "5%"
  // leftNavBar.style.width = "190px"

  // console.log(navName)
  // sectionContent.style.paddingLeft = "5%"

  // for (let i = 0; i < navName.length; i++) {
  //   navName[i].style.display = "block"
  // }
  if (count < 1) {
    count++
  } else {
    count = 0
  }

  // for (let i = 0; i < navItems.length; i++) {
  //   navItems[i].style.width = "-1px"
  // }
})

function firstClick() {
  console.log("Hello")
  if (count == 0) {
    // leftNavBar.style.zIndex = "200"
    // sectionContent.style.zIndex = "300"
    navBar.style.paddingLeft = "4%"
    sectionContent.style.paddingLeft = "4%"
    // First.style.left = "60px"

    // sectionContent.style.left = "60px"
  }
}

function secondClick() {
  if (count == 1) {
    // First.style.left = "200px"

    // sectionContent.style.left = "200px"

    navBar.style.paddingLeft = "15%"
    sectionContent.style.paddingLeft = "15%"
  }
}
