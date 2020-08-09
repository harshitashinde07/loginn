function validate()
{
    var number=document.getElementById("phn").value;
    var regx=/^[7-9]\d{9}$/;
    if(regx.test(number))
    {
        document.getElementById("lbb").innerHTML="Valid";
        document.getElementById("lbb").style.color="green";
        document.getElementById("lbb").style.visibility="visible";
        document.getElementById("lbb").style.borderColor="green";
        
    }
    else
    {
        document.getElementById("lbb").innerHTML="Invalid";
        document.getElementById("lbb").style.color="red";
        document.getElementById("lbb").style.visibility="visible";
        document.getElementById("lbb").style.borderColor="red";

    }
}