
function validate(){
const username=document.getElementById("username").value;
const password=document.getElementById("password").value;
if(username=="admin" && password =="user"){
    alert("login succesfully");
  
}
else{
    alert("login failed");
}
location.reload();

}
