var count = 0;
var ans = [];
function addquestion() {
    var sec = document.getElementById("questions");
    sec.innerHTML = `<h1 align="center">Quiz</h1>
    <p>Q.${count + 1} ${document.getElementById("question").value}</p>
    <div class="obox">
    <div><label>Ans. ${count + 1} <input type="radio" name="answer${count + 1}" value="1">
    <span>${document.getElementById("option1").value}</span>
    </div>
    <div><input type="radio" name="answer${count + 1}" value="2">
    <span>${document.getElementById("option2").value}</span>
    </div>
    <div><input type="radio" name="answer${count + 1}" value="3">
    <span>${document.getElementById("option3").value}</span></div>
    <div><input type="radio" name="answer${count + 1}" value="4">
    <span>${document.getElementById("option4").value}</span></div> 
    <input type="radio" name="answer${count + 1}" value="0" checked style="display:none"></div>`
    document.getElementById("question").value = null;
    document.getElementById("option1").value = null;
    document.getElementById("option2").value = null;
    document.getElementById("option3").value = null;
    document.getElementById("option4").value = null;
    ans[count++] = document.querySelector('input[name="answer"]:checked').value;

}
function done() {
    document.getElementById("create").style.display = "none";
    var b = document.getElementById("questions");
    var button = document.createElement("button");
    button.textContent = "submit";
    button.onclick = check;
    b.appendChild(button);
}
function check() {
    document.getElementById("questions").style.display = "none";
    var score = 0;
    for (let i = 0; i < count; i++) {
        let n = "answer" + (i + 1);
        let a = document.querySelector(`input[name=${n}]:checked`).value;
        if (a == ans[i]) score++;
    }
    var result = document.createElement("section");
    document.querySelector("body").appendChild(result);
    var p = document.createElement("h1");
    p.textContent = `Your score is ${score} out of ${count}`;
    result.appendChild(p);
}