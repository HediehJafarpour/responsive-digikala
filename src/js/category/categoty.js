const category = async () => {
  let menu = "";
  try {
    const data = await fetch("http://localhost:3004/category");
    const res = await data.json();

    menu = res.map((item) => {
      return `<div class="!w-[109px] cursor-pointer h-[160px] flex flex-col gap-y-[10px]">
                <img class="block w-[100px] h-[100px]" src="${item.link}" alt="${item.name}">
                <h5 class="text-[12px] text-center">${item.name}</h5>
              </div>`;
    });

    document.querySelector(".category").innerHTML = menu.join("");
  } catch (error) {
    console.error(error.message);
  }
};

export default category;
