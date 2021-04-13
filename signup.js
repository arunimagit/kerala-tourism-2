function validation(){
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var number=document.getElementById("number").value;
    var cpassword=document.getElementById("cpassword").value;
    var status=document.getElementById("length");
     var namecheck=/^[A-Za-z.]{3,20}$/;
    var passwordcheck=/^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    var emailcheck=/^[A-Za-z0-9]{3,}@[A-Za-z]{3,}[.]{1}[a-z]{2,3}$/;
    var mobilecheck=/^\(?([0-9]{3})\)?[-.]?([0-9]{3})[-.]?([0-9]{4})$/;
    var passwordcheckk=/^(?=.*[A-Z])(?=.*[a-z])[a-zA-Z!@#$%^&*]{8,16}$/;
    var passwordcheckkk=/^(?=.*[a-z])[a-z]{1,6}$/;
      if(email==""){
        alert("Email cannot be empty");
        return false;
        }
        if(emailcheck.test(email)){
            document.getElementById("emailerror").innerHTML="";
            }
            else{
                document.getElementById("emailerror").innerHTML="**email is invalid";
                return false;
                }
                if(password==""){
                   alert("password cannot be empty");
                   return false;
                
                }
                else{
                    document.getElementById("passworderror").innerHTML="incorrect password";
                }
               if (password.match(passwordcheck)){
                   document.getElementById("passworderror").innerHTML="";
                   status.innerHTML="password is strong";
                   status.style.background="green";
                   status.style.color="#ffffff";
               }
                else if(password.match(passwordcheckk)){
                    document.getElementById("passworderror").innerHTML="";
                   status.innerHTML="password is medium";
                   status.style.background="orange";
                   status.style.color="#ffffff";
                }
                else{document.getElementById("passworderror").innerHTML="";
                   status.innerHTML="password is poor";
                   status.style.background="red";
                   status.style.color="#ffffff";


                }
                if(name==""){
                    alert("name cannot be empty");
                
                 return false;
                 }
               if(namecheck.test(name)){
               document.getElementById("nameerror").innerHTML="";
                 }
            else{
                document.getElementById("nameerror").innerHTML="**name is invalid";
                return false;
                }
               if(number==""){
                   alert("mobilenumber cannot be empty");
                   return false;
               }
               if(mobilecheck.test(number)){
                   document.getElementById("mobileerror").innerHTML="";
               }
               else{
                   document.getElementById("mobileerror").innerHTML="**mobile number is invalid";
                   return false;
               }
              if(cpassword==""){
              alert("confirm your password");
              return false;
              }
              if(cpassword.match(password)){
                  document.getElementById("cpassworderror").innerHTML="";
              }
              else{
                  document.getElementById("cpassworderror").innerHTML="**password is not matcing";
                  return false;
              }
}