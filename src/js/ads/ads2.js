const ads2 = async () => {
  let menu = "";
  try {
    // دریافت داده‌ها از لینک مشخص‌شده
    let data = await fetch("https://hediehjafarpour.github.io/responsive-digikala/db.json");
    let jsonData = await data.json();

    // استخراج داده‌های بخش ads2
    let res = jsonData.ads2;

    // تولید HTML برای هر آیتم تبلیغ
    menu = res.map((item) => {
      return `<img class="block w-[322px] h-[242px] lg:my-0 sm:my-[10px] mx-auto cursor-pointer rounded-[16px]" src="${item.link}" alt="">`;
    });

    // افزودن محتوای تولید شده به DOM
    document.querySelector(".ads2").innerHTML = menu.join("");
  } catch (error) {
    console.log(error.message);
  }
};

export default ads2;
