console.log("the message is here!");

let theBody, theTxt;

theBody = document.querySelector("body");

let theButton = document.getElementById("myButton");
theTxt = document.querySelector('h2')

theButton.addEventListener('click', myGreatFunction);

function myGreatFunction(){
    console.log("clicked!");
    theBody.style.backgroundImage = "url('stimpy.gif')";
    theTxt.textContent = "You couldn't possibly resist the urge! (press any key)"
    document.getElementById("demo").style.fontSize = "30px"; 
    document.getElementById("demo").style.color = "red";
    document.getElementById("demo").style.backgroundColor = "yellow";   
    theButton.remove(); 





}




var id = null;
document.addEventListener('keydown', myMove);

function myMove(){
    console.log("key pressed");
    var elem = document.getElementById("myAnimation");   
    var pos = 0;
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + 'px'; 
      elem.style.left = pos + 'px'; 
    }
  }
}


