import{getDatabase,ref,get,set,update,remove,child} from "https://www.gstatic.com/firebasejs/9.8.4/firebase-database.js";
        const db=getDatabase();
        var Name=document.getElementById("name");
        var roll=document.getElementById("roll");
        var gen=document.getElementById("gen");
        var add=document.getElementById("add");

        document.getElementsByClassName("btn")[0].onclick=input;
        document.getElementsByClassName("btn")[1].onclick=read;
        document.getElementsByClassName("btn")[2].onclick=updateData;
        document.getElementsByClassName("btn")[3].onclick=del;

        var n,r,g,a;
        function getData()
        {
            n=Name.value;
            r=roll.value;
            a=add.value;
            g=gen.value;
        }
        function clear()
        {
            roll.value="";
            Name.value="";
            gen.value="";
            add.value="";
        }
        function input(){
            getData();
            if(!r==""){
            set(ref(db,"data/"+r),{
                RollNo:r,
                Name:n,
                Gender:g,
                Address:a
            }).then(()=>{
                alert("Data stored Successfully")
            }).catch((error)=>alert("unsuccessful",error));}
            else alert("Roll no cannot be empty");
            clear();
        }
        function read(){
            getData();
            get(ref(db,"data/"+r)).then((snapshot)=>{
                if(snapshot.exists()){
                roll.value=snapshot.val().RollNo;
                Name.value=snapshot.val().Name;
                gen.value=snapshot.val().Gender;
                add.value=snapshot.val().Address;}
                else{alert("no data found")}
            }).catch((error)=>{alert("unsuccessful",error)});
        }
        function updateData(){
            getData();
            update(ref(db,"data/"+r),{
                Name:n,
                Gender:g,
                Address:a
            }).then(()=>{
                alert("Data updated Successfully")
            }).catch((error)=>{alert("unsuccessful",error)});
            clear();
        }
        function del(){
            getData();
            if(!r=="")
            remove(ref(db,"data/"+r)).then(alert("data deleted")).catch((error)=>{alert("unsuccessful",error)});
            else alert("roll no cannot be empty");
            clear();
        }