// const num1=document.getElementById("btn1")
// const num2=document.getElementById("btn2")
// const num3=document.getElementById("btn3")
// const num4=document.getElementById("btn4")
// const num5=document.getElementById("btn5")
// const num6=document.getElementById("btn6")
// const num7=document.getElementById("btn7")
// const num8=document.getElementById("btn8")
// const num9=document.getElementById("btn9")
// const num10=document.getElementById("btn10")

// // event delegation

// var calculator=document.getElementById("parent");

// calculator.addEventListener("click",buttonClick);

// function buttonClick(event){
//     if(event.target.matches("button")){

//     }
// }

// num1.addEventListener("click",fun1);

// function fun1(event){

//     var input=event.target.innerText;
//     console.log('the number click'+input);

// }

let string = "";

let buttons = document.querySelectorAll(".box");

Array.from(buttons).forEach(function (button) {
  button.addEventListener("click", printtarget);
});

function printtarget(event) {
  try {
    if (event.target.innerHTML == "=") {
      string = eval(string);
      document.querySelector("input").value = string;
      string = "";
    } else if (event.target.innerHTML == "C") {
      string = "";
      document.querySelector("input").value = string;
    } else {
      // console.log(event.target);
      string = string + event.target.innerHTML;
      document.querySelector("input").value = string;
    }
  } catch (err) {

    if(err){

      document.querySelector("input").value = "please give valid inputs";
    }
  }
}
