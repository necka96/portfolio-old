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