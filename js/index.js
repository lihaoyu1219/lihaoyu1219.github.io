const nav_close = document.querySelector(".nav_close");
const nav_menu = document.querySelector(".nav_menu");
nav_close.addEventListener("click", function () {
    nav_close.classList.toggle("active");
    nav_close.classList.contains("active") ? nav_menu.classList.add("active") : nav_menu.classList.remove("active");
})

// observer S
const detail_items = document.querySelectorAll(".detail_items");
let detail_show_delay = 0;
let detail_show_timeout = null;
const observer = new IntersectionObserver(entries => {
    console.log(entries);
    entries.forEach(element => {
        if (element.isIntersecting) {
            clearTimeout(detail_show_timeout);
            detail_show_timeout = setTimeout(() => {
                detail_show_delay = 0;
            }, 500);
            // 节流阀
            detail_show_delay = Number(detail_show_delay + 0.1);
            element.target.style.animation = `observer .8s ease-in-out forwards ${detail_show_delay}s`
            observer.unobserve(element.target);
        }
    })
})
detail_items.forEach(element => {
    observer.observe(element);
})
// observer E