const ads3 = async () => {
  let menu = "";
  try {
    let data = await fetch("http://localhost:3004/ads3");
    let res = await data.json();

    menu = res.map((item) => {
      return `<img class="block calc-100-minus-60 lg:w-[660px] md:px-0 sm:px-2 mx-auto object-cover
 h-[264px] cursor-pointer rounded-[16px]" src="${item.link}" alt="">`;
    });

    document.querySelector(".ads3").innerHTML = menu.join("");
  } catch (error) {
    console.log(error.message);
  }
};

export default ads3;
