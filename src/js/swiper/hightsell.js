const highSell = async () => {
  try {
    const response = await fetch("http://localhost:3004/highSell");
    if (!response.ok) throw new Error("Failed to fetch data");

    const responseData = await response.json();

    const containers = [
      { id: "highSellSwiper", sellType: "highsell" },
      { id: "hotSellSwiper", sellType: "hotsell" },
    ];

    containers.forEach(({ id, sellType }) => {
      const sellData = responseData.find((entry) => entry.type === sellType);

      if (!sellData || !sellData.items) {
        console.error(`No data found for type '${sellType}'`);
        return;
      }

      const swiperWrapper = document.querySelector(`#${id} .swiper-wrapper`);
      if (!swiperWrapper) {
        console.error(`Swiper wrapper not found for ID '${id}'`);
        return;
      }

      sellData.items.forEach((category) => {
        const slide = document.createElement("div");
        slide.classList.add("swiper-slide");

        const container = document.createElement("div");
        container.classList.add("flex", "flex-col", "w-[300px]", "gap-2");

        // Add items as rows
        category.items.forEach((item) => {
          const row = document.createElement("div");
          row.classList.add(
            "flex",
            "items-center",
            "justify-start",
            "gap-4",
            "py-2",
            "border-b",
            "border-gray-300",
            "border-opacity-25",
            "w-[300px]",
            "h-[100px]",
            "last:border-none"
          );

          row.innerHTML = `
              <img src="${item.url}" alt="Item ${item.id}" class="w-[86px] h-[86px] object-cover rounded">
              <span class="text-[28px] font-bold font-[bnazanin] text-[15px] text-[#19bfd3]">${item.id}</span>
              <p class="text-[12px] w-[190px] text-[#354363] font-medium line-clamp-2">${item.title}</p>
            `;

          container.appendChild(row);
        });

        slide.appendChild(container);
        swiperWrapper.appendChild(slide);
      });
      
      new Swiper(`#${id}`, {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        slidesPerView: 1.2,
        spaceBetween: 1,
        breakpoints: {
          640: { slidesPerView: 2 },
          768: { slidesPerView: 2.5 },
          1024: { slidesPerView: 3.9 },
        },
      });
    });
  } catch (error) {
    console.error("Error fetching or processing sell section data:", error);
  }
};

export default highSell;
