const brands = async () => {
    let menu = "";
    try {
      let data = await fetch("http://localhost:3004/brands");
      let res = await data.json();
  
      menu = res.map((item) => {
        return `<div class="swiper-slide absolute w-[102px] !h-[120px] my-auto border-l-[1px] border-opacity-25 border-neutral-400">
                <img
                  class="w-[110px] "
                  src="${item.link}"
                  alt=""
                />
                </div>`;
      });
  
      document.querySelector(".brands").innerHTML = menu.join("");
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export default brands;
  