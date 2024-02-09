window.addEventListener("scroll", ()=> {
    let header = document.querySelector('#header');
    header.classList.toggle('scroll-menu', window.scrollY > 70);

    let pageUp = document.querySelector('.pageUp');
    pageUp.classList.toggle('showPageUp', window.scrollY > 200);
});