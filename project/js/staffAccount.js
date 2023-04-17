class Staff {
    constructor(loginUrl) {
      this.loginUrl = loginUrl;
    }


    loginCorp() {
        const loginCorp = new XMLHttpRequest();
      loginCorp.open('POST', this.loginUrl, true);
  
      const username = document.getElementById("corpusername").value;
      const password = document.getElementById("corppw").value;
  
      const loginData = {
          "username": username,
          "password": password
      }
  
      console.log(loginData)
  
      loginCorp.setRequestHeader("Content-Type", "application/json");
      loginCorp.onload = function () {
          const output = JSON.parse(loginCorp.responseText);
          if (output.token) {
              sessionStorage.setItem("token", output.token);
              sessionStorage.setItem("username", output.username);
              sessionStorage.setItem("status", output.status);
              sessionStorage.setItem("role", output.role);
              console.log(output.role);
              if (output.status == "suspended")
                {
                    alert("this account has been suspended")
                    document.getElementById("id01").style.display ="none";
                }
                else if (output.role =="owner")
                {
                  alert("welcome owner")
                  document.getElementById("corploggout").style.display ="block";
                  document.getElementById("corpPic").style.display ="block";
                  document.getElementById("ownerMenu").style.display ="block";
                  document.getElementById("corplogin").style.display ="none";
                  staffName.innerText = output.role;
                }
                else if (output.role =="manager")
                {
                  alert("welcome manager")
                  document.getElementById("corploggout").style.display ="block";
                  document.getElementById("corpPic").style.display ="block";
                  document.getElementById("managerMenu").style.display ="block";
                  document.getElementById("corplogin").style.display ="none";
                  staffName.innerText = output.role;
                }
                else if (output.role =="admin")
                {
                  alert("welcome admin")
                  document.getElementById("corploggout").style.display ="block";
                  document.getElementById("corpPic").style.display ="block";
                  document.getElementById("adminMenu").style.display ="block";
                  document.getElementById("corplogin").style.display ="none";
                  staffName.innerText = output.role;
                }
          } else {
              alert("Invalid Username or Password...Please try again");
          }
      };
      loginCorp.send(JSON.stringify(loginData));
      
    }
    
  }
  const staff = new Staff("/stafflogin"); 