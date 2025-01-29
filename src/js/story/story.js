const story = async () => {
  let menu = "";
  try {
    // دریافت داده‌ها از لینک مشخص‌شده
    let data = await fetch("https://hediehjafarpour.github.io/responsive-digikala/db.json");
    let jsonData = await data.json();

    // استخراج داده‌های بخش story
    let res = jsonData.story;

    // تولید HTML برای هر آیتم
    menu = res.map((item) => {
      return `<div class="swiper-slide absolute w-[102px]  my-auto flex flex-col   justify-center items-start items-stretch">
                <div class="">
                  <img
                    class="w-[85px] p-[2px] border-[2px] border-[#8E499C] rounded-[50%]"
                    src="${item.link}"
                    alt="${item.name}"
                  />
                </div>
                <div class="text-[11px] h-[30px] mt-[10px] text-[#2b2b2b]">
                  <span>${item.name}</span>
                </div>
              </div>`;
    });

    // افزودن محتوای تولید شده به DOM
    document.querySelector(".story").innerHTML = menu.join("");
  } catch (error) {
    console.log(error.message);
  }
};

export default story;
