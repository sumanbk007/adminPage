var lessthan = document.getElementById("less-then")
var greaterthan = document.getElementById("greater-then")

var navBar = document.getElementById("navbar")
var leftUl = document.getElementById("left-ul")

var navName = document.querySelectorAll(".nav-name")
var navItems = document.querySelectorAll(".nav__items")

var leftNavBar = document.getElementById("left-navbar")

var navBrand = document.getElementById("navbar-brands")
var navBrands = document.getElementById("navbar-brandss")

var sectionContent = document.getElementById("section-content")

var leftLogo = document.getElementById("left-logo")

lessthan.addEventListener("click", () => {
  greaterthan.style.display = "block"
  lessthan.style.display = "none"
  navBrand.style.display = "none"

  navBar.style.paddingLeft = "5%"
  leftNavBar.style.width = "5%"
  console.log(navName)
  sectionContent.style.paddingLeft = "5%"

  for (let i = 0; i < navName.length; i++) {
    navName[i].style.display = "none"
  }

  for (let i = 0; i < navItems.length; i++) {
    navItems[i].style.width = "54px"
  }
})

greaterthan.addEventListener("click", () => {
  greaterthan.style.display = "none"
  leftUl.style.width = "15%"
  navBar.style.paddingLeft = "15%"
  leftNavBar.style.width = "15%"
  sectionContent.style.paddingLeft = "15%"

  lessthan.style.display = "block"

  navBrand.style.display = "block"

  for (let i = 0; i < navName.length; i++) {
    navName[i].style.display = "block"
  }
  for (let i = 0; i < navItems.length; i++) {
    navItems[i].style.width = "15%"
  }
})

// Toggle-button

let toggleButton = document.getElementById("toggle-button")
let crossButton = document.getElementById("cross-btn")

toggleButton.addEventListener("click", () => {
  toggleButton.style.display = "none"
  crossButton.style.display = "block"
  leftNavBar.style.left = "0"
})

crossButton.addEventListener("click", () => {
  crossButton.style.display = "none"
  toggleButton.style.display = "block"
  leftNavBar.style.left = "-600px"
})
