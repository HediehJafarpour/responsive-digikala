const icon = async () => {
  let menu = "";
  try {
    // دریافت داده‌ها از لینک مشخص‌شده
    let data = await fetch("https://hediehjafarpour.github.io/responsive-digikala/db.json");
    let jsonData = await data.json();

    // استخراج داده‌های بخش icon
    let res = jsonData.icon;

    // تولید HTML برای هر آیکون
    menu = res.map((item) => {
      return `<div class="flex cursor-pointer flex-col gap-y-[8px] pt-[25px]">
          <img
            class="w-[55px]"
            src="${item.link}"
            alt="${item.name}"
          />
          <span class="w-[50px] text-center text-[11.5px] text-[#3f4064]">
            ${item.name}
          </span>
        </div>`;
    });

    // افزودن محتوای تولید شده به DOM
    document.querySelector(".icon").innerHTML = menu.join("");
  } catch (error) {
    console.log(error.message);
  }
};

export default icon;
