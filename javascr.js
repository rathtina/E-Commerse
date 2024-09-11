let searchForm = document.querySelector(".search-form");
document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  loginForm.classList.remove("active");
  barForm.classList.remove("active");
};
let loginForm = document.querySelector(".login-form");
document.querySelector("#user-btn").onclick = () => {
  loginForm.classList.toggle("active");
  searchForm.classList.remove("active");
  barForm.classList.remove("active");
};
let barForm = document.querySelector(".nav-list");
document.querySelector("#bar-btn").onclick = () => {
  barForm.classList.toggle("active");
  searchForm.classList.remove("active");
  loginForm.classList.remove("active");
};
window.onscroll = () => {
  searchForm.classList.remove("active");
  loginForm.classList.remove("active");
  barForm.classList.remove("active");
};


let previewContainer = document.querySelector(".products-preview");
let previewBox = previewContainer.querySelectorAll(".preview");

document.querySelectorAll(".box-container .small-box").forEach((product) => {
  product.onclick = () => {
    previewContainer.style.display = "flex";
    let name = product.getAttribute("data-name");
    previewBox.forEach((preview) => {
      let target = preview.getAttribute("data-target");
      if (name == target) {
        preview.classList.add("actives");
      }
    });
  };
});
previewBox.forEach((close) => {
  close.querySelector(".fa-xmark").onclick = () => {
    close.classList.remove("actives");
    previewContainer.style.display = "none";
  };
});
