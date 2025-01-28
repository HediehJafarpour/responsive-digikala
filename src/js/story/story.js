const story = async () => {
    let menu = "";
    try {
      let data = await fetch("http://localhost:3004/story");
      let res = await data.json();
  
      menu = res.map((item) => {
        return `<div class="swiper-slide absolute w-[102px] h-full my-auto flex flex-col h-full  justify-center items-start items-stretch">
              <div class="h-[80px]">
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
  
      document.querySelector(".story").innerHTML = menu.join("");
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export default story;
  