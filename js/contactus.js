import{getDatabase,ref,get,set,update,remove,child} from "https://www.gstatic.com/firebasejs/9.8.4/firebase-database.js";
        const db=getDatabase();
        var Name=document.getElementById("name");
        var email=document.getElementById("email");
        var message=document.getElementById("message");

        document.getElementById("form").addEventListener("submit",input);
        var n,e,m;
        function getData()
        {
            n=Name.value;
            e=email.value;
            m=message.value;
        }

        function input(event){
            event.preventDefault();
            getData();
            set(ref(db,"Message/"+e.substring(0,e.indexOf('@'))),{
                Name:n,
                Email:e,
                Message:m
            }).then(()=>{
                alert("Message Sent Successfully");
                this.reset();
            }).catch((error)=>alert("unsuccessful",error));
        }
