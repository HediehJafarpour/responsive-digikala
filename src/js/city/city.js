const city = async () => {
    let menu = "";
    try {
      // دریافت داده‌ها از لینک مشخص‌شده
      let data = await fetch("https://hediehjafarpour.github.io/responsive-digikala/db.json");
      let jsonData = await data.json();
  
      // استخراج داده‌های بخش city
      let res = jsonData.city;
  
      // تولید HTML برای هر آیتم تبلیغ
      menu = res.map((item) => {
        return `<div class="flex justify-between items-center p-2 border-b cursor-pointer">
                              <p>${item.name}</p>
                              <img src="./public/images/city/svgexport-13.svg" alt="فلش" class="w-5 h-5">
                          </div>`;
      });
  
      // افزودن محتوای تولید شده به DOM
      document.querySelector(".city").innerHTML = menu.join("");
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export default city;
  