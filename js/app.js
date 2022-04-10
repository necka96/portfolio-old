const sections = document.querySelectorAll(".section")
const secBtn = document.querySelectorAll(".section-buttons")
const secBtns = document.querySelectorAll(".button")
const body = document.querySelector(".main-content")

PageTransition()
function PageTransition (){
 // activ-class-on-btn
secBtns.forEach(button => {
 button.addEventListener("click", function(){
  let currentBtn = document.querySelectorAll(".active-btn")
  currentBtn[0].className = currentBtn[0].className.replace("active-btn", "")
  this.className += " active-btn"
 })
})

// section active class
body.addEventListener("click", (e)=>{
 const id = e.target.dataset.id
 if(id){
  // remove selected from the other btns
  secBtn.forEach(btn => {
   btn.classList.remove("active")
  })
  e.target.classList.add("active")

  // hide another section
  sections.forEach(section =>{
   section.classList.remove("active")
  })

  const element = document.getElementById(id)
  element.classList.add("active")
 }
})
}
PageTransition()
// ttyping
const texts = ["Front-end developer", "Ekonomski tehničar", "Aoi viscom operater"]
let count = 0
let index = 0
let currentText = ""
let letter = ""

function type (){
 if(count === texts.length){
  count = 0
 }
 currentText = texts[count]
 letter = currentText.slice(0,++index)
 document.querySelector(".typing").textContent = letter
 if(letter.length === currentText.length){
   count++
  index = 0
 
 }
 setTimeout(type, 400)
}
type()
// skilss
// let numOne = document.getElementById("num-one")
// let numTwo = document.getElementById("num-two")
// let numThree = document.getElementById("num-three")
// let numFour= document.getElementById("num-four")
// let numFive = document.getElementById("num-five")
// let numSix = document.getElementById("num-six")
// let numSeven = document.getElementById("num-seven")
// let numEight = document.getElementById("num-eight")
// let numNine = document.getElementById("num-nine")
// let i = 0
// function increaseWidth (){
//   if(i == 0){
//     i = 1
//   var  elOne = document.getElementById("html")
//   var  elTwo = document.getElementById("css")
//   var  elThree = document.getElementById("js")
//   var  elFour = document.getElementById("react")
//   var  elFive = document.getElementById("node")
//   var  elSix = document.getElementById("java")
//   var  elSeven = document.getElementById("git")
//   var  elEight = document.getElementById("scss")
//   var  elNine = document.getElementById("jquery")
//   var width = 0
//   let intervalOne = setInterval(Html, 60)
//   let intervalTwo = setInterval(Css, 60)
//   let intervalThree = setInterval(Js, 60)
//   let intervalFour = setInterval(React, 60)
//   let intervalFive = setInterval(NodeJs, 60)
//   let intervalSix = setInterval(Java, 60)
//   let intervalSeven = setInterval(Git, 60)
//   let intervalEight = setInterval(Scss, 60)
//   let intervalNine = setInterval(Jquery, 60)
//   function Html(){
//     if(width >= 77){
//       clearInterval(intervalOne)
//       i=0
//     }else{
//       width ++
//       elOne.style.width = width + "%";
//       numOne.textContent = width + "%";
//     }
//   }

//   function Css(){
//     width --;
//     if(width >= 65){
//       clearInterval(intervalTwo)
//       i = 0
//     }else{
//       width ++;
//       elTwo.style.width = width + "%";
//       numTwo.textContent = width + "%";
//     }
//   }
//   function Js (){
//     width --
//   if(width >= 60){
//     clearInterval(intervalThree)
//     i = 0
//   }else{
//     width ++
//     elThree.style.width = width + "%"
//     numThree.textContent = width + "%"
    
//   }
//   }
//   function React(){
//     width --;
//     if(width >= 50){
//       clearInterval(intervalFour)
//       i=0
//     }else{
//       width ++
//       elFour.style.width = width + "%"
//       numFour.textContent = width + "%"
//     }
//   }
//   function NodeJs(){
//     width --
//     if(width >= 20){
//       clearInterval(intervalFive)
//       i= 0
//     }else{
//       width ++
//       elFive.style.width = width + "%"
//       numFive.textContent = width + "%";
//     }
//   }
//     function Java(){
//     width --
//     if(width >= 20){
//       clearInterval(intervalSix)
//       i= 0
//     }else{
//       width ++
//       elSix.style.width = width + "%"
//       numSix.textContent = width + "%";
//     }
//   }
//   function Git (){
//     width--
//     if(width >= 45){
//       clearInterval(intervalSeven)
//       i = 0
//     }else{
//       width++
//       elSeven.style.width = width + "%"
//       numSeven.textContent = width + "%";
//     }
//   }
//   function Scss (){
//     width --
//     if(width >= 55){
//       clearInterval(intervalEight)
//       i = 0
//     }else{
//       width ++;
//       elEight.style.width = width + "%"
//       numEight.textContent = width + "%"
//     }
//   }
//   function Jquery (){
//     width --
//     if(width >= 45){
//       clearInterval(intervalNine)
//       i = 0
//     }else{
//       width ++
//       elNine.style.width = width + "%"
//       numNine.textContent = width + "%"
//     }
//   }
//   }

// }
// increaseWidth()

// filter-btn
const filterButtons = document.querySelector("#filter-btns").children
const items = document.querySelector(".gallery-container").children

for(let i=0; i < filterButtons.length; i++){
  filterButtons[i].addEventListener("click", function(){
      for(let e = 0; e < filterButtons.length; e++){
      filterButtons[e].classList.remove("active")
      this.classList.add("active")
   
   
    const target = this.getAttribute("data-target")
    for(let k = 0; k < items.length; k++){
    
      items[k].classList.remove("active")
       items[k].classList.add("delete")
     
       if(items[k].getAttribute('data-id') == target || target == "all"){
                items[k].classList.remove('delete');
                items[k].classList.add('active');
            }
      
    }
     }
  })
}
// date
const date = document.getElementById("date").textContent = new Date().getFullYear()

// light-dark-theme
var icon = document.getElementById("icon")
var iconHolder = document.querySelector(".icon-holder")
if(localStorage.getItem("theme") == null){
  localStorage.setItem("theme", "light")
}

const local = localStorage.getItem("theme")

if(local == "light"){
  icon.src = "../img/moon.png"
  document.body.classList.remove("dark-theme")
}else if (local == "dark"){
  icon.src = "../img/sun.png"
  document.body.classList.add("dark-theme")
}

iconHolder.addEventListener("click", ()=>{
  document.body.classList.toggle("dark-theme")
  if(document.body.classList.contains("dark-theme")){
    icon.src = "../img/sun.png"
    localStorage.setItem("theme", "dark")
  }else{
    icon.src = "../img/moon.png"
    localStorage.setItem("theme", "light")
  }
})


// preloader
const preloader = document.querySelector(".preloader")
window.addEventListener("load", ()=>{
  preloader.classList.add("disappear")
})