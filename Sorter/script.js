"use strict";

const formInputEl = document.querySelector(".sorting-form__input");
const btnSort = document.querySelector(".sorting-form__btn-sort");
const formOutputEl = document.querySelector(".sorting-form__output");
const btnReset = document.querySelector(".sorting-form__btn-reset");
const btnCopy = document.querySelector(".sorting-form__btn-copy");

const sortDzialki = function (dzialki) {
  const dzialkiAll = dzialki
    .split(",")
 
  const dzialkiFormated =  dzialkiAll.map(dzialka=> {
        const odnosnik = dzialka.slice(dzialka.indexOf("/")+1)
      if(odnosnik.length === 1) {
      const odnosnikFormated = odnosnik.padStart(2,"0")
        const dzialkaFormated = dzialka.slice(0,dzialka.indexOf("/")+1) + odnosnikFormated
        console.log(dzialkaFormated)
        return dzialkaFormated
      }
      return dzialka
    })

     const dzialkiSorted = dzialkiFormated.map((dzialka) => Number(dzialka.replace("/", ".")))
    .sort((curr, next) => curr - next).map((dzialka) => String(dzialka).replace(".", "/")).map((dzialka)=> {
       const odnosnik = dzialka.slice(dzialka.indexOf("/")+1)
      if(odnosnik[0] === '0') {
       const odnosnikFormated = odnosnik.replace(odnosnik[0],"")
        return dzialka.slice(0,dzialka.indexOf("/")+1) + odnosnikFormated
      }
      return dzialka
     });
 
  formOutputEl.value = dzialkiSorted.join(", ");
};


const copingToClipboard = function () {
  // Get the text field
  const copyText = document.getElementById("myInput");

  // Select the text field
  copyText.select();

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  alert("Skopiowano numery działek do schowka");
};

btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  sortDzialki(formInputEl.value);
});

btnReset.addEventListener("click", function (e) {
  e.preventDefault();
  formInputEl.value = "";
  formOutputEl.value = "";
});

btnCopy.addEventListener("click", function (e) {
  e.preventDefault();
  copingToClipboard();
});
