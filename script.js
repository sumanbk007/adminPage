var lessthan = document.getElementById("less-then")
var greaterthan = document.getElementById("greater-then")

var navBar = document.getElementById("navbar")

var navName = document.querySelectorAll(".nav-name")
var navItems = document.querySelectorAll(".nav__items")

var leftNavBar = document.getElementById("left-navbar")

var navBrand = document.getElementById("navbar-brands")

var sectionContent = document.getElementById("section-content")

var leftLogo = document.getElementById("left-logo")

lessthan.addEventListener("click", () => {
  greaterthan.style.display = "block"
  lessthan.style.display = "none"
  navBrand.style.display = "hidden"

  navBar.style.paddingLeft = "5%"
  leftNavBar.style.left = "-126px"

  console.log(navName)
  sectionContent.style.paddingLeft = "5%"

  for (let i = 0; i < navName.length; i++) {
    navName[i].style.display = "none"
  }

  for (let i = 0; i < navItems.length; i++) {
    navItems[i].style.width = "-1px"
  }
})

greaterthan.addEventListener("click", () => {
  greaterthan.style.display = "none"
  // lessthan.style.display = "block"

  // navBrand.style.display = "block"
  navBar.style.paddingLeft = "15%"
  leftNavBar.style.left = "0"
  sectionContent.style.paddingLeft = "15%"

  const timeOut = setTimeout(() => {
    lessthan.style.display = "block"

    navBrand.style.display = "visible"

    for (let i = 0; i < navName.length; i++) {
      navName[i].style.display = "block"
    }
    for (let i = 0; i < navItems.length; i++) {
      navItems[i].style.width = "190px"
    }
  }, 100)
})
