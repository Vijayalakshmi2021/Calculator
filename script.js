

document.addEventListener('DOMContentLoaded', ()=> {
  const containerF = document.createElement('div');
  containerF.classList.add('container-fluid');

  const introDiv = document.createElement('div');
  introDiv.setAttribute('class', 'w-100 h-auto my-2 intro-div');

  const titleH1 = document.createElement('h1');
  titleH1.setAttribute('id', 'title');
  titleH1.setAttribute('class', 'h1 text-center my-2');
  titleH1.innerHTML = `<span class="px-3 py-2 text-uppercase text-dark title-span">Basic Calculator</span>`;

  const titleP = document.createElement('p');
  titleP.setAttribute('id', 'description');
  titleP.setAttribute('class', 'mx-auto text-center text-white w-75 py-2 px-3');
  titleP.innerText = `This is a Basic Calculator. In this Calculator, you can do addition, subtraction, multiplication, division and modulus operations. Please don't use any other keys rather than numbers and given expressions to avoid error. Thank you for using my Calculator!`;

  const rowDiv = document.createElement('div');
  rowDiv.classList.add('row');

  const col = document.createElement('div');
  col.setAttribute('class', 'col-11 col-md-10 col-lg-4 m-auto mb-5 cal-div');

  const calculatorDiv = document.createElement('div');
  calculatorDiv.setAttribute('class', 'calculator mx-3 mt-4');

  const display = document.createElement('input');
  display.setAttribute('type', 'text');
  display.setAttribute('id', 'result');
  display.setAttribute('placeholder', '0');
  display.setAttribute('readonly', 'readonly');
  display.setAttribute('class', 'w-100 text-end h-auto form-control fw-bold');

  const buttonsLayout = document.createElement('div');
  buttonsLayout.classList.add('row');

  const buttonColumns = [];
  var backClr = `<i class="fa-solid fa-delete-left"></i>`;
  const buttonTexts = ['AC', backClr, '%', '*',  7, 8, 9, '/', 4, 5, 6, '-', 1, 2, 3, '+', 0, '00', '.', '='];

  for (let i = 0; i < 20; i++) {
    const buttonColumn = document.createElement('div');
    buttonColumn.setAttribute('class', 'col-3 my-3 d-flex justify-content-center align-items-center');

    buttonColumns.push(buttonColumn);
    buttonsLayout.appendChild(buttonColumn);
  }

  // console.log(buttonColumns);
  for (let i = 0; i < 20; i++) {
      const button = document.createElement('button');
      button.setAttribute('class', 'w-100 btn');
      button.innerHTML =buttonTexts[i] ;
      if (button.innerHTML == 'AC') {
          button.setAttribute('id', 'clear');
          button.setAttribute('onclick', 'clearDisplay()');
        } else if (button.innerHTML == backClr) {
          button.setAttribute('onclick', 'BackSlashClear()');
        } else if (button.innerHTML == '=') {
          button.setAttribute('id', 'equal');
          button.setAttribute('onclick', 'calculateResult()');
        } else if (button.innerHTML == '+') {
          button.setAttribute('id', 'add');
          button.setAttribute('onclick', `appendToDisplay('${button.innerHTML}')`);
        } else if (button.innerHTML == '-') {
          button.setAttribute('id', 'subtract');
          button.setAttribute('onclick', `appendToDisplay('${button.innerHTML}')`);
        } else {
          button.setAttribute('id', `${button.innerHTML}`);
          button.setAttribute('onclick', `appendToDisplay('${button.innerHTML}')`); 
        }

      buttonColumns[i].appendChild(button);
  }
  
  calculatorDiv.append(display, buttonsLayout);
  col.appendChild(calculatorDiv);
  rowDiv.appendChild(col);
  introDiv.append(titleH1, titleP);
  containerF.append(introDiv, rowDiv);
  document.body.appendChild(containerF);
 
});

function appendToDisplay(value) {
  document.getElementById("result").value += value;
}

function clearDisplay() {
  document.getElementById("result").value = "";
}
function BackSlashClear(){
  let val = document.getElementById("result").value;
  let ar = val.split("");
  // console.log(ar);
  ar.pop();
  document.getElementById("result").value = ar.join("");
}
function calculateResult() {
  try {
    const result = eval(document.getElementById("result").value);
    document.getElementById("result").value = result;
  } catch (error) {
  //   document.getElementById("result").value = "Error";
    alert(`Invalid Inputs`);
    clearDisplay();
  }
}
