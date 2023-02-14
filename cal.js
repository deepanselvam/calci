


let output_screen= document.getElementById("output");
function display(num){
    output_screen.value +=num

}
function equal(){
      try{
        output_screen.value= eval(output_screen.value);
      }
      catch{
        alert("solamudiyathu")
      }
}
function delet(){
  output_screen.value = output_screen.value.slice(0,-1)
}
function cleare(){
    output_screen.value="";
}