var lessthan = document.getElementById("less-then")
var greaterthan = document.getElementById("greater-then")

var navBar = document.getElementById("navbar")

var leftNavBar = document.getElementById("left-navbar")

var navBrand = document.getElementById("navbar-brands")

var sectionContent = document.getElementById("section-content")

lessthan.addEventListener("click", () => {
  greaterthan.style.display = "block"
  lessthan.style.display = "none"
  console.log("Hello ")
  navBrand.style.display = "none"
  navBar.style.paddingLeft = "5%"
  leftNavBar.style.width = "5%"
  console.log(navName)
  sectionContent.style.paddingLeft = "5%"
})

greaterthan.addEventListener("click", () => {
  greaterthan.style.display = "none"
  lessthan.style.display = "block"
  console.log("Hello ")
  navBrand.style.display = "block"
  navBar.style.paddingLeft = "15%"
  leftNavBar.style.width = "15%"
  sectionContent.style.paddingLeft = "15%"
  console.log(navName)
})
