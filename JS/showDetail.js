// let btnDetail = document.querySelector("#btn-detail");
// // btnDetail.addEventListener("click", () => changeDisplayBlock);
// btnDetail.addEventListener("click", () => {
//   let detailList = document.querySelectorAll(".detail");
//   detailList.classList.toggle("mystyle");
// });
const detailList = document.querySelector(".detail");
const btnDetail = document.querySelector("#btn-detail");
function displayToggle() {
  if (detailList.style.display === "none") {
    btnDetail.innerHTML = "숨기기";
    detailList.style.display = "block";
  } else {
    detailList.style.display = "none";
    btnDetail.innerHTML = "자세히보기";
  }
}
