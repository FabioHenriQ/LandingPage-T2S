window.addEventListener("scroll", ()=> {
    let header = document.querySelector('#header');
    header.classList.toggle('scroll-menu', window.scrollY > 200);
});