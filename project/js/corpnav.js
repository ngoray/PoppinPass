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
    
    document.getElementById("corpusername").value = "";
    document.getElementById("corppw").value = "";

    console.log()
}

function corpCancel(){
    document.getElementById("corploggout1").style.display ="none";
    
}
