const category = async () => {
  let menu = "";
  try {
    // دریافت داده‌ها از لینک مشخص‌شده
    const data = await fetch("https://hediehjafarpour.github.io/responsive-digikala/db.json");
    const jsonData = await data.json();

    // استخراج داده‌های بخش category
    const res = jsonData.category;

    // تولید HTML برای هر دسته‌بندی
    menu = res.map((item) => {
      return `<div class="!w-[109px] cursor-pointer h-[160px] flex flex-col gap-y-[10px]">
                <img class="block w-[100px] h-[100px]" src="${item.link}" alt="${item.name}">
                <h5 class="text-[12px] text-center">${item.name}</h5>
              </div>`;
    });

    // افزودن محتوای تولید شده به DOM
    document.querySelector(".category").innerHTML = menu.join("");
  } catch (error) {
    console.error(error.message);
  }
};

export default category;
