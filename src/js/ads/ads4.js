const ads4 = async () => {
  let menu = "";
  try {
    // دریافت داده‌ها از لینک جدید
    let data = await fetch("https://hediehjafarpour.github.io/responsive-digikala/db.json");
    let jsonData = await data.json();

    // استخراج داده‌های بخش ads4
    let res = jsonData.ads4;

    // تولید HTML برای هر آیتم
    menu = res.map((item) => {
      return `<img class="block calc-100-minus-60 lg:w-[660px] md:px-0 sm:px-2 mx-auto object-cover h-[264px] cursor-pointer rounded-[16px]" src="${item.link}" alt="">`;
    });

    // افزودن محتوای تولید شده به DOM
    document.querySelector(".ads4").innerHTML = menu.join("");
  } catch (error) {
    console.log(error.message);
  }
};

export default ads4;
