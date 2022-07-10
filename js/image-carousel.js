var btn1=document.getElementById("btn1");
        var btn2=document.getElementById("btn2");
        btn1.onclick=prev;
        btn2.onclick=next;
        var i=0;
        function next(){
            document.getElementById("i"+i).className="image ";
            i=(i+1)%4;
            document.getElementById("i"+i).className="image main";
        }
        function prev(){
            document.getElementById("i"+i).className="image ";
            i=i-1;
            if(i==-1)i=3;
            document.getElementById("i"+i).className="image main";
        }
        window.onload=change;
        function change()
        {   
            setInterval(next,3000);
        }