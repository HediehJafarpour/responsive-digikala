const ads = async () => {
  let menu = "";
  try {
    let data = await fetch("http://localhost:3004/ads");
    let res = await data.json();

    menu = res.map((item) => {
      return `<img class="block w-[322px] h-[242px] lg:my-0 sm:my-[10px] mx-auto cursor-pointer rounded-[16px]" src="${item.link}" alt="">`;
    });

    document.querySelector(".ads").innerHTML = menu.join("");
  } catch (error) {
    console.log(error.message);
  }
};

export default ads;
