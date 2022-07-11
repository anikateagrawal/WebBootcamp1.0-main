import{getDatabase,ref,get,set,update,remove,child} from "https://www.gstatic.com/firebasejs/9.8.4/firebase-database.js";
        const db=getDatabase();
        var Name=document.getElementById("name");
        var email=document.getElementById("email");
        var message=document.getElementById("message");

        document.getElementsByClassName("butn")[0].onclick=input;

        var n,e,m;
        function getData()
        {
            n=Name.value;
            e=email.value;
            m=message.value;
        }
        function clear()
        {
            Name.value="";
            email.value="";
            message.value="";
        }

        function input(){
            getData();
            if(!(e==""||n==""||m=="")){
            set(ref(db,"Message/"+e.substring(0,e.indexOf('@'))),{
                Name:n,
                Email:e,
                Message:m
            }).then(()=>{
                alert("Message Sent Successfully")
            }).catch((error)=>alert("unsuccessful",error));}
            else alert("Fields cannot be empty");
            clear();
        }