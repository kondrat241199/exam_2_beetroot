//=======================form displace=====================
$(".map").on("click", lowerForm);
$(".footer__content").on("click", returnFormPlace);

//==========================================================

//============================================================

function lowerForm(e) {
  if ((e.target = $(".map"))) {
    $(".footer__content").animate({ top: 0 }, "slow");
  }
}

//=============================================================

function returnFormPlace() {
  if ($(".footer__content").css("top") === -285) {
    return;
  } else $(".footer__content").animate({ top: -285 }, "slow");
}

//--------------form validation-----------------------------
//===========================================================
let inptEmail = $("#email");
let inptName = $("#name");
let btnFormSubmit = $("#submit_btn");

btnFormSubmit.on("click", validationForm);
btnFormSubmit.on("click", submitForm);

//============================================================
function validationForm(e) {
  e.preventDefault();
  if (inptName.val().length <= 2) {
    alert("Please, enter correct NAME");
  } else if (inptEmail.val().includes("@") == false) {
    alert("Please, enter correct EMAIL");
  } else alert("Thank you! We will contact you as soon as possible");
}
//--------------submit form------------------------------------
//==============================================================

//===============================================================
function submitForm(e) {
  e.preventDefault();

  localStorage.setItem("name", inptName.val());
  localStorage.setItem("email", inptEmail.val());
  inptEmail.val("");
  inptName.val("");
}
