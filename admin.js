var lessthan = document.getElementById("less-then")
var greaterthan = document.getElementById("greater-then")

var navBar = document.getElementById("navbar")

var navName = document.querySelectorAll(".nav-name")
console.log(navName)

var leftNavBar = document.getElementById("left-navbar")

var navBrand = document.getElementById("navbar-brands")

var sectionContent = document.getElementById("section-content")

var leftLogo = document.getElementById("left-logo")

lessthan.addEventListener("click", () => {
  greaterthan.style.display = "block"
  lessthan.style.display = "none"
  console.log("Hello ")
  navBrand.style.display = "none"
  navBar.style.paddingLeft = "5%"
  leftNavBar.style.width = "5%"
  console.log(navName)
  sectionContent.style.paddingLeft = "5%"

  for (let i = 0; i < navName.length; i++) {
    console.log(navName[i])
    navName[i].style.display = "none"
  }
})

greaterthan.addEventListener("click", () => {
  greaterthan.style.display = "none"
  lessthan.style.display = "block"
  console.log("Hello ")
  navBrand.style.display = "block"
  navBar.style.paddingLeft = "15%"
  leftNavBar.style.width = "15%"
  sectionContent.style.paddingLeft = "15%"

  for (let i = 0; i < navName.length; i++) {
    console.log(navName[i])
    navName[i].style.display = "block"
  }

  console.log(navName)
})
