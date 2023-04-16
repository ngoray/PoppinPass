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
              if (output.status == "suspended")
                {
                    alert("this account has been suspended")
                    document.getElementById("id01").style.display ="none";
                }
                else{
                  window.location.href = "./../html/test.html";
                }
          } else {
              alert("Invalid Username or Password...Please try again");
          }
      };
      loginCorp.send(JSON.stringify(loginData));
      
    }
  }
  const staff = new Staff("/stafflogin"); 