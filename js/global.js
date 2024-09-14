

const iconMenu = document.querySelector("#iconMenu");
const iconX = document.querySelector("#iconX");
const menuResponsive = document.querySelector(".menu__responsive");
const menuResponsiveUl = document.querySelector(".menu__reponsive--ul");

iconMenu.addEventListener("click", () => {
    menuResponsive.classList.add("menuResponsiveActive")
    menuResponsiveUl.classList.add("menuResponsiveUlActive")
})

iconX.addEventListener("click", () => {
    menuResponsive.classList.remove("menuResponsiveActive")
    menuResponsiveUl.classList.remove("menuResponsiveUlActive")
})



const botonTop = document.querySelector(".boton__top");

window.onscroll = function () {
    let scroll = document.documentElement.scrollTop;
    if(scroll > 1000){
        botonTop.classList.add("botonTopActive")
    }
    else if(scroll < 1000){
        botonTop.classList.remove("botonTopActive")
    }
}