

function signup()
{
    
    var email=document.getElementById("email").value;
    var password=document.getElementById('password').value;
    var Confirmpass=document.getElementById("Confirmpass").value;
    
var a=[];
        if(password===Confirmpass)
        {
            localStorage.setItem('useremail',email);
            localStorage.setItem('userpass',Confirmpass);
            
        }
        // else if(password=''|| Confirmpass='')
        // {
            //     alert("fill the password");
            // }
            else{
                alert("wrong password");
            }
        
}
function confrim()
{

}