var count=0;
var ans=[];
function addquestion()
{
    var a=document.getElementById("questions");
    var q=document.createElement("p");
    q.textContent="Q."+(count+1)+" "+ document.getElementById("question").value;
    document.getElementById("question").value=null;
    a.appendChild(q);
    var l=document.createElement("label");
    l.textContent="Ans."+(count+1)+" ";
    var option1=document.createElement("input");
    option1.value="1";
    option1.type="radio";
    option1.name="answer"+(count+1);
    a.appendChild(option1);
    option1=document.createElement("span");
    option1.textContent=document.getElementById("option1").value;
    document.getElementById("option1").value=null;
    a.appendChild(option1);
    var option2=document.createElement("input");
    option2.value="2";
    option2.type="radio";
    option2.name="answer"+(count+1);
    a.appendChild(option2);
    option2=document.createElement("span");
    option2.textContent=document.getElementById("option2").value;
    document.getElementById("option2").value=null;
    a.appendChild(option2);
    var option3=document.createElement("input");
    option3.value="3";
    option3.type="radio";
    option3.name="answer"+(count+1);
    a.appendChild(option3);
    option3=document.createElement("span");
    option3.textContent=document.getElementById("option3").value;
    document.getElementById("option3").value=null;
    a.appendChild(option3);
    var option4=document.createElement("input");
    option4.value="4";
    option4.type="radio";
    option4.name="answer"+(count+1);
    a.appendChild(option4);
    option4=document.createElement("span");
    option4.textContent=document.getElementById("option4").value;
    document.getElementById("option4").value=null;
    a.appendChild(option4);
    var option0=document.createElement("input");
    option0.value="0";
    option0.type="radio";
    option0.name="answer"+(count+1);
    option0.checked=true;
    option0.style.display="none";
    a.appendChild(option0);
    ans[count++]=document.querySelector('input[name="answer"]:checked').value;
    
}
function done()
{
    document.getElementById("create").style.display="none";
    var b=document.getElementById("questions");
    var button=document.createElement("button");
    button.textContent="submit";
    button.onclick=check;
    //button.addEventListener("click",check);
    b.appendChild(button);
}
function check()
{
    document.getElementById("questions").style.display="none";
    var score=0;
    for(let i =0;i<count;i++){
        let n="answer"+(i+1);
        let a=document.querySelector(`input[name=${n}]:checked`).value;
        if(a==ans[i])score++;
    }
    var result=document.createElement("section");
    document.querySelector("body").appendChild(result);
    var p=document.createElement("h1");
    p.textContent=`Your score is ${score} out of ${count}`;
    result.appendChild(p);
}