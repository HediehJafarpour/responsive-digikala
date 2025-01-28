const mainAdGrid = async () => {
    try {
      // Fetch data from the API
      let data = await fetch("http://localhost:3004/mainAdGrid");
      let res = await data.json();
  
      // Generate HTML for each product
      let gridContent = res.map((product) => {
        return `
          <div class="lg:w-[16.5%] pointer-cursor !h-[270px] sm:w-[48%] w-full flex flex-col bg-white p-4 border-[.2px]  shadow-md">
            <div class="w-full flex justify-center">
              <img
                id="product-img"
                class="w-[130px] h-[130px] object-cover cursor-pointer"
                src="${product.link}"
                alt="${product.name}"
              />
            </div>
            <span
              class="text-[12px] font-[farsi] h-[38px] text-gray-700 font-semibold mt-3 line-clamp-2"
            >
              ${product.name}
            </span>
            <div class="flex  items-center  mt-2 gap-x-2">
              <div
                class="w-[40px] font-[bnazanin]  h-[25px] bg-[#d32c4e] text-white rounded-full text-[12px] flex items-center justify-center"
              >
                ${product.discount}%
              </div>
              <div
                class="text-[16px] font-[bnazanin]  w-[156px] text-gray-800 font-semibold flex items-start justify-end "
              >
                ${product.price}
                <img
                  class="w-[14px] h-[14px] ml-1"
                  src="./public/images/incredible/svgexport-20.svg"
                  alt="currency"
                />
              </div>
            </div>
            <div
              class="text-[14px] font-[bnazanin] flex justify-end text-gray-500 line-through mt-1"
            >
              ${product.realprice}
            </div>
          </div>
        `;
      });
  
      // Inject generated HTML into the mainAdGrid container
      document.querySelector(".mainAdGrid").innerHTML = gridContent.join("");
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  
  export default mainAdGrid;
  