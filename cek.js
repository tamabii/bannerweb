var alldetails= {
    username: "knawmen",
    password: "123pass"
}
function changelogin(){
    var user = document.getElementById("txtname").value;
    var pass = document.getElementById("txtpassword").value;
    var result = document.getElementById("result").value;
    if(user===""){
        document.getElementById("result").innerHTML = "please inter user name";
    }
    
    else {
        if(alldetails.username===user){
            if(alldetails.password===pass){
                document.write("login success");
            }
            else{
                document.getElementById("result").innerHTML = "invalid password";
            }

        }
        else{
            document.getElementById("result").innerHTML = "invalid user name"
        }
    }
}