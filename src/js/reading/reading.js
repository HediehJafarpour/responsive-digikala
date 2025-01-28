const reading = async () => {
    let menu = "";
    try {
      let data = await fetch("http://localhost:3004/reading");
      let res = await data.json();
  
      menu = res.map((item) => {
        return `<div class="w-[323px] cursor-pointer h-[245px] flex flex-col overflow-hidden border-[1px] border-opacity-25 border-neutral-500 rounded-[10px] mx-auto ">
            <img class="block md:w-[323.4px] h-[201px]" src="${item.link}" alt="">
            <span class="text-[11px] block w-full my-[10px] opacity-[90%] mr-[10px] "> ${item.text} </span>
          </div>`;
      });
  
      document.querySelector(".reading").innerHTML = menu.join("");
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export default reading;
  