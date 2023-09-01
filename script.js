const btnSubmit = document.querySelector(".btn-submit");
const selected = document.querySelector(".selected");
const thankYou = document.querySelector(".thank-you");
const rating = document.querySelector(".rating");
const radioBtn = document.getElementsByName("btn-rating");
let selectedValue;

btnSubmit.onclick = function () {
  for (let i = 0; i < radioBtn.length; i++) {
    if (radioBtn[i].checked) {
      selectedValue = radioBtn[i].value;
    }
  }
  rating.classList.add("hidden");
  thankYou.classList.remove("hidden");
  selected.innerHTML = `You selected ${selectedValue} out of 5`;
};
