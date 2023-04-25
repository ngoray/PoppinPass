class Customer {
    constructor(loginUrl, signupUrl, getUserUrl, createUrl) {
      this.loginUrl = loginUrl;
      this.signupUrl = signupUrl;
      this.getUserUrl = getUserUrl;
      this.createUrl = createUrl;
      this.customerArray = [];
    }
  
    createUser() {
      const registerUser = new XMLHttpRequest();
      registerUser.open('POST', this.signupUrl, true);
  
      const username = document.getElementById("username").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
  
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
              // sessionStorage.setItem("token", output.token);
              // sessionStorage.setItem("username", output.username);
              document.getElementById("username").value ="";
              document.getElementById("email").value ="";
              document.getElementById("password").value ="";
              alert("Register successfully this Page will now reload");
              window.location.href = "./../html/test.html";
          } else {
              alert("Your Username or Email has been taken");
          }
      };
      registerUser.send(JSON.stringify(registerData));
    }

    createUser4admin() {
      const registerUser = new XMLHttpRequest();
      registerUser.open('POST', this.createUrl, true);
  
      const username = document.getElementById("createCustName").value;
      const email = document.getElementById("createCustEmail").value;
      const password = document.getElementById("createCustPassword").value;
      const status = document.getElementById("createCustStatus").value;
  
      const registerData = {
          "username": username,
          "email": email,
          "password": password,
          "status": status
      }
  
      console.log(registerData)
  
      registerUser.setRequestHeader("Content-Type", "application/json");
      registerUser.onload = function () {
          const output = JSON.parse(registerUser.responseText);
          if (output.token) {
            alert("Customer account added successfully!");
            document.getElementById("createCustName").value = "";
            document.getElementById("createCustEmail").value = "";
            document.getElementById("createCustPassword").value = "";
            document.getElementById("createCustStatus").value = "";
            document.getElementById("createCusttable").style.display ="none";
          } else {
              alert("The Username or Email already exists");
          }
      };
      registerUser.send(JSON.stringify(registerData));
    }

    showCustProfile(element)
    {    
      document.getElementById("userProfileName").value = this.customerArray[item].username;
      document.getElementById("userProfileEmail").value = this.customerArray[item].email;
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
              sessionStorage.setItem("email", output.email);
              console.log(username);
              document.getElementById("userProfileNameHeader").innerHTML = username;
              document.getElementById("userProfileName").innerHTML = username;
              document.getElementById("userProfileEmail").innerHTML = output.email;
              if (output.status == "suspended")
                {
                    alert("this account has been suspended")
                    document.getElementById("id01").style.display ="none";
                }
                else{
                alert("Welcome "+ username);
                  document.getElementById("loginname").value ="";
                  document.getElementById("loginpw").value ="";
                  
                  document.getElementById("id01").style.display ="none";
                  document.getElementById("moviepage").style.display="none";
                  document.getElementById("menupage").style.display="none";
                  document.getElementById("feedbackpage").style.display="none";
                  document.getElementById("slideshow").style.display="none";
                  document.getElementById("loginbtn").style.display ="none";

                  document.getElementById("feedback").classList.remove("active");
                  document.getElementById("movie").classList.remove("active");
                  document.getElementById("menu").classList.remove("active");
                  
                  // customer.showCustProfile(this);
                  $("#customercontent").fadeIn()
                  document.getElementById("customercontent").style.display ="block";
                  document.getElementById("userCart").style.display ="block";
                  document.getElementById("uProfile").style.display ="block";
                }
          } else {
              alert("Invalid Username or Password...Please try again");
          }
      };
      loginUser.send(JSON.stringify(loginData));
      
    }
  
    fetchCust() {
      const custRequest = new XMLHttpRequest();
      custRequest.open('GET', this.getUserUrl, true);
      console.log(custRequest);
      // Use an arrow function to preserve the 'this' context
      custRequest.onload = () => {
          this.customerArray = JSON.parse(custRequest.responseText);
          console.log("ok");
          console.log(this.customerArray);
          this.displayCust();
      };
  
      custRequest.send();
  }
  // This method displays the movies tiles that filters based on "Now Showing" or "Coming Soon"
  displayCust() {
    const table = document.getElementById("getCustomerAccount");
    let custCount = 0;
    let message = "";
      
    table.innerHTML = "";
    const totalcust = this.customerArray.length;
      
    for (let count = 0; count < totalcust; count++) {
           
       //html codes go here omg how tf do i do that
        const username = this.customerArray[count].username;
        const email = this.customerArray[count].email;
        const status = this.customerArray[count].status;
        //LINE BELOW NEED TO EDIT 
        const cell ='<td style="width: 10%;"><img src="./../images/profile.png"></td><td><strong id="staff_id" style="display:none;">'+this.customerArray[count]._id+'</strong><a>'+username+'</a></td><td>'+email+'</td><td>'+status+'</td><td ><button item = '+count+' onclick="customer.showCustDetails(this)" style="background-color:#333333a0;"><img src="./../images/edit.png" width="30px" height="30px"></td>'
        table.insertAdjacentHTML("beforeend", cell);
        custCount++;
    }
  }

  showCustDetails(element)
  {
    console.log(this.customerArray);
    var item = element.getAttribute("item");
    console.log(item);
    const currentIndex = item;
    $("#editCusttable").fadeIn()
    document.getElementById("editCusttable").style.display ="block";
    document.getElementById("editCust_id").value = this.customerArray[item]._id;
    document.getElementById("editCustName").value = this.customerArray[item].username;
    document.getElementById("editCustEmail").value = this.customerArray[item].email;
    document.getElementById("editCustStatus").value = this.customerArray[item].status;

        
  }

  updateCust(currentIndex)
  {
    var id = parseInt(document.getElementById("editCust_id").value);
    var currentIndex = -1;
    for (var i = 0; i < this.customerArray.length; i++) {
        if (id == this.customerArray[i]._id) {   
        currentIndex = i;
        break; // Exit the loop once a match is found
     }
    }
    const edit_cust_url = this.getUserUrl + "/" + id;
    const response = confirm("Are you sure you want to edit your information?");

    const username = document.getElementById("editCustName").value;
    const email = document.getElementById("editCustEmail").value;
    const status = document.getElementById("editCustStatus").value;

    const editedCust = {
      username: username,
      email: email,
      status: status
    };
    console.log(editedCust);

  if (response == true) {
        const updateCust = new XMLHttpRequest();
        updateCust.open("PUT", edit_cust_url, true);
        updateCust.setRequestHeader("Content-Type", "application/json");

        //Update the movie object in the movieArray
        this.customerArray[currentIndex].username = username;
        this.customerArray[currentIndex].email = email;
        this.customerArray[currentIndex].status = status;

        updateCust.onload = function () {
            alert("Your customer account information has been edited.");
        };

        
        updateCust.send(JSON.stringify(this.customerArray[currentIndex]));
    }
  }

  createCust(){
      document.getElementById("createCusttable").style.display ="block"; 
  }
  
  cancelCreateCust(){
      document.getElementById("createCusttable").style.display ="none"; 
  }

  cancelCustDetails(){
      document.getElementById("editCusttable").style.display ="none"; 
  }
  
  }

  

  const customer = new Customer("/login", "/signup", "/user", "/create");