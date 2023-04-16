class Customer {
    constructor(loginUrl, signupUrl) {
      this.loginUrl = loginUrl;
      this.signupUrl = signupUrl;
    }
  
    createUser() {
      const registerUser = new XMLHttpRequest();
      registerUser.open('POST', this.signupUrl, true);
  
      const username = document.getElementById("username").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
  
      const signupModal = document.getElementById("id02");
      const signinModal = document.getElementById("id01");
  
      const registerData = {
          "username": username,
          "email": email,
          "password": password
      }
  
      console.log(registerData)
  
      registerUser.setRequestHeader("Content-Type", "application/json");
      registerUser.onload = function () {
          const output = JSON.parse(registerUser.responseText);
          if (output.token) {
              sessionStorage.setItem("token", output.token);
              sessionStorage.setItem("username", output.username);
              alert("Register successfully this Page will now reload");
          } else {
              alert("Your Username or Email has been taken");
          }
      };
      registerUser.send(JSON.stringify(registerData));
    }


    loginUser() {
        const loginUser = new XMLHttpRequest();
      loginUser.open('POST', this.loginUrl, true);
  
      const username = document.getElementById("loginname").value;
      const password = document.getElementById("loginpw").value;
  
      const loginData = {
          "username": username,
          "password": password
      }
  
      console.log(loginData)
  
      loginUser.setRequestHeader("Content-Type", "application/json");
      loginUser.onload = function () {
          const output = JSON.parse(loginUser.responseText);
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
      loginUser.send(JSON.stringify(loginData));
      
    }
  }

  

  const customer = new Customer("/login", "/signup");