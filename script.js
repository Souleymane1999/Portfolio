
window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 90) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


function toggleMenu() {
    const menu = document.querySelector(".right");
    menu.classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".gallery-item");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.querySelector(".lightbox-content");
    const closeBtn = document.querySelector(".close");

    images.forEach(img => {
        img.addEventListener("click", function() {
            lightbox.style.display = "flex";
            lightboxImg.src = this.src;
        });
    });

    closeBtn.addEventListener("click", function() {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", function(e) {
        if (e.target !== lightboxImg) {
            lightbox.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".mySwiper", {
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        on: {
            slideChangeTransitionStart: function () {
                let texts = document.querySelectorAll(".typewriter");
                texts.forEach(text => {
                    text.style.width = "0";
                    setTimeout(() => {
                        text.style.animation = "none";
                        void text.offsetWidth;
                        text.style.animation = "typing 3s steps(30, end) forwards, blink-caret 0.75s step-end infinite";
                    }, 100);
                });
            },
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("togglePricing");
    const monthlyPrices = document.querySelectorAll(".monthly");
    const yearlyPrices = document.querySelectorAll(".yearly");

    toggle.addEventListener("change", function () {
        if (toggle.checked) {
            // Affiche les prix annuels
            monthlyPrices.forEach(price => price.style.display = "none");
            yearlyPrices.forEach(price => price.style.display = "inline");
        } else {
            // Affiche les prix mensuels
            monthlyPrices.forEach(price => price.style.display = "inline");
            yearlyPrices.forEach(price => price.style.display = "none");
        }
    });
});
