const brands = async () => {
  let menu = "";
  try {
    // دریافت داده‌ها از لینک جدید
    let response = await fetch("https://hediehjafarpour.github.io/responsive-digikala/db.json");
    let jsonData = await response.json();

    // استخراج داده‌های بخش brands
    let res = jsonData.brands;

    // تولید HTML برای داده‌ها
    menu = res.map((item) => {
      return `<div class="swiper-slide absolute w-[102px] !h-[120px] my-auto border-l-[1px] border-opacity-25 border-neutral-400">
                <img
                  class="w-[110px]"
                  src="${item.link}"
                  alt="${item.name}"
                />
              </div>`;
    });

    // اضافه کردن HTML تولید شده به DOM
    document.querySelector(".brands").innerHTML = menu.join("");
  } catch (error) {
    console.log("Error fetching brands:", error.message);
  }
};

export default brands;
