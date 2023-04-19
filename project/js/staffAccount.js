class Staff {
    constructor(loginUrl) {
      this.loginUrl = loginUrl;
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
                  document.getElementById("adminpagecontent").style.display ="block";
                  document.getElementById("corplogin").style.display ="none";
                  staffName.innerText = output.role;
                }
          } else {
              alert("Invalid Username or Password...Please try again");
          }
      };
      loginCorp.send(JSON.stringify(loginData));
      
    }

    fetchStaff() {
      const staffRequest = new XMLHttpRequest();
      staffRequest.open('GET', this.loginUrl, true);
      console.log(staffRequest);
      // Use an arrow function to preserve the 'this' context
      staffRequest.onload = () => {
          this.staffArray = JSON.parse(staffRequest.responseText);
          console.log("ok");
          console.log(this.staffArray);
          this.displayStaff();
      };
  
      staffRequest.send();
  }
  // This method displays the movies tiles that filters based on "Now Showing" or "Coming Soon"
  displayStaff() {
    const table = document.getElementById("getStaffAccount");
    let staffCount = 0;
    let message = "";
      
    table.innerHTML = "";
    const totalstaff = this.staffArray.length;
      
    for (let count = 0; count < totalstaff; count++) {
           
       //html codes go here omg how tf do i do that
        const username = this.staffArray[count].username;
        const role = this.staffArray[count].role;
        const status = this.staffArray[count].status;
        const cell ='<td style="width: 10%;"><img src="./../images/profile.png"></td><td><strong id="staff_id" style="display:none;">'+this.staffArray[count]._id+'</strong><a>'+username+'</a></td><td>'+role+'</td><td>'+status+'</td><td ><button item = '+count+' style="background-color:#333333a0;" onclick="staff.showStaffDetails(this)"><img src="./../images/edit.png" width="30px" height="30px"></td>'
        table.insertAdjacentHTML("beforeend", cell);
        staffCount++;
    }
  }

  showStaffDetails(element)
  {
    console.log(this.staffArray);
    var item = element.getAttribute("item");
    console.log(item);
    const currentIndex = item;
    
    document.getElementById("editStafftable").style.display ="block";
    document.getElementById("updateStaff_id").value = this.staffArray[item]._id;
    document.getElementById("editStaffName").value = this.staffArray[item].username;
    document.getElementById("editStaffRole").value = this.staffArray[item].role;
    document.getElementById("editStaffStatus").value = this.staffArray[item].status;
  }

  cancelStaffDetails(){
    document.getElementById("editStafftable").style.display ="none"; 
  }

  updateStaff(currentIndex) {
    console.log( document.getElementById("updateStaff_id").value);
    currentIndex = document.getElementById("updateStaff_id").value;
    console.log(currentIndex);
    const edit_staff_url = this.loginUrl + "/" + currentIndex;
    const response = confirm("Are you sure you want to edit your information?");
    
    const username = document.getElementById("editStaffName").value;
    const role = document.getElementById("editStaffRole").value;
    const status = document.getElementById("editStaffStatus").value;
    
    const editedStaff = {
        username: username,
        role: role,
        status: status
    };
    console.log(editedStaff);
    
    if (response == true) {
        const updateStaff = new XMLHttpRequest();
        updateStaff.open("PUT", edit_staff_url, true);
        updateStaff.setRequestHeader("Content-Type", "application/json");

        //Update the movie object in the movieArray
        this.staffArray[currentIndex].username = username;
        this.staffArray[currentIndex].role = role;
        this.staffArray[currentIndex].status = status;

        updateStaff.onload = function () {
            alert("Your staff account information has been edited.");
        };

        // Send the updated movie object as a JSON string
        updateStaff.send(JSON.stringify(this.staffArray[currentIndex]));
    }
    document.getElementById("editStafftable").style.display ="none";
    staff.displayStaff();
}

}
const staff = new Staff("/staff"); 