// ========== SCROLL ANIMATIONS ==========
document.addEventListener("DOMContentLoaded", () => {
    const scrollElements = document.querySelectorAll(".scroll-animate");

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                obs.unobserve(entry.target); // biar animasi cuma jalan sekali
            }
        });
    }, {
        threshold: 0.1
    });

    scrollElements.forEach(el => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", () => {
  const currentLocation = window.location.pathname.split("/").pop(); 
  const menuItems = document.querySelectorAll(".nav-link");

  menuItems.forEach(item => {
    const itemHref = item.getAttribute("href").split("/").pop();
    if (itemHref === currentLocation) {
      item.classList.add("text-yellow-400", "font-bold"); // contoh styling aktif
    }
  });
});


// ========== MOBILE MENU ==========
const menuBtn = document.getElementById('menuBtn');
if (menuBtn) {
    menuBtn.addEventListener('click', function () {
        const mobileMenu = document.getElementById('mobileMenu');
        if (mobileMenu) {
            mobileMenu.classList.toggle('hidden');
        }
    });
}

// ========== LIGHTBOX ==========
function openLightbox(element) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');

    if (!lightbox || !lightboxImage) return;

    const img = element.querySelector('img');

    if (img) {
        lightboxImage.innerHTML = `<img src="${img.src}" alt="${img.alt}" class="w-auto h-auto max-w-[800px] max-h-[800px] object-contain rounded-lg">`;
    } else {
        lightboxImage.className = element.className;
        lightboxImage.innerHTML = '';
    }

    lightbox.classList.add('active');
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.remove('active');
    }
}

const lightboxEl = document.getElementById('lightbox');
if (lightboxEl) {
    lightboxEl.addEventListener('click', function (e) {
        if (e.target === this) {
            closeLightbox();
        }
    });
}

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});


// ========== FILTER MOTIF ==========
function filterMotif(category, el) {
    const items = document.querySelectorAll('.motif-item');
    const buttons = document.querySelectorAll('.filter-btn');

    if (buttons.length > 0) {
        buttons.forEach(btn => {
            btn.classList.remove('bg-white', 'text-black');
            btn.classList.add('bg-transparent', 'border', 'border-white');
        });

        if (el) {
            el.classList.remove('bg-transparent', 'border', 'border-white');
            el.classList.add('bg-white', 'text-black');
        }
    }

    if (items.length > 0) {
        items.forEach(item => {
            if (category === 'all' || item.dataset.category === category) {
                item.classList.remove("hidden");
            } else {
                item.classList.add("hidden");
            }
        });
    }
}


// ========== FORM KONTAK ==========
function handleSubmit(event) {
    event.preventDefault();
    alert('Terima kasih! Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.');
    event.target.reset();
}

// ========== SCROLL ANIMATIONS ==========
function initScrollAnimations() {
    const animateElements = document.querySelectorAll('.scroll-animate');
    if (animateElements.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animateElements.forEach(el => {
        el.classList.remove('show');
        observer.observe(el);
    });
}

window.addEventListener('DOMContentLoaded', function () {
    initScrollAnimations();
});

let scrollTimeout;
window.addEventListener('scroll', function () {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(function () {
        initScrollAnimations();
    }, 50);
});
