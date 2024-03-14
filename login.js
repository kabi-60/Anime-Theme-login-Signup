function login()
{
    var Email=document.getElementById('email').value;
    var Pass=document.getElementById('password').value;

    var getemail=localStorage.getItem('useremail');
    var getpass=localStorage.getItem('userpass')
    if(Email===getemail && Pass===getpass)
    {
        alert("Login succesfull");

    }
    else{
        alert("Password incorrect");
    }
}