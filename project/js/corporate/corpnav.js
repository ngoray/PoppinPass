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
    document.getElementById("corplogin").style.display ="block";
    document.getElementById("adminpagecontent").style.display="none";

    
    document.getElementById("corpusername").value = "";
    document.getElementById("corppw").value = "";

    var a = document.getElementById("createCust");
    var b = document.getElementById("createAdm");
    var c = document.getElementById("viewCust");
    var d = document.getElementById("viewAdm");

    a.classList.remove("active");
    b.classList.remove("active");
    c.classList.remove("active");
    d.classList.remove("active");
}

function corpCancel(){
    document.getElementById("corploggout1").style.display ="none";
    
}