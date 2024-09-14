const heroRounded= document.querySelector("#hero__rounded");
const heroCard1 = document.querySelector("#hero__card1");
const heroCard2 = document.querySelector("#hero__card2");
const heroCard3 = document.querySelector("#hero__card3");

heroCard1.addEventListener("mouseenter", () =>{
    heroRounded.style.backgroundColor="#52C1DB";
})
heroCard1.addEventListener("mouseleave", () =>{
    heroRounded.style.backgroundColor="rgb(223, 243, 255)";
})

heroCard2.addEventListener("mouseenter", () =>{
    heroRounded.style.backgroundColor="#E894AD";
})
heroCard2.addEventListener("mouseleave", () =>{
    heroRounded.style.backgroundColor="rgb(223, 243, 255)";
})

heroCard3.addEventListener("mouseenter", () =>{
    heroRounded.style.backgroundColor="#EDB801";
})
heroCard3.addEventListener("mouseleave", () =>{
    heroRounded.style.backgroundColor="rgb(223, 243, 255)";
})