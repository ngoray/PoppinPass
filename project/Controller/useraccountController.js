let ua_array = [];

class UserAccount {
    constructor(loginUrl, createUrl, searchUrl, lpUrl, passUrl) {
      this.loginUrl = loginUrl;
      this.createUrl = createUrl;
      this.searchUrl = searchUrl;
      this.lpUrl = lpUrl;
      this.passUrl = passUrl;

      this.ua_array = [];
    }

    searchUserAccount(){
      var input, filter, table, tr, td, a, i, txtValue;
        input = document.getElementById("accountSearch");
        filter = input.value.toUpperCase();
        table = document.getElementById("getUserAccount");
        const searchUA = new XMLHttpRequest();

        if (filter === null)
        {
          document.getElementById("viewUserAccount").style.display="none";
          viewUserAccount()
        }

        else{
          const search1 = "%" +filter + "%"
          console.log ("search: " + search1);
          searchUA.open('POST', this.searchUrl, true);

        const searchdata = {
          "search": search1
        }

        console.log("search data: "+ JSON.stringify(searchdata))

        searchUA.setRequestHeader("Content-Type", "application/json");
        searchUA.onload = function () {
          this.ua_array= []
          this.ua_array = JSON.parse(searchUA.responseText);
          console.log("array length" + this.ua_array.length);
          document.getElementById("getUserProfile").style.display="none";
          document.getElementById("getSearchProfile").style.display="block";
          

          const table = document.getElementById("getUser");
        let uaCount = 0;
        let message = "";
        table.innerHTML = "";
        const totalua = this.ua_array.length;

        for (let count = 0; count < totalua; count++)
        {
            const id = this.ua_array[count]._id;
            const name = this.ua_array[count].name;
            const email = this.ua_array[count].email;
            const role = this.ua_array[count].role;
            const status = this.ua_array[count].status;

            const cell = '<td colspan="2" width="19%">\
                            <strong id="st_id" style="display:none;">\
                                '+id+'\
                            </strong>\
                            <a>\
                                '+name+'\
                            </a>\
                        </td>\
                        <td>\
                            <a>\
                                '+email+'\
                            </a>\
                        </td>\
                        <td>\
                            <a>\
                                '+role+'\
                            </a>\
                        </td>\
                        <td>\
                            <a>\
                                '+status+'\
                            </a>\
                        </td>\
                        <td width="10%">\
                            <button item = '+count+' style="background-color:#333333a0;" onclick="useraccount.showUserAccountDetails(this)">\
                                <img src="./../images/edit.png" width="30px" height="30px">\
                            </button>\
                            <button item = '+count+' style="background-color:#333333a0;" onclick="useraccount.suspendScreenTime(this)">\
                                <img src="./../images/delete.png" width="30px" height="30px">\
                            </button>\    </td>'
            
            table.insertAdjacentHTML("beforeend", cell);
            uaCount++;
            
    }
        };
        searchUA.send(JSON.stringify(searchdata));
      }

    }

  loginUserAccount() {
        const loginCorp = new XMLHttpRequest();
      loginCorp.open('POST', this.loginUrl, true);
  
      const name = document.getElementById("corpusername").value;
      const password = document.getElementById("corppw").value;
  
      const loginData = {
          "name": name,
          "password": password
      }
  
      console.log(loginData)
  
      loginCorp.setRequestHeader("Content-Type", "application/json");
      loginCorp.onload = function () {
          const output = JSON.parse(loginCorp.responseText);
          if (output.token) {
              sessionStorage.setItem("id", output._id);
              sessionStorage.setItem("token", output.token);
              sessionStorage.setItem("name", output.username);
              sessionStorage.setItem("status", output.status);
              sessionStorage.setItem("role", output.role);
              console.log(output.role);
              if (output.status == "suspended")
                {
                    alert("this account has been suspended")
                    document.getElementById("id01").style.display ="none";
                }
                else if (output.role =="Cinema Owner")
                {
                  alert("welcome Cinema Owner")
                  document.getElementById("corploggout").style.display ="block";
                  document.getElementById("corpPic").style.display ="block";
                  document.getElementById("ownerMenu").style.display ="block";
                  document.getElementById("ownerpagecontent").style.display="block";
                  
                  document.getElementById("corplogin").style.display ="none";
                  staffName.innerText = output.role;
                  gReport();
                }
                else if (output.role =="Cinema Manager")
                {
                  alert("welcome Cinema Manager")
                  document.getElementById("corploggout").style.display ="block";
                  document.getElementById("corpPic").style.display ="block";
                  document.getElementById("managerMenu").style.display ="block";
                  document.getElementById("managercontent").style.display="block";

                  document.getElementById("corplogin").style.display ="none";
                  staffName.innerText = output.role;
                  mSeatMap();
                }
                else if (output.role =="User Admin")
                {
                  alert("welcome User Admin")
                  document.getElementById("corploggout").style.display ="block";
                  document.getElementById("corpPic").style.display ="block";
                  document.getElementById("adminMenu").style.display ="block";
                  document.getElementById("adminpagecontent").style.display ="block";
                  document.getElementById("corplogin").style.display ="none";
                  staffName.innerText = output.role;
                  viewUserAccount();
                }
          } else {
              alert("Invalid Username or Password...Please try again");
          }
      };
      loginCorp.send(JSON.stringify(loginData));
      
  }

  loginUser() {
  const loginUser = new XMLHttpRequest();
  loginUser.open('POST', this.loginUrl, true);
  
  const name = document.getElementById("loginname").value;
  const password = document.getElementById("loginpw").value;
  
  const loginData = {
    "name": name,
    "password": password
  }
  
  console.log(loginData)
  
  loginUser.setRequestHeader("Content-Type", "application/json");
  loginUser.onload = function () {
  const output = JSON.parse(loginUser.responseText);
  console.log(JSON.stringify(output));
  if (output.token) {
    sessionStorage.setItem("token", output.token);
    sessionStorage.setItem("name", output.name);
    sessionStorage.setItem("email", output.email);
    sessionStorage.setItem("loyaltypoints", output.loyaltypoints);
    console.log(username);
    document.getElementById("userProfileNameHeader").innerHTML = name;
  if (output.status == "suspended")
  {
    alert("this account has been suspended")
    document.getElementById("id01").style.display ="none";
  }
  else if (output.role != "Customer"){
    alert("Invalid Credentials");
  }
  else{
    alert("Welcome "+ name);
    document.getElementById("userProfileName").innerHTML = name;
    document.getElementById("userProfileEmail").innerHTML = output.email;
    document.getElementById("userProfilePoints").innerHTML = output.loyaltypoints;
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
    // document.getElementById("menu").classList.remove("active");
    document.getElementById("uProfile").classList.add("active");

    var currentName = sessionStorage.getItem("name");
    transactionhistory.fetchTransactionHistory(currentName);
                  
    // customer.showCustProfile(this);
    $("#customercontent").fadeIn()
    document.getElementById("customercontent").style.display ="block";
    document.getElementById("userCart").style.display ="block";
    document.getElementById("uProfile").style.display ="block";

  }
  } 
  else 
  {
    alert("Invalid Username or Password...Please try again");
  }
  };
  loginUser.send(JSON.stringify(loginData));     
  }

  addUserAccount() {
    userprofile.fetchUserProfile2();
    const addUserAccount = new XMLHttpRequest();
    addUserAccount.open('POST', this.createUrl, true);

    const name = document.getElementById("createAccountName").value;
    const email = document.getElementById("createAccountEmail").value;
    const password = document.getElementById("createAccountPassword").value;
    const role = document.getElementById("getUserProfiles").value;

    console.log(password);


    const useraccountData = {
        "name": name,
        "email": email,
        "password": password,
        "role": role
    }

    console.log(useraccountData)

    addUserAccount.setRequestHeader("Content-Type", "application/json");
    addUserAccount.onload = function () {
      alert("user account added");
      document.getElementById("createAccountName").value = "";
      document.getElementById("createAccountEmail").value = "";
      document.getElementById("createAccountPassword").value="";
      document.getElementById("createUserAcounttable").style.display="none";
      document.getElementById("viewUserAccount").style.display="none";
      viewUserAccount();
    };
    addUserAccount.send(JSON.stringify(useraccountData));
  }

  fetchUserAccount()
  {
    const request = new XMLHttpRequest();
        request.open("GET", this.createUrl, true);
        console.log(request);
        request.onload = () => {
           
            this.ua_array = JSON.parse(request.responseText);
            console.log(this.ua_array);

            this.displayUserAccount();
          };

          request.send();
  }

  displayUserAccount(){
    const table = document.getElementById("getUser");
        let uaCount = 0;
        let message = "";
        table.innerHTML = "";
        const totalua = this.ua_array.length;

        for (let count = 0; count < totalua; count++)
        {
            const id = this.ua_array[count]._id;
            const name = this.ua_array[count].name;
            const email = this.ua_array[count].email;
            const role = this.ua_array[count].role;
            const status = this.ua_array[count].status;

            const cell = '<td colspan="2" width="19%">\
                            <strong id="st_id" style="display:none;">\
                                '+id+'\
                            </strong>\
                            <a>\
                                '+name+'\
                            </a>\
                        </td>\
                        <td>\
                            <a>\
                                '+email+'\
                            </a>\
                        </td>\
                        <td>\
                            <a>\
                                '+role+'\
                            </a>\
                        </td>\
                        <td>\
                            <a>\
                                '+status+'\
                            </a>\
                        </td>\
                        <td width="10%">\
                            <button item = '+count+' style="background-color:#333333a0;" onclick="useraccount.showUserAccountDetails(this)">\
                                <img src="./../images/edit.png" width="30px" height="30px">\
                            </button>\
                            <button item = '+count+' style="background-color:#333333a0;" onclick="useraccount.suspendScreenTime(this)">\
                                <img src="./../images/delete.png" width="30px" height="30px">\
                            </button>\    </td>'
            
            table.insertAdjacentHTML("beforeend", cell);
            uaCount++;
            
    }

  }

  showUserAccountDetails(element)
  {
    console.log(this.ua_array);
        var item = element.getAttribute("item");
        console.log(item);
        var id = this.ua_array[item]._id; 
        userprofile.fetchUserProfile2();
        
        document.getElementById("updateUserAccounttable").style.display ="block";
        document.getElementById("updateuaId").value = this.ua_array[item]._id;
        document.getElementById("updateAccountName").value = this.ua_array[item].name;
        document.getElementById("updateAccountPassword").value = this.ua_array[item].password;
        document.getElementById("updateAccountEmail").value = this.ua_array[item].email;
        document.getElementById("updateAccountStatus").value = this.ua_array[item].status;
  }

  updateUserAccount(currentIndex){
    var id = parseInt(document.getElementById("updateuaId").value);
    console.log("id: " +id);
    var currentIndex = -1;
    for (var i = 0; i < this.ua_array.length; i++) {
        if (id == this.ua_array[i]._id) {   
        currentIndex = i;
        break; // Exit the loop once a match is found
     }
    }

    const edit_ua_url = this.createUrl + "/" + id;
    const response = confirm("Are you sure you want to edit this account?");
    const name = document.getElementById("updateAccountName").value;
    const password = document.getElementById("updateAccountPassword").value;
    const email = document.getElementById("updateAccountEmail").value;
    const role = document.getElementById("updateGetUserProfiles").value;
    const status = document.getElementById("updateAccountStatus").value;

    const editedua = {
      _id: id,
      name: name,
      password: password,
      email: email,
      role: role,
      status: status
    };

    if (response == true) {
      const updateua = new XMLHttpRequest();
      updateua.open("PUT", edit_ua_url, true);
      updateua.setRequestHeader("Content-Type", "application/json");

      this.ua_array[currentIndex].name = name;
      this.ua_array[currentIndex].password = password;
      this.ua_array[currentIndex].email = email;
      this.ua_array[currentIndex].role = role;
      this.ua_array[currentIndex].status = status;

      updateua.onload = function () {
          alert("The account information has been edited");
          document.getElementById("updateUserAccounttable").style.display ="none";
          document.getElementById("viewUserAccount").style.display ="none";
          viewUserAccount();
      };

      updateua.send(JSON.stringify(editedua));
      }
  }

  openCreateUserModal(){
    userprofile.fetchUserProfile2();
    document.getElementById("createUserAcounttable").style.display ="block";
  }

  closeCreateUserModal(){
    document.getElementById("createUserAcounttable").style.display ="none";
  }

  closeUpdateUserModal(){
    document.getElementById("updateUserAccounttable").style.display ="none";
  }

  createUser() {
    const registerUser = new XMLHttpRequest();
    registerUser.open('POST', this.createUrl, true);

    const name = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const role = document.getElementById("CustRole").innerHTML;

    const registerData = {
        "name": name,
        "email": email,
        "password": password,
        "role": role
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
            document.getElementById("id02").style.display = "none";
            document.getElementById("id01").style.display = "block";
        } else {
            alert("Your Username or Email has been taken");
        }
    };
    registerUser.send(JSON.stringify(registerData));
  }

  // updateLoyaltyPoints(){

  //   console.log("updatelp called");

  //   var id = sessionStorage.getItem("id");
    

  //   var lp = sessionStorage.getItem("loyaltypoints");
  //   var currentlp = document.getElementById("summaryPoints").innerHTML;
  //   lp = parseInt(lp);
  //   currentlp = parseInt(currentlp);

  //   console.log("lp:" + lp + " currentlp: "+currentlp);
  //   if (lp === currentlp){
  //     console.log("points unchanged")
  //     break;
  //   }
  //   else{
  //     var lp = sessionStorage.setItem("loyaltypoints", currentlp);
  //     const update_lp_url = this.lpUrl + "/" + id;

  //     const lpinfo = {
  //       loyaltypoints: currentlp
  //     };

  //     const updatelp = new XMLHttpRequest();
  //     updatelp.open("PUT", update_lp_url, true);
  //     updatelp.setRequestHeader("Content-Type", "application/json");

  //     this.ua_array[currentIndex].loyaltypoints = currentlp;
  //     updateua.onload = function () {
  //       console.log("lp updated");
        
  //   };
  //   updateua.send(JSON.stringify(lpinfo));
  //   }
  // }

    updateLoyaltyPoints(){
      var name = sessionStorage.getItem("name");
      var currentpoints = parseInt(document.getElementById("summaryPoints").innerHTML);
      var loyaltypoints = currentpoints +5;
      const edit_points_url = this.lpUrl + "/" + name;

      const editedpt = {
        name: name,
        loyaltypoints: loyaltypoints
      };

      console.log(editedpt);

      const updatepoints = new XMLHttpRequest();
      updatepoints.open("PUT", edit_points_url, true);
      updatepoints.setRequestHeader("Content-Type", "application/json");

      this.ua_array.name = name;
      this.ua_array.loyaltypoints = loyaltypoints;
      loyaltypoints = document.getElementById("userProfilePoints").innerHTML;

      updatepoints.onload = function () { };

      updatepoints.send(JSON.stringify(editedpt));
    }

    updateCustomerAccount(){
      var name = document.getElementById("editname").value;
      var password = document.getElementById("editpw").value;
      const edit_cust_url = this.passUrl + "/" + name;

      const response = confirm("Are you sure you want to change password?");

      const editedcust = {
        name: name,
        password: password
      };

      console.log(editedcust);

      if (response == true) {
        const updatecust = new XMLHttpRequest();
        updatecust.open("PUT", edit_cust_url, true);
        updatecust.setRequestHeader("Content-Type", "application/json");
  
        this.ua_array.name = name;
        this.ua_array.password = password;
  
        updatecust.onload = function () {
            alert("Your customer account information has been edited");
            document.getElementById("editname").value = "";
            document.getElementById("editpw").value = "";
            document.getElementById("editPassword").style.display ="none";
            document.getElementById("id01").style.display ="block";
            

        };
  
        updatecust.send(JSON.stringify(editedcust));
        }
    }

  } 
const useraccount = new UserAccount("/login", "/useraccount", "/searchuseraccount","/updatelp", "/updatePassword"); 

class AdminCreateAccountController {

  constructor(loginUrl, createUrl, searchUrl, lpUrl, passUrl) {
    this.loginUrl = loginUrl;
    this.createUrl = createUrl;
    this.searchUrl = searchUrl;
    this.lpUrl = lpUrl;
    this.passUrl = passUrl;
  }

  addUserAccount() {
    userprofile.fetchUserProfile2();
    const addUserAccount = new XMLHttpRequest();
    addUserAccount.open('POST', this.createUrl, true);

    const name = document.getElementById("createAccountName").value;
    const email = document.getElementById("createAccountEmail").value;
    const password = document.getElementById("createAccountPassword").value;
    const role = document.getElementById("getUserProfiles").value;

    console.log(password);


    const useraccountData = {
        "name": name,
        "email": email,
        "password": password,
        "role": role
    }

    console.log(useraccountData)

    addUserAccount.setRequestHeader("Content-Type", "application/json");
    addUserAccount.onload = function () {
      alert("user account added");
      document.getElementById("createAccountName").value = "";
      document.getElementById("createAccountEmail").value = "";
      document.getElementById("createAccountPassword").value="";
      document.getElementById("createUserAcounttable").style.display="none";
      document.getElementById("viewUserAccount").style.display="none";
      viewUserAccount();
    };
    addUserAccount.send(JSON.stringify(useraccountData));
  }

}
const admincreateaccountcontroller = new AdminCreateAccountController("/login", "/useraccount", "/searchuseraccount","/updatelp", "/updatePassword"); 

class CustomerCreateAccountController {

  constructor(loginUrl, createUrl, searchUrl, lpUrl, passUrl) {
    this.loginUrl = loginUrl;
    this.createUrl = createUrl;
    this.searchUrl = searchUrl;
    this.lpUrl = lpUrl;
    this.passUrl = passUrl;

    this.ua_array = [];
  }

  createUser() {
    const registerUser = new XMLHttpRequest();
    registerUser.open('POST', this.createUrl, true);

    const name = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const role = document.getElementById("CustRole").innerHTML;

    const registerData = {
        "name": name,
        "email": email,
        "password": password,
        "role": role
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
            document.getElementById("id02").style.display = "none";
            document.getElementById("id01").style.display = "block";
        } else {
            alert("Your Username or Email has been taken");
        }
    };
    registerUser.send(JSON.stringify(registerData));
  }

}
const customercreateaccountcontroller = new CustomerCreateAccountController("/login", "/useraccount", "/searchuseraccount","/updatelp", "/updatePassword"); 

class ViewUserAccountController {

  constructor(loginUrl, createUrl, searchUrl, lpUrl, passUrl) {
    this.loginUrl = loginUrl;
    this.createUrl = createUrl;
    this.searchUrl = searchUrl;
    this.lpUrl = lpUrl;
    this.passUrl = passUrl;
  }

  createUser() {
    const registerUser = new XMLHttpRequest();
    registerUser.open('POST', this.createUrl, true);

    const name = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const role = document.getElementById("CustRole").innerHTML;

    const registerData = {
        "name": name,
        "email": email,
        "password": password,
        "role": role
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
            document.getElementById("id02").style.display = "none";
            document.getElementById("id01").style.display = "block";
        } else {
            alert("Your Username or Email has been taken");
        }
    };
    registerUser.send(JSON.stringify(registerData));
  }

}
const viewuseraccountcontroller = new ViewUserAccountController("/login", "/useraccount", "/searchuseraccount","/updatelp", "/updatePassword"); 

class AdminLoginAccountController {

  constructor(loginUrl, createUrl, searchUrl, lpUrl, passUrl) {
    this.loginUrl = loginUrl;
    this.createUrl = createUrl;
    this.searchUrl = searchUrl;
    this.lpUrl = lpUrl;
    this.passUrl = passUrl;

    this.ua_array = [];
  }

  loginAdminAccount() {
    const loginCorp = new XMLHttpRequest();
  loginCorp.open('POST', this.loginUrl, true);

  const name = document.getElementById("corpusername").value;
  const password = document.getElementById("corppw").value;

  const loginData = {
      "name": name,
      "password": password
  }

  console.log(loginData)

  loginCorp.setRequestHeader("Content-Type", "application/json");
  loginCorp.onload = function () {
      const output = JSON.parse(loginCorp.responseText);
      if (output.token) {
          sessionStorage.setItem("id", output._id);
          sessionStorage.setItem("token", output.token);
          sessionStorage.setItem("name", output.username);
          sessionStorage.setItem("status", output.status);
          sessionStorage.setItem("role", output.role);
          console.log(output.role);
          if (output.status == "suspended")
            {
                alert("this account has been suspended")
                document.getElementById("id01").style.display ="none";
            }
            else if (output.role =="Cinema Owner")
            {
              alert("welcome Cinema Owner")
              document.getElementById("corploggout").style.display ="block";
              document.getElementById("corpPic").style.display ="block";
              document.getElementById("ownerMenu").style.display ="block";
              document.getElementById("ownerpagecontent").style.display="block";
              
              document.getElementById("corplogin").style.display ="none";
              staffName.innerText = output.role;
              gReport();
            }
            else if (output.role =="Cinema Manager")
            {
              alert("welcome Cinema Manager")
              document.getElementById("corploggout").style.display ="block";
              document.getElementById("corpPic").style.display ="block";
              document.getElementById("managerMenu").style.display ="block";
              document.getElementById("managercontent").style.display="block";

              document.getElementById("corplogin").style.display ="none";
              staffName.innerText = output.role;
              mSeatMap();
            }
            else if (output.role =="User Admin")
            {
              alert("welcome User Admin")
              document.getElementById("corploggout").style.display ="block";
              document.getElementById("corpPic").style.display ="block";
              document.getElementById("adminMenu").style.display ="block";
              document.getElementById("adminpagecontent").style.display ="block";
              document.getElementById("corplogin").style.display ="none";
              staffName.innerText = output.role;
              viewUserAccount();
            }
      } else {
          alert("Invalid Username or Password...Please try again");
      }
    };
    loginCorp.send(JSON.stringify(loginData));
  }

}
const adminloginaccountcontroller = new AdminLoginAccountController("/login", "/useraccount", "/searchuseraccount","/updatelp", "/updatePassword"); 

class CinemaManagerLoginAccountController {
  constructor(loginUrl, createUrl, searchUrl, lpUrl, passUrl) {
    this.loginUrl = loginUrl;
    this.createUrl = createUrl;
    this.searchUrl = searchUrl;
    this.lpUrl = lpUrl;
    this.passUrl = passUrl;

    this.ua_array = [];
  }

  loginManagerAccount() {
    const loginCorp = new XMLHttpRequest();
  loginCorp.open('POST', this.loginUrl, true);

  const name = document.getElementById("corpusername").value;
  const password = document.getElementById("corppw").value;

  const loginData = {
      "name": name,
      "password": password
  }

  console.log(loginData)

  loginCorp.setRequestHeader("Content-Type", "application/json");
  loginCorp.onload = function () {
      const output = JSON.parse(loginCorp.responseText);
      if (output.token) {
          sessionStorage.setItem("id", output._id);
          sessionStorage.setItem("token", output.token);
          sessionStorage.setItem("name", output.username);
          sessionStorage.setItem("status", output.status);
          sessionStorage.setItem("role", output.role);
          console.log(output.role);
          if (output.status == "suspended")
            {
                alert("this account has been suspended")
                document.getElementById("id01").style.display ="none";
            }
            else if (output.role =="Cinema Owner")
            {
              alert("welcome Cinema Owner")
              document.getElementById("corploggout").style.display ="block";
              document.getElementById("corpPic").style.display ="block";
              document.getElementById("ownerMenu").style.display ="block";
              document.getElementById("ownerpagecontent").style.display="block";
              
              document.getElementById("corplogin").style.display ="none";
              staffName.innerText = output.role;
              gReport();
            }
            else if (output.role =="Cinema Manager")
            {
              alert("welcome Cinema Manager")
              document.getElementById("corploggout").style.display ="block";
              document.getElementById("corpPic").style.display ="block";
              document.getElementById("managerMenu").style.display ="block";
              document.getElementById("managercontent").style.display="block";

              document.getElementById("corplogin").style.display ="none";
              staffName.innerText = output.role;
              mSeatMap();
            }
            else if (output.role =="User Admin")
            {
              alert("welcome User Admin")
              document.getElementById("corploggout").style.display ="block";
              document.getElementById("corpPic").style.display ="block";
              document.getElementById("adminMenu").style.display ="block";
              document.getElementById("adminpagecontent").style.display ="block";
              document.getElementById("corplogin").style.display ="none";
              staffName.innerText = output.role;
              viewUserAccount();
            }
      } else {
          alert("Invalid Username or Password...Please try again");
      }
  };
  loginCorp.send(JSON.stringify(loginData));
  
}
}
const cinemamanagerloginaccountcontroller = new CinemaManagerLoginAccountController("/login", "/useraccount", "/searchuseraccount","/updatelp", "/updatePassword"); 

class CinemaOwnerLoginAccountController {
  constructor(loginUrl, createUrl, searchUrl, lpUrl, passUrl) {
    this.loginUrl = loginUrl;
    this.createUrl = createUrl;
    this.searchUrl = searchUrl;
    this.lpUrl = lpUrl;
    this.passUrl = passUrl;

    this.ua_array = [];
  }

  loginOwnerAccount() {
    const loginCorp = new XMLHttpRequest();
  loginCorp.open('POST', this.loginUrl, true);

  const name = document.getElementById("corpusername").value;
  const password = document.getElementById("corppw").value;

  const loginData = {
      "name": name,
      "password": password
  }

  console.log(loginData)

  loginCorp.setRequestHeader("Content-Type", "application/json");
  loginCorp.onload = function () {
      const output = JSON.parse(loginCorp.responseText);
      if (output.token) {
          sessionStorage.setItem("id", output._id);
          sessionStorage.setItem("token", output.token);
          sessionStorage.setItem("name", output.username);
          sessionStorage.setItem("status", output.status);
          sessionStorage.setItem("role", output.role);
          console.log(output.role);
          if (output.status == "suspended")
            {
                alert("this account has been suspended")
                document.getElementById("id01").style.display ="none";
            }
            else if (output.role =="Cinema Owner")
            {
              alert("welcome Cinema Owner")
              document.getElementById("corploggout").style.display ="block";
              document.getElementById("corpPic").style.display ="block";
              document.getElementById("ownerMenu").style.display ="block";
              document.getElementById("ownerpagecontent").style.display="block";
              
              document.getElementById("corplogin").style.display ="none";
              staffName.innerText = output.role;
              gReport();
            }
            else if (output.role =="Cinema Manager")
            {
              alert("welcome Cinema Manager")
              document.getElementById("corploggout").style.display ="block";
              document.getElementById("corpPic").style.display ="block";
              document.getElementById("managerMenu").style.display ="block";
              document.getElementById("managercontent").style.display="block";

              document.getElementById("corplogin").style.display ="none";
              staffName.innerText = output.role;
              mSeatMap();
            }
            else if (output.role =="User Admin")
            {
              alert("welcome User Admin")
              document.getElementById("corploggout").style.display ="block";
              document.getElementById("corpPic").style.display ="block";
              document.getElementById("adminMenu").style.display ="block";
              document.getElementById("adminpagecontent").style.display ="block";
              document.getElementById("corplogin").style.display ="none";
              staffName.innerText = output.role;
              viewUserAccount();
            }
      } else {
          alert("Invalid Username or Password...Please try again");
      }
  };
  loginCorp.send(JSON.stringify(loginData));
  
}
}
const cinemaownerloginaccountcontroller = new CinemaOwnerLoginAccountController("/login", "/useraccount", "/searchuseraccount","/updatelp", "/updatePassword"); 

class CustomerLoginAccountController {
  constructor(loginUrl, createUrl, searchUrl, lpUrl, passUrl) {
    this.loginUrl = loginUrl;
    this.createUrl = createUrl;
    this.searchUrl = searchUrl;
    this.lpUrl = lpUrl;
    this.passUrl = passUrl;

    this.ua_array = [];
  }

  loginCustomerAccount() {
    const loginUser = new XMLHttpRequest();
    loginUser.open('POST', this.loginUrl, true);
    
    const name = document.getElementById("loginname").value;
    const password = document.getElementById("loginpw").value;
    
    const loginData = {
      "name": name,
      "password": password
    }
    
    console.log(loginData)
    
    loginUser.setRequestHeader("Content-Type", "application/json");
    loginUser.onload = function () {
    const output = JSON.parse(loginUser.responseText);
    console.log(JSON.stringify(output));
    if (output.token) {
      sessionStorage.setItem("token", output.token);
      sessionStorage.setItem("name", output.name);
      sessionStorage.setItem("email", output.email);
      sessionStorage.setItem("loyaltypoints", output.loyaltypoints);
      console.log(username);
      document.getElementById("userProfileNameHeader").innerHTML = name;
    if (output.status == "suspended")
    {
      alert("this account has been suspended")
      document.getElementById("id01").style.display ="none";
    }
    else if (output.role != "Customer"){
      alert("Invalid Credentials");
    }
    else{
      alert("Welcome "+ name);
      document.getElementById("userProfileName").innerHTML = name;
      document.getElementById("userProfileEmail").innerHTML = output.email;
      document.getElementById("userProfilePoints").innerHTML = output.loyaltypoints;
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
      // document.getElementById("menu").classList.remove("active");
      document.getElementById("uProfile").classList.add("active");
  
      var currentName = sessionStorage.getItem("name");
      transactionhistory.fetchTransactionHistory(currentName);
                    
      // customer.showCustProfile(this);
      $("#customercontent").fadeIn()
      document.getElementById("customercontent").style.display ="block";
      document.getElementById("userCart").style.display ="block";
      document.getElementById("uProfile").style.display ="block";
  
    }
    } 
    else 
    {
      alert("Invalid Username or Password...Please try again");
    }
    };
    loginUser.send(JSON.stringify(loginData));     
    }
  
}
const customerloginaccountcontroller = new CustomerLoginAccountController("/login", "/useraccount", "/searchuseraccount","/updatelp", "/updatePassword"); 

class UpdateUserAccountController {
  constructor(loginUrl, createUrl, searchUrl, lpUrl, passUrl) {
    this.loginUrl = loginUrl;
    this.createUrl = createUrl;
    this.searchUrl = searchUrl;
    this.lpUrl = lpUrl;
    this.passUrl = passUrl;

    this.ua_array = [];
  }

  showUserAccountDetails(element)
  {
    console.log(this.ua_array);
        var item = element.getAttribute("item");
        console.log(item);
        var id = this.ua_array[item]._id; 
        userprofile.fetchUserProfile2();
        
        document.getElementById("updateUserAccounttable").style.display ="block";
        document.getElementById("updateuaId").value = this.ua_array[item]._id;
        document.getElementById("updateAccountName").value = this.ua_array[item].name;
        document.getElementById("updateAccountPassword").value = this.ua_array[item].password;
        document.getElementById("updateAccountEmail").value = this.ua_array[item].email;
        document.getElementById("updateAccountStatus").value = this.ua_array[item].status;
  }

  updateUserAccount(currentIndex){
    var id = parseInt(document.getElementById("updateuaId").value);
    console.log("id: " +id);
    var currentIndex = -1;
    for (var i = 0; i < this.ua_array.length; i++) {
        if (id == this.ua_array[i]._id) {   
        currentIndex = i;
        break; // Exit the loop once a match is found
     }
    }

    const edit_ua_url = this.createUrl + "/" + id;
    const response = confirm("Are you sure you want to edit this account?");
    const name = document.getElementById("updateAccountName").value;
    const password = document.getElementById("updateAccountPassword").value;
    const email = document.getElementById("updateAccountEmail").value;
    const role = document.getElementById("updateGetUserProfiles").value;
    const status = document.getElementById("updateAccountStatus").value;

    const editedua = {
      _id: id,
      name: name,
      password: password,
      email: email,
      role: role,
      status: status
    };

    if (response == true) {
      const updateua = new XMLHttpRequest();
      updateua.open("PUT", edit_ua_url, true);
      updateua.setRequestHeader("Content-Type", "application/json");

      this.ua_array[currentIndex].name = name;
      this.ua_array[currentIndex].password = password;
      this.ua_array[currentIndex].email = email;
      this.ua_array[currentIndex].role = role;
      this.ua_array[currentIndex].status = status;

      updateua.onload = function () {
          alert("The account information has been edited");
          document.getElementById("updateUserAccounttable").style.display ="none";
          document.getElementById("viewUserAccount").style.display ="none";
          viewUserAccount();
      };

      updateua.send(JSON.stringify(editedua));
      }
  }

  closeUpdateUserModal(){
    document.getElementById("updateUserAccounttable").style.display ="none";
  }
}
const updateuseraccountcontroller = new UpdateUserAccountController("/login", "/useraccount", "/searchuseraccount","/updatelp", "updatePassword"); 

class UpdateCustomerAccountController {
  constructor(loginUrl, createUrl, searchUrl, lpUrl, passUrl) {
    this.loginUrl = loginUrl;
    this.createUrl = createUrl;
    this.searchUrl = searchUrl;
    this.lpUrl = lpUrl;
    this.passUrl = passUrl;

    this.ua_array = [];
  }

  updateCustomerAccount(){
    var name = document.getElementById("editname").value;
    var password = document.getElementById("editpw").value;
    const edit_cust_url = this.passUrl + "/" + name;

    const response = confirm("Are you sure you want to change password?");

    const editedcust = {
      name: name,
      password: password
    };

    console.log(editedcust);

    if (response == true) {
      const updatecust = new XMLHttpRequest();
      updatecust.open("PUT", edit_cust_url, true);
      updatecust.setRequestHeader("Content-Type", "application/json");

      this.ua_array.name = name;
      this.ua_array.password = password;

      updatecust.onload = function () {
          alert("Your customer account information has been edited");
          document.getElementById("editname").value = "";
          document.getElementById("editpw").value = "";
          document.getElementById("editPassword").style.display ="none";
          document.getElementById("id01").style.display ="block";
          

      };

      updatecust.send(JSON.stringify(editedcust));
      }
  }
}
const updatecustomeraccountcontroller = new UpdateCustomerAccountController("/login", "/useraccount", "/searchuseraccount","/updatelp", "updatePassword"); 

class SuspendUserAccountController {
  constructor(loginUrl, createUrl, searchUrl, lpUrl, passUrl) {
    this.loginUrl = loginUrl;
    this.createUrl = createUrl;
    this.searchUrl = searchUrl;
    this.lpUrl = lpUrl;
    this.passUrl = passUrl;

    this.ua_array = [];
  }
}
const suspenduseraccountcontroller = new SuspendUserAccountController("/login", "/useraccount", "/searchuseraccount","/updatelp", "updatePassword"); 

class SearchUserAccountController {
  constructor(loginUrl, createUrl, searchUrl, lpUrl, passUrl) {
    this.loginUrl = loginUrl;
    this.createUrl = createUrl;
    this.searchUrl = searchUrl;
    this.lpUrl = lpUrl;
    this.passUrl = passUrl;

    this.ua_array = [];
  }
}
const searchuseraccountcontroller = new SearchUserAccountController("/login", "/useraccount", "/searchuseraccount","/updatelp", "updatePassword"); 

