let input = document.querySelectorAll("input")


for(let i=0 ; i<input.length ; i++){
    input[i].addEventListener("input", function(){ 
        let red = document.getElementById("red").value,
            green=  document.getElementById("green").value,
            blue = document.getElementById("blue").value;

        let display= document.getElementById("display");
        display.style.background = "rgb( " + red + ", " + green + " , " + blue + " )";
        let values= document.getElementById("values");  
        values.innerHTML=`<p>rgb(${red+', '+green+', '+blue})</p>` 
        document.body.style.background = "rgb( " + red + ", " + green + " , " + blue + " )";
     });
}
document.getElementById("myBtn").addEventListener("click", function() {
    alert("Thanks For Choosing Us !");
  }); 
// input.addEventListener(change,colorchange );
// function colorchange (){
//     let x= input.value;
//     document.body.style.backgroundcolor=x;
// }