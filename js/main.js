var navShow = document.querySelector(".site-navshow ")
var openBtn = document.querySelector(".show-btn")
var showBg = document.querySelector(".overly")

openBtn.addEventListener("click", function(){
    navShow.classList.toggle("navshow")
    showBg.classList.toggle("navshow")
    openBtn.classList.toggle("closebtn")
})