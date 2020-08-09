




function validate()
{
    var username=document.getElementById("user").value;
    var password=document.getElementById("pass").value;

    if(username.trim(" ") || password.trim(" ") )
    {
        document.getElementById("lbb").style.visibility="visible";
    }

   
    else
    {

        document.getElementById("lbb").style.visibility="visible";
        document.getElementById("lbb").innerHTML="valid";
      
      
    
    }
    
}