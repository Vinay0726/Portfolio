const scriptURL =
  "https://script.google.com/macros/s/AKfycby-KQ5c-h_Svwlint0sYyTxYmkLgw57IVVeVBL4_xTxc-PL_RTm3Jlbi45rZz0XgrWBQw/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById(`msg`);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = `Massage Send SuccessFully...`;
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
