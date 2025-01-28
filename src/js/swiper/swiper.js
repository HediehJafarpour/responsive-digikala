// 1-slider
var swiper1 = new Swiper(".myslider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
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
});

// 2-slider
var swiper2 = new Swiper(".mystory", {
  slidesPerView: 12.5,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // Small screens
    350: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
    // Medium screens
    768: {
      slidesPerView: 10,
      spaceBetween: 10,
    },
    // Large screens
    1024: {
      slidesPerView: 12.5,
      spaceBetween: 10,
    },
  },
});

//3-slider
var swiper2 = new Swiper(".mybrands", {
  slidesPerView: 9.4,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // Small screens
    350: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    // Medium screens
    768: {
      slidesPerView: 7,
      spaceBetween: 10,
    },
    // Large screens
    1024: {
      slidesPerView: 9.5,
      spaceBetween: 10,
    },
  },
});

// اسکرول هدر
document.addEventListener("DOMContentLoaded", function () {
  var lastScrollTop = 0;
  var headerBottom = document.querySelector(".header__bottom");
  var headersub = document.querySelector("#headerSubmenu");

  window.addEventListener("scroll", function () {
    var currentScroll = window.scrollY || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
      // Scroll Down
      headerBottom.classList.add("top-[-50px]");
      headersub.classList.remove("group-hover:flex");
    } else {
      // Scroll Up
      headerBottom.classList.remove("top-[-50px]");
      headerBottom.classList.add("top-0");
      headersub.classList.add("group-hover:flex");
    }

    lastScrollTop = currentScroll;
  });
});

//footer buttom
document.addEventListener("DOMContentLoaded", () => {
  const content = document.querySelector("#content");
  const toggleBtn = document.querySelector("#toggleBtn");

  if (!content || !toggleBtn) {
    console.error("Element with the provided ID was not found.");
    return;
  }

  toggleBtn.addEventListener("click", () => {
    if (content.classList.contains("line-clamp-3")) {
      content.classList.replace("line-clamp-3", "line-clamp-10"); // Expand to 10 lines
      toggleBtn.textContent = "بستن"; // Update button text
    } else {
      content.classList.replace("line-clamp-10", "line-clamp-3"); // Collapse to 3 lines
      toggleBtn.textContent = "مشاهده بیشتر";
    }
  });
});

//search
const searchInput = document.getElementById("searchInput");
const searchPanelDesktop = document.getElementById("searchPanelDesktop");
const searchPanelMobile = document.getElementById("searchPanelMobile");
const closeMobilePanel = document.getElementById("closeMobilePanel");
const searchPanelBack = document.getElementById("searchPanelBack");

// مدیریت باز شدن دیو سفید برای لپ‌تاپ
searchInput.addEventListener("focus", () => {
  if (window.innerWidth >= 768) {
    searchPanelDesktop.classList.remove("hidden");
    searchPanelBack.classList.remove("hidden");
  }
});

// بستن دیو سفید لپ‌تاپ با کلیک خارج از آن
document.addEventListener("click", (event) => {
  const isClickInsideInput = searchInput.contains(event.target);
  const isClickInsidePanel = searchPanelDesktop.contains(event.target);

  if (!isClickInsideInput && !isClickInsidePanel && window.innerWidth >= 768) {
    searchPanelDesktop.classList.add("hidden");
    searchPanelBack.classList.add("hidden");
  }
});

// مدیریت باز شدن و بسته شدن دیو سفید برای موبایل
searchInput.addEventListener("focus", () => {
  if (window.innerWidth < 768) {
    searchPanelMobile.classList.remove("hidden");
  }
});

closeMobilePanel.addEventListener("click", () => {
  searchPanelMobile.classList.add("hidden");
});

//supperMarketFixed

document.addEventListener("scroll", () => {
  const targetDiv = document.querySelector(".superFixed"); // div هدف
  const targetDivHidden = document.querySelector(".superHidden"); // div هدف

  const scrollPosition = window.scrollY; // موقعیت اسکرول
  const isMobile = window.innerWidth <= 768; // بررسی موبایل (عرض <= 768px)

  if (!isMobile) {
    // فقط برای دستگاه‌های غیرموبایل
    if (scrollPosition > 2000) {

      targetDivHidden.classList.remove("hidden");
    } else {
      targetDivHidden.classList.add("hidden");
    }
  }
});
