const ads = async () => {
  let menu = "";
  try {
    // دریافت داده‌ها از لینک مشخص‌شده
    let data = await fetch("https://hediehjafarpour.github.io/responsive-digikala/db.json");
    let jsonData = await data.json();

    // استخراج داده‌های بخش ads
    let res = jsonData.ads;

    // تولید HTML برای هر آیتم تبلیغ
    menu = res.map((item) => {
      return `<img class="block w-[322px] object-contain h-[242px] lg:my-0 sm:my-[10px] mx-auto cursor-pointer rounded-[16px]" src="${item.link}" alt="">`;
    });

    // افزودن محتوای تولید شده به DOM
    document.querySelector(".ads").innerHTML = menu.join("");
  } catch (error) {
    console.log(error.message);
  }
};

export default ads;
