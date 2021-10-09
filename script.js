


var m = 0;
function displayBar()
{
    if(window.innerWidth < 520)
    {
        console.log(m);
        if(document.getElementById("navbar-resp-id").className == "navbar-resp-resp")
        {
            document.getElementById("navbar-resp-id").className = "" + "navbar-resp";
            m++;
        }
        else
        {
            document.getElementById("navbar-resp-id").className = "navbar-resp" + "-resp";
            m++;
        }
    }
    else
    document.getElementById("navbar-resp-id").className = "" + "navbar-resp";

    
}
function calcWindowWidth()
{
    if (window.innerWidth >520)
    {
        document.getElementById("navbar-resp-id").className = "" + "navbar-resp";
    }   
}

function hideWindow()
{
    document.getElementById("navbar-resp-id").className = "" + "navbar-resp";
}