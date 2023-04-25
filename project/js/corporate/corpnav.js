function corpLoggout() {
    var a = document.getElementById("corploggout1");
    a.style.display="block";
}

function corpLoggedout() {
    document.getElementById("corploggout1").style.display ="none";
    document.getElementById("adminMenu").style.display ="none";
    document.getElementById("managerMenu").style.display ="none";
    document.getElementById("ownerMenu").style.display ="none";
    document.getElementById("corpPic").style.display ="none";
    document.getElementById("corploggout").style.display ="none";
    document.getElementById("adminpagecontent").style.display="none";
    document.getElementById("ownerpagecontent").style.display="none";
    document.getElementById("managercontent").style.display="none";

    document.getElementById("corplogin").style.display ="block";

    document.getElementById("corppw").value = "";
    document.getElementById("corpusername").value = "";
}

function corpCancel(){
    document.getElementById("corploggout1").style.display ="none";
    
}
