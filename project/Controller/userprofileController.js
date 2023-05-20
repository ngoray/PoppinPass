let userprofile_array = [];

class UserProfile {
    constructor(userprofileUrl,searchUrl) {
      this.userprofileUrl = userprofileUrl;
      this.searchUrl = searchUrl;

    }

  openCreateUserProfileModal(){
    document.getElementById("createUserProfiletable").style.display="block";
  }

  closeCreateUserProfileModal(){
    document.getElementById("createUserProfiletable").style.display="none";
  }

  closeEditUserProfileModal(){
    document.getElementById("editUserProfiletable").style.display="none";
  }
   
  
  fetchUserProfile2(){
    const fetchUserProfile = new XMLHttpRequest();
    fetchUserProfile.open("GET", this.userprofileUrl, true);
  
      fetchUserProfile.onload = () => {
        userprofile_array = JSON.parse(fetchUserProfile.responseText);
  
        this.generateUserProfile2();
        this.generateUpdateUserProfile();
      };
  
      
      fetchUserProfile.send();
  }

  generateUserProfile2(){
    const table = document.getElementById("getUserProfiles");
      let upCount = 0;
      let message = "";
      table.innerHTML = "";
      const totalup = userprofile_array.length;

      for (let count = 0; count < totalup; count++)
      {
          const role = userprofile_array[count].role;
          const cell ='<option value="'+role+'">'+role+'</option>'

          table.insertAdjacentHTML("beforeend", cell);
          upCount++;
      }
  }

  showUserProfileDetails(element){
    console.log(this.userprofile_array);
    var item = element.getAttribute("item");
    console.log(item);
    const currentIndex = item;

    document.getElementById("editUserProfiletable").style.display ="block";
    document.getElementById("updateUserProfile_id").value = userprofile_array[item]._id;
    document.getElementById("editUserProfileRole").value = userprofile_array[item].role;
    document.getElementById("editUserProfileRoleDescription").value = userprofile_array[item].description;
  }

  generateUpdateUserProfile(){
    const table = document.getElementById("updateGetUserProfiles");
      let upCount = 0;
      let message = "";
      table.innerHTML = "";
      const totalup = userprofile_array.length;

      for (let count = 0; count < totalup; count++)
      {
          const id = userprofile_array[count]._id;
          const role = userprofile_array[count].role;
          const desc = userprofile_array[count].description;
          const cell ='<option value="'+role+'">'+role+'</option>'

          table.insertAdjacentHTML("beforeend", cell);
          upCount++;
      }
  }
}
const userprofile = new UserProfile("/userprofile","/searchuserprofile");

class CreateUserProfileController {
  constructor(userprofileUrl) {
    this.userprofileUrl = userprofileUrl;

  }

  addUserProfile() {
    const addUserProfile = new XMLHttpRequest();
    addUserProfile.open('POST', this.userprofileUrl, true);

    const role = document.getElementById("createProfileRole").value;
    const description = document.getElementById("createProfileDescription").value;


    const userprofileData = {
        "role": role,
        "description": description
    }

    console.log(userprofileData)

    addUserProfile.setRequestHeader("Content-Type", "application/json");
    addUserProfile.onload = function () {
      alert("user profile added");
      document.getElementById("createProfileRole").value = "";
      document.getElementById("createProfileDescription").value = "";
      document.getElementById("createUserProfiletable").style.display="none";
      document.getElementById("viewUserProfile").style.display="none";
      viewUserProfile();
    };
    addUserProfile.send(JSON.stringify(userprofileData));
  }
}
const createuserprofilecontroller = new CreateUserProfileController("/userprofile");

class ViewUserProfileController {
  constructor(userprofileUrl) {
    this.userprofileUrl = userprofileUrl;
    this.userprofile_array = [];

  }

  fetchUserProfile(){
    const fetchUserProfile = new XMLHttpRequest();
    fetchUserProfile.open("GET", this.userprofileUrl, true);
  
      fetchUserProfile.onload = () => {
        userprofile_array = JSON.parse(fetchUserProfile.responseText);
        generateUserProfile();
      };
  
      
      fetchUserProfile.send();
  }

}
const viewuserprofilecontroller = new ViewUserProfileController("/userprofile");

class UpdateUserProfileController {
  constructor(userprofileUrl) {
    this.userprofileUrl = userprofileUrl;
  }

  updateUserProfile(currentIndex){
    var id = parseInt(document.getElementById("updateUserProfile_id").value);
    var currentIndex = -1;
    for (var i = 0; i < userprofile_array.length; i++) {
        if (id == userprofile_array[i]._id) {   
        currentIndex = i;
        break; // Exit the loop once a match is found
      }
    }

    console.log(userprofile_array);

    const edit_up_url = this.userprofileUrl + "/" + id;
    const response = confirm("Are you sure you want to edit the user profile information?");

    const role = document.getElementById("editUserProfileRole").value;
    const desc = document.getElementById("editUserProfileRoleDescription").value;

    const editedUP = {
      role: role,
      description:desc
  };

  console.log(editedUP);

  if (response == true) {
    const updateUP = new XMLHttpRequest();
    updateUP.open("PUT", edit_up_url, true);
    updateUP.setRequestHeader("Content-Type", "application/json");

    userprofile_array[currentIndex].role = role;
    userprofile_array[currentIndex].description = desc;

    updateUP.onload = function () {
        alert("User Profile Editted.");
        document.getElementById("editUserProfiletable").style.display="none";
        document.getElementById("viewUserProfile").style.display="none";
        viewUserProfile();
    };

    // Send the updated movie object as a JSON string
    updateUP.send(JSON.stringify(userprofile_array[currentIndex]));
    }
   
  }
}
const updateuserprofilecontroller = new UpdateUserProfileController("/userprofile");

class SearchUserProfileController {
  constructor(searchUrl) {
    this.searchUrl = searchUrl;
  }

  searchUserProfile(){
    var input, filter, table, tr, td, a, i, txtValue;
      input = document.getElementById("profileSearch");
      filter = input.value.toUpperCase();
      table = document.getElementById("getUserProfile");
      const searchUP = new XMLHttpRequest();

      if (filter === null)
      {
        document.getElementById("viewUserProfile").style.display="none";
        viewUserProfile();
      }

      else{
        const search1 = "%" +filter + "%"
        console.log ("search: " + search1);
      searchUP.open('POST', this.searchUrl, true);

      const searchdata = {
        "search": search1
      }

      console.log("search data: "+ JSON.stringify(searchdata))

      searchUP.setRequestHeader("Content-Type", "application/json");
      searchUP.onload = function () {
        userprofile_array = []
        userprofile_array = JSON.parse(searchUP.responseText);
        console.log("array length" + userprofile_array.length);
        document.getElementById("getUserProfile").style.display="none";
        document.getElementById("getSearchProfile").style.display="block";
        

        const table = document.getElementById("getSearchProfile");
        let upCount = 0;
        let message = "";
        table.innerHTML = "";
        const totalup = userprofile_array.length;
        console.log("array length" + userprofile_array.length);

        for (let count = 0; count < totalup; count++)
        {
            const id = userprofile_array[count]._id;
            const role = userprofile_array[count].role;
            const desc = userprofile_array[count].description;
            const cell ='<td><strong id="up_id" style="display:none;">'+id+'</strong><a>'+role+'</a></td><td>'+desc+'</td><td width="10%"><button item = '+count+' style="background-color:#333333a0;" onclick="userprofile.showUserProfileDetails(this)"><img src="./../images/edit.png" width="30px" height="30px"></td>'

            table.insertAdjacentHTML("beforeend", cell);
            console.log(table);
            upCount++;
        }
      };
      searchUP.send(JSON.stringify(searchdata));
    }

  }
}
const searchuserprofilecontroller = new SearchUserProfileController("/searchuserprofile");

class SuspendUserProfileController{
  constructor(suspendUrl) {
    this.suspendUrl = suspendUrl;
  }

  suspendUserProfile(element){
    var response = confirm("Are you sure you want to suspend this Profile?");
    if (response == true)
    {
        var item = element.getAttribute("item");
        var id = userprofile_array[item]._id;
        var suspendUp = new XMLHttpRequest();

    var sus_up_url = this.suspendUrl + "/" + id;
    console.log(id);


    suspendUp.open("DELETE", sus_up_url); 
    suspendUp.onload = function () {
        alert("the profile has been suspended");
        document.getElementById("viewUserProfile").style.display="none";
        viewUserProfile();
    };
    suspendUp.send();
    }
    

  }
}
const suspenduserprofilecontroller = new SuspendUserProfileController("/userprofile");