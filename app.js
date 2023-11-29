let worldBtn=document.querySelector("#our-world")
let contactBtn=document.querySelector("#contact")
let DropDown1=document.querySelector(".drop-down-1")
let DropDown2=document.querySelector(".drop-down-2")
let dropdown=false
worldBtn.addEventListener("mouseenter",()=>{
    if(dropdown===false){
        DropDown1.classList.add("show")
        dropdown=true
    }
})
DropDown1.addEventListener("mouseleave",()=>{
    DropDown1.classList.remove("show")
    dropdown=false
})
contactBtn.addEventListener("mouseenter",()=>{
    if(dropdown===false){
        DropDown2.classList.add("show")
        dropdown=true
    }
})
DropDown2.addEventListener("mouseleave",()=>{
    DropDown2.classList.remove("show")
    dropdown=false
})
let menuBtn=document.querySelector(".bi-list")
let cancelBtn=document.querySelector(".bi-x-lg")
let menuBar=document.querySelector(".menu-bar")
menuBtn.addEventListener("click",()=>{
    menuBar.classList.remove("hidden")
    menuBar.classList.toggle("menu-bar-show")
})
cancelBtn.addEventListener("click",()=>{
    menuBar.classList.remove("menu-bar-show")
    menuBar.classList.toggle("hidden")

})