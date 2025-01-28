const reading = async () => {
  let menu = "";
  try {
    // دریافت داده‌ها از لینک مشخص‌شده
    let data = await fetch("https://hediehjafarpour.github.io/responsive-digikala/db.json");
    let jsonData = await data.json();

    // استخراج داده‌های بخش reading
    let res = jsonData.reading;

    // تولید HTML برای هر آیتم
    menu = res.map((item) => {
      return `<div class="w-[323px] cursor-pointer h-[245px] flex flex-col overflow-hidden border-[1px] border-opacity-25 border-neutral-500 rounded-[10px] mx-auto ">
                <img class="block md:w-[323.4px] h-[201px]" src="${item.link}" alt="">
                <span class="text-[11px] block w-full my-[10px] opacity-[90%] mr-[10px] "> ${item.text} </span>
              </div>`;
    });

    // افزودن محتوای تولید شده به DOM
    document.querySelector(".reading").innerHTML = menu.join("");
  } catch (error) {
    console.log(error.message);
  }
};

export default reading;
