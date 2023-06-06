const inputSlider=document.querySelector("[data-lengthSlider]")
const copybtn=document.querySelector("[data-copy]")
const copyMsg= document.querySelector("[getdata-copyMsg]")

const lengthDisplay=document.querySelector("[data-lengthNumber]")
const passwordDisplay=document.querySelector("[data-passwordDisplay]");
const passwordStrengthIndicator=document.querySelector("[data-indicator]")
const checkuppercase=document.getElementById("uppercase")
const checklowercase=document.getElementById("lowercase")
const checknumbers=document.getElementById("numbers")
const checksymbols=document.getElementById("symbols")
const indicator=document.querySelector("[data-indicator]");


const generatePassword=document.querySelector(".generatebutton")

const allCheckBox=document.querySelectorAll("input[type=checkbox]");

const symbols = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';



let password=""
let passwordLength=10;
let checkCount=0;

handleSlider();


function handleSlider(){
    inputSlider.value=passwordLength
    lengthDisplay.innerText= String(passwordLength)

}

function setIndicator(color){
    passwordStrengthIndicator.style.backgroundColor=color
    // shadow
}

function getRndInteger(min,max){
    return Math.floor(Math.random()*(max-min))+min;

}
function generateRandomNumber(){
    return getRndInteger(0,9);
}

function generateLowerCase(){
    return String.fromCharCode (getRndInteger(97,123))
}
function generateUpperCase(){
    return String.fromCharCode (getRndInteger(65,91))
}

function generateSymbol(){
    
    let randnumber=getRndInteger(0,symbols.length)

    return symbols.charAt(randnumber);


}
function calcStength(){
    let hasUpper=false;
    let hasLower=false;
    let hasNum=false;
    let hassymb=false;

    if(checklowercase.checked) hasLower=true
    if(checkuppercase.checked) hasUpper=true
    if(checknumbers.checked) hasNum=true
    if(checksymbols.checked)hassymb=true


    if(hasUpper&&hasLower &&(hasNum||hassymb)&& passwordLength>=8){
        setIndicator("#0f0");

    }else if(
        (hasLower||hasUpper)&&(hasNum||hassymb)&&passwordLength<=6){
            setIndicator("#ff0")

        }else{
            setIndicator("#f00");

        }
    

}

async function copyContent(){
    try{
        await navigator.clipboard.writeText(passwordDisplay.value)
        copyMsg.innerText="copied";
    }

    catch(e){
        copyMsg.innerText="failed";
    }


    //  to make copy wala span visible
    copyMsg.classList.add("active");

    setTimeout(() => {
        copyMsg.classList.remove("active")
    }, 2000);
}



// for  shuffle password  we usinf menthod called 

// Fisher Yates Method:required array for execution


function shufflePassword(array){
    for(let i=array.length-1;i>0;i--)
    {
        let j=Math.floor(Math.random()*(i+1));

        const temp=array[i];
        array[i]=array[j];
        array[j]=temp;
    }

    let str="";

    array.forEach((el)=>(str+=el));
    return str;
}

// checked and unchecked box change count

function handleCheckBoxChange(){
    checkCount=0;
    allCheckBox.forEach((checkbox)=>{
        if(checkbox.checked){
            checkCount++;
        }

    })
    // special condition here we called handleSlider function beacause there is checnge in passwordLength

    if(passwordLength<checkCount){
        passwordLength=checkCount;
        handleSlider();
    }
}



// this function  and function above is used for solving one case when user checked all checkboxes and keep slider length less than checkbox clicked 
allCheckBox.forEach((checkbox)=>{
    checkbox.addEventListener('change',handleCheckBoxChange)
})

inputSlider.addEventListener('input',(e)=>{
    passwordLength=e.target.value;
    handleSlider();
})

copybtn.addEventListener('click',()=>{
    if(passwordDisplay.value)
    copyContent();

})

generatePassword.addEventListener('click',()=>{

    // when none of the checkbox are selected

    if(checkCount<=0)return;

    if(passwordLength<checkCount)
    {
        passwordLength=checkCount;
        handleSlider();
    }

    // lets start the journey to find new password
    console.log("journey started")

    // remove old password
    password="";

    // lets put the stuff mentioned by checkboxes

    // if(checkuppercase.checked){
    //     password+=generateUpperCase();
    // }
    // if(lowercaseCheck.checked){
    //     password+=generateLowerCase();
    // }
    // if(checknumbers.checked){
    //     password+=getRndInteger();
    // }

    // if(checksymbols.cheched){
    //     password+=generateSymbol();
    // }


    // suppose user has selected password length=10

    // above code will fulfil password length upto 4 but what about remaining 6 letter see below for new logic and forget above code 

   let funcArr=[];

   if(checkuppercase.checked){
    funcArr.push(generateUpperCase);
   }
   if(checklowercase.checked){
    funcArr.push(generateLowerCase);
   }
   if(checknumbers.checked){
    funcArr.push(getRndInteger);
   }
   if(checksymbols.checked){
    funcArr.push(generateSymbol);
   }

console.log("compulsory addition is happening")
//    compulsury addition
    for(let i=0;i<funcArr.length;i++)
    {
    //   console.log(typeof(funcArr[i]))
      password+=funcArr[i]();
    }


    // remaining addtion

    for(let i=0;i<passwordLength-funcArr.length;i++)
    {
        let randIndex=getRndInteger(0,funcArr.length)
        if(randIndex<=funcArr.length){
            console.log("sahi hai...")

        }
        else{
            console.log("galat hai code")
        }
        console.log("randIndex"+randIndex)

        password+=funcArr[randIndex]();


    }

    // shuffle the password

// convert password into array and call shufflePassword()
    password=shufflePassword(Array.from(password));

    // show in UI
    passwordDisplay.value=password

    calcStength();

});
