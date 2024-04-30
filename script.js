const upperCaseBtn = document.querySelector(".uppercase");
const capitalizeBtn = document.querySelector(".capitalize");
const lowerCaseBtn = document.querySelector(".lowercase");
const boldBtn = document.querySelector(".bold");
const italicBtn = document.querySelector(".italic");
const underlineBtn = document.querySelector(".underline");
const output = document.querySelector(".outputField");
const input = document.querySelector("#inputField");

// function to get input value

function getInputValue(){
  return input.value;
}
input.addEventListener('change',getInputValue);

// Update output with uppercase text
function uppercase(){
  let inputVal = getInputValue();
  const upperCasedVal = inputVal.toUpperCase();
  output.innerHTML = upperCasedVal;
  input.value = upperCasedVal;
  return upperCasedVal;
}

// Update output with lowercase text
function lowercase(){
  const inputVal = getInputValue();
  const lowerCasedVal = inputVal.toLowerCase();
  output.innerHTML = lowerCasedVal;
  input.value = lowerCasedVal;
  return lowerCasedVal;
}

// Capitalize the first letter of each word 
function capitalize(){
  const inputVal = getInputValue();
  const capitalizedVal = inputVal[0].toUpperCase()+inputVal.slice(1);
  output.innerHTML = capitalizedVal;
  input.value = capitalizedVal;
  return capitalizedVal;
}

function bold(){
  let inputVal = getInputValue();
  const boldVal = inputVal.bold();
  output.innerHTML = boldVal;
  inputVal = input.classList.toggle("boldClass");
  return boldVal;
}
function italic(){
  let inputVal = getInputValue();
  const italicVal = inputVal.italics();
  output.innerHTML = italicVal;
  inputVal = input.classList.toggle("italicClass");
  return italicVal;
}

//copy output function 

function copyFun(){
  const outputVal = output.textContent;
  console.log(outputVal);
  navigator.clipboard.writeText(outputVal);
  alert("Text copied successfully!")
  return outputVal;
}


upperCaseBtn.addEventListener('click',uppercase);
lowerCaseBtn.addEventListener('click',lowercase);
capitalizeBtn.addEventListener('click',capitalize);
boldBtn.addEventListener('click',bold);
italicBtn.addEventListener('click',italic);
underlineBtn.addEventListener('click',()=>{
  let inputVal = getInputValue();
  input.innerHTML=`<u>${inputVal}</u>`;
  output.innerHTML=`<u>${inputVal}</u>`;
  inputVal = input.classList.toggle("underlineClass");
});
output.addEventListener('click',copyFun);
