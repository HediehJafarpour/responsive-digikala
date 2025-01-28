const ads2 = async () => {
    let menu = "";
    try {
      let data = await fetch("http://localhost:3004/ads2");
      let res = await data.json();

      menu = res.map((item) => {
        return `<img class="block w-[322px] sm:my-[10px] lg:my-0 mx-auto h-[242px] cursor-pointer rounded-[16px]" src="${item.link}" alt="">`;
      });
  
      document.querySelector(".ads2").innerHTML = menu.join("");
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export default ads2;
  