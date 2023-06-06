
console.log("hii")
const countvalue=document.getElementById("displaybtn")

function increment (){
    // alert("hii")

    // console.log("hii")
    

    // get the value from UI
    let value=parseInt(countvalue.innerText);

    // update the UI
    value=value+1

    // set the value on UI

    countvalue.innerText=value

}
 const decrement = ()=>{
    // alert("hi")

    // get the value from UI
    let value=parseInt(countvalue.innerText);

    // update the UI
    value=value-1

    // set the value on UI

    countvalue.innerText=value

}
