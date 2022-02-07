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

let numOne = document.getElementById("num-one")
let numTwo = document.getElementById("num-two")
let numThree = document.getElementById("num-three")
let numFour= document.getElementById("num-four")
let numFive = document.getElementById("num-five")
let numSix = document.getElementById("num-six")
let numSeven = document.getElementById("num-seven")
let numEight = document.getElementById("num-eight")
let i = 0
function increaseWidth (){
  if(i == 0){
    i = 1
  var  elOne = document.getElementById("html")
  var  elTwo = document.getElementById("css")
  var  elThree = document.getElementById("js")
  var  elFour = document.getElementById("react")
  var  elFive = document.getElementById("node")
  var  elSix = document.getElementById("java")
  var  elSeven = document.getElementById("git")
  var  elEight = document.getElementById("scss")
  var width = 0
  let intervalOne = setInterval(Html, 60)
  let intervalTwo = setInterval(Css, 60)
  let intervalThree = setInterval(Js, 60)
  let intervalFour = setInterval(React, 60)
  let intervalFive = setInterval(NodeJs, 60)
  let intervalSix = setInterval(Java, 60)
  let intervalSeven = setInterval(Git, 60)
  let intervalEight = setInterval(Scss, 60)
  function Html(){
    if(width >= 77){
      clearInterval(intervalOne)
      i=0
    }else{
      width ++
      elOne.style.width = width + "%";
      numOne.textContent = width + "%";
    }
  }

  function Css(){
    width --;
    if(width >= 65){
      clearInterval(intervalTwo)
      i = 0
    }else{
      width ++;
      elTwo.style.width = width + "%";
      numTwo.textContent = width + "%";
    }
  }
  function Js (){
    width --
  if(width >= 60){
    clearInterval(intervalThree)
    i = 0
  }else{
    width ++
    elThree.style.width = width + "%"
    numThree.textContent = width + "%"
    
  }
  }
  function React(){
    width --;
    if(width >= 50){
      clearInterval(intervalFour)
      i=0
    }else{
      width ++
      elFour.style.width = width + "%"
      numFour.textContent = width + "%"
    }
  }
  function NodeJs(){
    width --
    if(width >= 20){
      clearInterval(intervalFive)
      i= 0
    }else{
      width ++
      elFive.style.width = width + "%"
      numFive.textContent = width + "%";
    }
  }
    function Java(){
    width --
    if(width >= 20){
      clearInterval(intervalSix)
      i= 0
    }else{
      width ++
      elSix.style.width = width + "%"
      numSix.textContent = width + "%";
    }
  }
  function Git (){
    width--
    if(width >= 45){
      clearInterval(intervalSeven)
      i = 0
    }else{
      width++
      elSeven.style.width = width + "%"
      numSeven.textContent = width + "%";
    }
  }
  function Scss (){
    width --
    if(width >= 55){
      clearInterval(intervalEight)
      i = 0
    }else{
      width ++;
      elEight.style.width = width + "%"
      numEight.textContent = width + "%"
    }
  }
  }

}
increaseWidth()

const filterButtons = document.querySelector("#filter-btns").children
const items = document.querySelector(".gallery-container").children

for(let i=0; i < filterButtons.length; i++){
  filterButtons[i].addEventListener("click", function(){
   
    const target = this.getAttribute("data-target")
    for(let k = 0; k < items.length; k++){
      items[k].style.display = "none"
      if(target == items[k].getAttribute("data-id")){
        items[k].style.display = "block" 
      }
      if(target == "all"){
        items[k].style.display = "block"
      }
    }
  })
}