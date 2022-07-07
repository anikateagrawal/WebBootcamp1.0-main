import{getDatabase,get,child,ref} from "https://www.gstatic.com/firebasejs/9.8.4/firebase-database.js";
const db=getDatabase();
function getusers()
{
    var users=[]
    get(ref(db,"data/")).then((snapshot)=>{snapshot.forEach(user => {
        users.push(user.val());
    });
    displayUsers(users);});
}
function displayUsers(users)
{
    let index=0;
    var b=document.getElementById("tbody");
    b.innerHTML="<tr><th>Index</th><th>Name</th><th>Roll No</th><th>Gender</th><th>Address</th></tr>";
    users.forEach(user=>{
        let tr=document.createElement("tr");
        let td=document.createElement("td");
        let td1=document.createElement("td");
        let td2=document.createElement("td");
        let td3=document.createElement("td");
        let td4=document.createElement("td");
        b.appendChild(tr);
        tr.appendChild(td);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        td.textContent=++index;
        td1.textContent=user.Name;
        td2.textContent=user.RollNo;
        td3.textContent=user.Gender;
        td4.textContent=user.Address;
    });
}
window.onload=getusers;