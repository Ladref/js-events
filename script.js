console.log("Question1");

var footer = document.getElementsByTagName('footer')[0];
var footerClick = function() {
  console.log("click");
};
footer.addEventListener("click", footerClick);

console.log("Question1-bis");
var footer2 = document.getElementsByTagName('footer')[0];
var i = 1
var footerClick2 = function() {
  console.log("click number " + i);
  i += 1;
};
footer.addEventListener("click", footerClick2);


console.log("Question 2");
var clickerMenu = document.getElementsByClassName('navbar-toggler')[0];
var onMenuClick = function() {
  navbarHeader.classList.toggle("collapse");
};
clickerMenu.addEventListener("click", onMenuClick);

console.log("Question 3");
var clickerEdit = document.getElementsByTagName('div')[15].childNodes[3];
var card = document.getElementsByTagName('div')[11];
var cardText = card.childNodes[1].childNodes[3].childNodes[1];
var onEditClick = function() {
  cardText.style.color = 'red';
};
clickerEdit.addEventListener("click", onEditClick);


console.log("Question 4");
var card2 = document.getElementsByTagName('div')[16];
var clicker2Edit = card2.childNodes[1].childNodes[3].childNodes[3].childNodes[1].childNodes[3];
var card2Text = card2.childNodes[1].childNodes[3].childNodes[1];
var onEdit2Click = function() {
  if (card2Text.style.color === 'green') {
    card2Text.style.color = '';
  } else if (card2Text.style.color === '') {
    card2Text.style.color = 'green';
  };
};
clicker2Edit.addEventListener("click", onEdit2Click);


console.log("Question 5");
var clickerNavbar = document.getElementsByTagName('header')[0];
var onNavbarClick = function () {
  if (document.styleSheets[0].disabled === true) {
    document.styleSheets[0].disabled = false;
  } else if (document.styleSheets[0].disabled === false) {
    document.styleSheets[0].disabled = true;
  };
};
clickerNavbar.addEventListener("dblclick", onNavbarClick);


console.log("Question 6");
for (let i = 12; i <= 37; i = i + 5) {
  var viewButton = document.getElementsByTagName('div')[i+3].childNodes[1];
  var onOver = function () {
  let status = document.getElementsByTagName('div')[i+1].childNodes[1].classList.toggle("collapse");
  document.getElementsByTagName('div')[i].childNodes[1].style.width = "20%"
  if (status === false) {
    document.getElementsByTagName('div')[i].childNodes[1].style.width = "100%";
   };
  };
  viewButton.addEventListener('mouseover', onOver);
};
