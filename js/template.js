document.getElementsByClassName("bar")[0].onclick=()=>{
    document.getElementById("nav").style.display="none";
    document.getElementById('side').style.display="block";
    document.getElementById('side').style.animation="side 1s linear";
}
document.getElementsByClassName("cross")[0].onclick=change;
document.getElementsByTagName("li")[0].onclick=change;
document.getElementsByTagName("li")[1].onclick=change;
document.getElementsByTagName("li")[2].onclick=change;
document.getElementsByTagName("li")[3].onclick=change;
document.getElementsByTagName("li")[4].onclick=change;


 function change(){
    document.getElementById('side').style.animation="side2 1s linear";
    setTimeout(()=>{document.getElementById('side').style.display="none";
    document.getElementById("nav").style.display="flex";},1000);
 }