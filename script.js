const menu=document.querySelector(".menu"),nav=document.querySelector(".navlinks");
if(menu){menu.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",open)})}
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener("click",()=>nav?.classList.remove("open")));