const Adgrid = async () => {
  try {
    // دریافت داده‌ها از لینک مشخص‌شده
    let data = await fetch("https://hediehjafarpour.github.io/responsive-digikala/db.json");
    let jsonData = await data.json();

    // استخراج داده‌های بخش Adgrid
    let res = jsonData.Adgrid;

    // تولید HTML برای هر دسته از داده‌ها
    let menu = res.map((item) => {
      // ساختن تصاویر به صورت 2x2
      let fill = item.pic
        .map(
          (element) =>
            `<div class="w-full h-auto flex justify-center items-center bg-white p-3 overflow-hidden">
              <img class="w-[150px] h-[150px] lg:w-[130px] lg:h-[130px] object-cover cursor-pointer" src="${element.link}" alt="">
            </div>`
        )
        .join("");

      return `<div class="lg:w-[30%] w-full py-[10px] px-[20px] flex flex-col gap-y-[12px] bg-white shadow-md border border-neutral-200">
          <h6 class="text-[17px] font-semibold mt-[8px] text-gray-800">${item.id}</h6>
          <span class="text-[11px] opacity-60 pr-[8px]">بر اساس سلیقه شما</span>
          <div class="grid grid-cols-2 gap-[1px] bg-gray-200 bg-opacity-70 rounded-[12px]">
            ${fill}
          </div>
          <span class="text-[12px] cursor-pointer text-center justify-center my-[15px] flex flex-row text-[#19BFD3] leading-[18px]">مشاهده
            <img class="w-[15px] h-[15px] ml-[5px]" src="./public/images/Adgrid/Untitled.png" alt="">
          </span>
        </div>`;
    });

    // افزودن HTML تولید شده به DOM
    document.querySelector(".Adgrid").innerHTML = menu.join("");
  } catch (error) {
    console.error("Error:", error.message);
  }
};

export default Adgrid;
