




function validate()
{
    var username=document.getElementById("user").value;
    var password=document.getElementById("pass").value;

    if(username.trim()==" ")
    {
        alert("invali");
        return false;
    }
    else
    {
        return true;

    }
}