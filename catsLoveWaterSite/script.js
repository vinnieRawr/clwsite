document.addEventListener("DOMContentLoaded", () => {
    const matureModal = document.getElementById("mature-modal");
    const enterBtn = document.getElementById("enterBtn");
    const siteContent = document.getElementById("site-content");
    function getCookie(name) {
        const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
        return match ? match[2] : null;
    }

    function setSessionCookie(name, value) {
        document.cookie = `${name}=${value}; path=/; SameSite=Lax`;
    }

    const isAdult = getCookie("isAdult");

    if (isAdult === "true") {
        matureModal.style.display = "none";
        siteContent.classList.remove("blurred");
        document.body.classList.remove("scroll-block");
    } else {
        matureModal.style.display = "flex";
        siteContent.classList.add("blurred");
        document.body.classList.add("scroll-block");
    }

    enterBtn.addEventListener("click", () => {
        setSessionCookie("isAdult", "true");
        matureModal.style.display = "none";
        siteContent.classList.remove("blurred");
        document.body.classList.remove("scroll-block");
    });

    //fixes shitty embed
    window.addEventListener("load", () => {
    const slot = document.getElementById("bandcamp-slot");
    if (!slot) return;

    const observer = new IntersectionObserver(entries => {
        if (!entries[0].isIntersecting) return;

        slot.innerHTML = `
        <iframe
            src="https://bandcamp.com/EmbeddedPlayer/album=982883145/size=large/bgcol=333333/linkcol=4ec5ec/transparent=true/"
            style="border:0;width:366px;height:1035px;"
        ></iframe>
        `;
        observer.disconnect();
    }, { threshold: 0.3 });

    observer.observe(slot);
    });



    const button = document.getElementById("mobilebutton");
    const menu = document.getElementById("mobilemenu");

function openMenu() {
    menu.showPopover();
}


function closeMenu() {
    if (!menu.matches(":popover-open")) return;

    menu.classList.add("closing");

    menu.addEventListener(
        "transitionend",
        () => {
            menu.classList.remove("closing");
            menu.hidePopover();
        },
        { once: true }
    );
}

button.addEventListener("click", () => {
    if (menu.matches(":popover-open")) {
        closeMenu();
    } else {
        openMenu();
    }
});

menu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => closeMenu());
});

document.addEventListener("click", e => {
    if (!menu.matches(":popover-open")) return;

    const clickInsideMenu = menu.contains(e.target);
    const clickButton = button.contains(e.target);

    if (!clickInsideMenu && !clickButton) {
        closeMenu();
    }
});
    // gallery modal
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const modalCaption = document.getElementById("modalCaption");
    const closeBtn = document.querySelector(".close");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    
const nsfwBtn = document.getElementById("shownsfw");
const nsfwItems = document.querySelectorAll(".nsfw-item");
const sfwItems = document.querySelectorAll(".gallery-item:not(.nsfw-item)");

let showingNSFW = false;

    nsfwBtn.addEventListener('click', () => {
        showingNSFW = !showingNSFW;

        nsfwBtn.textContent = showingNSFW ? 'Show SFW' : 'Show NSFW';

        if (showingNSFW) {
            sfwItems.forEach(item => item.classList.add('btn-hidden'));

            nsfwItems.forEach(item => {
                item.classList.remove('btn-hidden');
                const img = item.querySelector('img');
                if (!img.src) {
                    img.src = img.dataset.src;
                }
            });
        } else {
            sfwItems.forEach(item => item.classList.remove('btn-hidden'));

            nsfwItems.forEach(item => item.classList.add('btn-hidden'));
        }
    });



    
    let images = [];
    let currentIndex = 0;

    function openModal(index, imgArray) {
    images = imgArray;
    currentIndex = index;


    showImage();

    let touchStartX = 0;
    let touchEndX = 0;
    const SWIPE_THRESHOLD = 50; // px

    const modalCenter = document.querySelector('.modal-center');

    modalCenter.addEventListener('touchstart', (e) => {
    if (e.touches.length !== 1) return;
    touchStartX = e.touches[0].clientX;
    }, { passive: true });

    modalCenter.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].clientX;
    handleSwipe();
    });

    function handleSwipe() {
  const deltaX = touchEndX - touchStartX;

  if (Math.abs(deltaX) < SWIPE_THRESHOLD) return;

  if (deltaX > 0) {
    document.querySelector('.nav.prev').click();
  } else {
    document.querySelector('.nav.next').click();
  }
}



    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    }

    function showImage() {
    const img = images[currentIndex];
    modalImg.src = img.src;
    modalCaption.textContent = img.alt || "";
    }

    function setupModalForClass(className) {
    const imgArray = Array.from(document.querySelectorAll("." + className));
    imgArray.forEach((img, index) => {
        img.addEventListener("click", () => openModal(index, imgArray));
    });
    }

    setupModalForClass("galpic");
    setupModalForClass("galpicnsfw");
    setupModalForClass("fanpic");

    nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
    });

    prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage();
    });

    function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    }

    closeBtn.addEventListener("click", closeModal);

    modal.addEventListener("click", (e) => {
    if (!e.target.closest('.modal-center') && !e.target.closest('.nav')) {
        closeModal();
    }
    });

    document.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("open")) return;

    if (e.key === "Escape") {
        closeModal();
    } else if (e.key === "ArrowRight") {
        currentIndex = (currentIndex + 1) % images.length;
        showImage();
    } else if (e.key === "ArrowLeft") {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage();
    }
    });

});