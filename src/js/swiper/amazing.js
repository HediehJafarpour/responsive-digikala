const amazing = async () => {
  try {
    // دریافت داده‌ها از لینک جدید
    const response = await fetch("https://hediehjafarpour.github.io/responsive-digikala/db.json");
    const jsonData = await response.json();

    // استخراج داده‌های بخش amazing
    const products = jsonData.amazing;

    // بررسی وجود داده‌ها
    if (!products || !Array.isArray(products) || products.length === 0) {
      console.error("No products found in the data");
      return;
    }

    // Timer logic
    let hours = 20;
    let minutes = 0;
    let seconds = 0;

    const updateTimer = () => {
      seconds--;

      if (seconds < 0) {
        seconds = 59;
        minutes--;
      }
      if (minutes < 0) {
        minutes = 59;
        hours--;
      }
      if (hours <= 0 && minutes <= 0 && seconds <= 0) {
        clearInterval(timerInterval);
        document.querySelector(".amazing_timer").textContent = "Time's up!";
        return;
      }

      document.getElementById("hours").textContent = String(hours).padStart(
        2,
        "0"
      );
      document.getElementById("minutes").textContent = String(minutes).padStart(
        2,
        "0"
      );
      document.getElementById("seconds").textContent = String(seconds).padStart(
        2,
        "0"
      );
    };

    const timerInterval = setInterval(updateTimer, 1000);

    // Main data
    const swiperWrapper = document.querySelector(".swiper-wrapper5");
    const amazingHeader = document.querySelector(".amzing_header");

    // ایجاد اسلایدها
    products.forEach((product) => {
      const slide = document.createElement("div");
      slide.classList.add(
        "swiper-slide",
        "flex",
        "flex-col",
        "p-4",
        "text-center",
        "text-[18px]",
        "bg-white",
        "items-start",
        "!w-[162px]",
        "!h-[290px]"
      );

      slide.innerHTML = `
          <div class="flex flex-col items-start">
    <img
      id="swiper-slide-product-img"
      class="w-[132px] block p-[2px]"
      src="${product.link}"
      alt="${product.name}"
    />
    <span
      class="opacity-[70%] my-[10px] text-[11px] !line-clamp-2 overflow-hidden text-ellipsis text-[#2b2b2b] block"
    >
      ${product.name}
    </span>
    <div class="flex w-full justify-start gap-x-[10px]">
      <div
        class="w-[35px] h-[20px] text-[13px] bg-[#d32c4e] text-[#fff] rounded-[15px] items-center !font-[bnazanin] font-semibold"
      >
        ${product.discount}%
      </div>
      <div
        class="!font-[bnazanin] text-[18px] font-semibold flex opacity-[90%] text-[#4b4b4d]"
      >
        ${product.price}
        <img
          class="w-[16px] h-[16px]"
          src="./public/images/incredible/svgexport-20.svg"
          alt="currency icon"
        />
      </div>
    </div>
    <div
      class="!font-[bnazanin]  text-[15px] pr-[30px] line-through opacity-50"
    >
      ${product.realprice}
    </div>
  </div>
        `;

      swiperWrapper.appendChild(slide);
    });

    // Initialize Swiper
    new Swiper(".amazing-swiper", {
      slidesPerView: 8.5,
      spaceBetween: 1,
      navigation: {
        nextEl: ".swiper-button-next5",
        prevEl: ".swiper-button-prev5",
      },
      on: {
        slideNextTransitionStart: () =>
          amazingHeader.classList.add("lg:hidden"),
        slidePrevTransitionStart: () =>
          amazingHeader.classList.remove("lg:hidden"),
      },
      breakpoints: {
        1600: {
          slidesPerView: 6.4,
          spaceBetween: 10,
        },
        1300: {
          slidesPerView: 5,
          spaceBetween: 8,
        },
        780: {
          slidesPerView: 4.8,
          spaceBetween: 8,
        },
        610: {
          slidesPerView: 4.5,
          spaceBetween: 10,
        },
        400: {
          slidesPerView: 3.2,
          spaceBetween: 2,
        },
      },
    });
  } catch (e) {
    console.error("Error loading Swiper:", e);
  }
};

export default amazing;
