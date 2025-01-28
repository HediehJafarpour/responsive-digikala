const loadCategories = async () => {
    try {
      const response = await fetch("http://localhost:3004/headersub");
      const data = await response.json();
  
      const sidebar = document.getElementById("sidebar");
      const details = document.getElementById("details");
  
      // تابع نمایش جزئیات
      const showDetails = (category) => {
        // پاک کردن محتوای قبلی
        details.innerHTML = `
          <h2 class="text-[15px] w-full font-semibold flex flex-row-reverse items-center  mb-[10px] text-[#19BFD3] mb-3"> ${category.title} <img class="w-[15px] h-[15px] ml-[5px]" src="./public/images/Adgrid/Untitled.png" alt=""></h2>
        `;
  
        const detailsGrid = document.createElement("div");
        detailsGrid.className = "grid grid-cols-3 ltr grid-rows-3 gap-6 ";
  
        category.items.forEach((item) => {
          const boldpoint = document.createElement("div");
  
          const boldText = document.createElement("p");
          boldText.className = "font-bold text-sm mb-2";
          boldText.innerText = item.boldpoint;
  
          const subitems = document.createElement("ul");
          subitems.className = "text-xs text-gray-600 ml-5";
          item.subitems.forEach((subitem) => {
            const listItem = document.createElement("li");
            listItem.innerText = subitem;
            listItem.className = "hover:text-[#ED1944]";
            subitems.appendChild(listItem);
          });
  
          boldpoint.appendChild(boldText);
          boldpoint.appendChild(subitems);
          detailsGrid.appendChild(boldpoint);
        });
  
        details.appendChild(detailsGrid);
      };
  
      // ایجاد آیتم‌های sidebar
      data.forEach((category, index) => {
        const categoryItem = document.createElement("div");
        categoryItem.className =
          "flex items-center flex-row-reverse p-3 cursor-pointer ltr hover:text-[#ED1944] hover:bg-[#ffff] bg-gray-100 border-b text-sm";
  
        const icon = document.createElement("img");
        icon.src = category.link;
        icon.alt = category.name;
        icon.className = "w-5 h-5 opacity-70 ml-2";
  
        const categoryName = document.createElement("span");
        categoryName.innerText = category.name;
        categoryName.className =
          "text-[13px] opacity-70 hover:opacity-100 hover:text-[#ED1944]";
  
        categoryItem.appendChild(icon);
        categoryItem.appendChild(categoryName);
  
        // رویداد هاور
        categoryItem.addEventListener("mouseover", () => {
          // حذف کلاس فعال از سایر دسته‌ها
          document
            .querySelectorAll(".active-category")
            .forEach((el) => el.classList.remove("active-category"));
  
          // افزودن کلاس فعال به آیتم هاور شده
          categoryItem.classList.add("active-category");
  
          // نمایش جزئیات
          showDetails(category);
        });
  
        // فعال کردن دسته اول به صورت پیش‌فرض
        if (index === 0) {
          categoryItem.classList.add("active-category");
          showDetails(category);
        }
  
        sidebar.appendChild(categoryItem);
      });
    } catch (error) {
      console.error("Error fetching categories:", error.message);
    }
  };
  
  export default loadCategories;
  