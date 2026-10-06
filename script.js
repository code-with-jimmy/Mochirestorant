let on = document.querySelector("#on");
  let on_toggle = document.querySelector("#on-toggle");

  on.addEventListener("click", (e) => {
    e.stopPropagation();
    on_toggle.classList.toggle("on-change")
  })

    document.addEventListener("click", () => {
      on_toggle.classList.remove("on-change");
    })

// secend

document.querySelector(".blog").addEventListener("click", () => {
  alert("Service coming soon! Stay tuned.");
})


// third

let btns = document.querySelectorAll(".ORDER");

btns.forEach((curl) => {
  curl.addEventListener("click", () => {
    alert("Service coming soon! Stay tuned.");
  })
})



// search items */

let checkBox = document.querySelectorAll(".btns");
let imgBox = document.querySelectorAll(".items-img");

checkBox.forEach((curl) => {
  curl.addEventListener("click", () => {
    let cat = curl.dataset.zim.toLowerCase(); 
    
    imgBox.forEach((item) => {
      let title = item.getAttribute("data-category");
      
      if(cat === "all" || title.includes(cat)){
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});


