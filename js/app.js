//const sub_nav = document.querySelector('.special_li');
const special_li = document.querySelector('.special_li')
const dropdown_menu = document.querySelector('.drop')
const show = document.querySelector(".show")

window.addEventListener("load", ()=>{
    document.querySelector(".loader").classList.add('loader-hidden')
})

window.addEventListener("transitioned", ()=>{
    document.removeChild(document.querySelector(".loader"));
})


special_li.addEventListener('click',(e)=>{
    e.preventDefault;
    dropdown_menu.classList.toggle("show")
    
})

window.addEventListener("click",()=>{
    dropdown_menu.classList.remove("show")
})