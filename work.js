function button_click(val){
    document.getElementById("screen").value+=val;
}
function clear_button(){
    document.getElementById("screen").value="";
}
function equal_click(){
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById('screen').value=result
}