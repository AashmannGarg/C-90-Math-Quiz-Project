function back(){
window.location="activity_1.html";
}

function getScore(){
    score=localStorage.getItem("score");
    document.getElementById("Update").innerHTML="<h1> score"+score+"</h1>";
} 