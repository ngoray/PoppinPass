class Staff {
    constructor(loginUrl, getStaffUrl) {
      this.loginUrl = loginUrl;
      this.getStaffUrl = getStaffUrl;
      this.staffArray = [];
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

    getAllStaff1(){
      const getStaff = new XMLHttpRequest();
      getStaff.open('GET', this.getStaffUrl, true);

      // getAllStaff.setRequestHeader("Content-Type", "application/json");
      // getAllStaff.onload = function () {
      //   this.staffArray = JSON.parse(request.responseText);
      //   console.log("")
      //   this.displayStaff();
      //   console.log(this.staffArray);

      getStaff.onload = () => {
          this.staffArray = JSON.parse(getStaff.responseText);
          console.log("ok");
          console.log(this.staffArray);
          this.displayStaff();
        };
      }

      getAllStaff() {
        const request = new XMLHttpRequest();
        request.open("GET", this.getStaffUrl, true);
    
        // This function will be called when data returns from the web api
        request.onload = () => {
          console.log("WORK LA KNN")
          this.staffArray = JSON.parse(request.responseText);
    
          
          this.displayStaff();
        };
    
      }
    
    displayStaff(){
      const table = document.getElementById("getStaffAccount");
      table.innerHTML = "";
      const totalstaff = this.staffArray.length
      for (i = 0; i < totalstaff; i++){
        //html codes go here omg how tf do i do that
        const username = this.staffArray[i].username;
        const role = this.staffArray[i].role;
        const status = this.staffArray[i].status;
        const cell ='<tr><td style="width: 10%;"><img src="./../images/profile.png"></td><td>'+username+'</td><td>'+role+'</td><td>'+status+'</td><td ><img src="./../images/edit.png" width="30px" height="30px"></td></tr>'
        table.insertAdjacentHTML("beforeend", cell);
        
      }
    }
}
const staff = new Staff("/stafflogin", "/staff"); 