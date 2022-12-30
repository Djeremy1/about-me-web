
const body = document.body;
let lastscroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset

    if (currentScroll <= 0) {
        body.classList.remove("scroll-up")
    }

    if (currentScroll > lastscroll && !body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-up")
        body.classList.add("scroll-down")
    }

    if (currentScroll > lastscroll && body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-down")
        body.classList.add("scroll-up")
    }

    lastscroll = currentScroll;
})
