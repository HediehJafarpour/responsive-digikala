const icon = async () => {
    let menu = "";
    try {
      let data = await fetch("http://localhost:3004/icon");
      let res = await data.json();
  
      menu = res.map((item) => {
        return `<div class="flex cursor-pointer flex-col gap-y-[8px] pt-[25px]">
          <img
            class="w-[55px]"
            src="${item.link}"
            alt="${item.name}"
          />
          <span class="w-[50px] text-center text-[11.5px] text-[#3f4064]"
            >${item.name}</span
          >
        </div>`;
      });
  
      document.querySelector(".icon").innerHTML = menu.join("");
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export default icon;
  