// typed script js home
let typed = new Typed(".typing",{
    strings:["Web Developer","Web Designer","Front End Developer"],
    typeSpeed:80,
    backSpeed:80,
})
// typed script js about
let typeds = new Typed(".typing-two",{
    strings:["Web Developer","Web Designer","Front End Developer"],
    typeSpeed:80,
    backSpeed:80,
})
// show / hide nav menu 
const menu = document.querySelector(".nav-menu");
const menubtn = document.querySelector("#open-menu-btn");
const closebtn = document.querySelector("#close-menu-btn");

menubtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closebtn.style.display = "inline-block";
    menubtn.style.display = "none";
})
// close nav menu 
const closeNav = () => {
    menu.style.display = "none";
    closebtn.style.display = "none";
    menubtn.style.display = "inline-block";
}
closebtn.addEventListener( "click",closeNav);

// nav color change on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY>100);
});