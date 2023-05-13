class UserProfile {
    constructor(userprofileUrl,searchUrl) {
      this.userprofileUrl = userprofileUrl;
      this.searchUrl = searchUrl;
      this.userprofile_array = [];

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
          this.userprofile_array = []
          this.userprofile_array = JSON.parse(searchUP.responseText);
          console.log("array length" + this.userprofile_array.length);
          document.getElementById("getUserProfile").style.display="none";
          document.getElementById("getSearchProfile").style.display="block";
          

          const table = document.getElementById("getSearchProfile");
          let upCount = 0;
          let message = "";
          table.innerHTML = "";
          const totalup = this.userprofile_array.length;
          console.log("array length" + this.userprofile_array.length);

          for (let count = 0; count < totalup; count++)
          {
              const id = this.userprofile_array[count]._id;
              const role = this.userprofile_array[count].role;
              const desc = this.userprofile_array[count].description;
              const cell ='<td><strong id="up_id" style="display:none;">'+id+'</strong><a>'+role+'</a></td><td>'+desc+'</td><td width="10%"><button item = '+count+' style="background-color:#333333a0;" onclick="userprofile.showUserProfileDetails(this)"><img src="./../images/edit.png" width="30px" height="30px"></td>'

              table.insertAdjacentHTML("beforeend", cell);
              console.log(table);
              upCount++;
          }
        };
        searchUP.send(JSON.stringify(searchdata));
      }

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

  fetchUserProfile(){
    const fetchUserProfile = new XMLHttpRequest();
    fetchUserProfile.open("GET", this.userprofileUrl, true);
  
      fetchUserProfile.onload = () => {
        this.userprofile_array = JSON.parse(fetchUserProfile.responseText);
        this.displayUserProfile();
        this.displayUpdateUserProfile();
      };
  
      
      fetchUserProfile.send();
  }


  displayUserProfile(){
    const table = document.getElementById("getUserProfile");
      let upCount = 0;
      let message = "";
      table.innerHTML = "";
      const totalup = this.userprofile_array.length;
      console.log("array length" + this.userprofile_array.length);

      for (let count = 0; count < totalup; count++)
      {
          const id = this.userprofile_array[count]._id;
          const role = this.userprofile_array[count].role;
          const desc = this.userprofile_array[count].description;
          const cell ='<td><strong id="up_id" style="display:none;">'+id+'</strong><a>'+role+'</a></td><td>'+desc+'</td><td width="10%"><button item = '+count+' style="background-color:#333333a0;" onclick="userprofile.showUserProfileDetails(this)"><img src="./../images/edit.png" width="30px" height="30px"></td>'

          table.insertAdjacentHTML("beforeend", cell);
          console.log(table);
          upCount++;
      }
  }

  showUserProfileDetails(element){
    console.log(this.userprofile_array);
    var item = element.getAttribute("item");
    console.log(item);
    const currentIndex = item;

    document.getElementById("editUserProfiletable").style.display ="block";
    document.getElementById("updateUserProfile_id").value = this.userprofile_array[item]._id;
    document.getElementById("editUserProfileRole").value = this.userprofile_array[item].role;
    document.getElementById("editUserProfileRoleDescription").value = this.userprofile_array[item].description;
  }

  updateUserProfile(currentIndex){
    var id = parseInt(document.getElementById("updateUserProfile_id").value);
    var currentIndex = -1;
    for (var i = 0; i < this.userprofile_array.length; i++) {
        if (id == this.userprofile_array[i]._id) {   
        currentIndex = i;
        break; // Exit the loop once a match is found
      }
    }

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

    //Update the movie object in the movieArray
    this.userprofile_array[currentIndex].role = role;
    this.userprofile_array[currentIndex].description = desc;

    updateUP.onload = function () {
        alert("User Profile Editted.");
        document.getElementById("editUserProfiletable").style.display="none";
        document.getElementById("viewUserProfile").style.display="none";
        viewUserProfile();
    };

    // Send the updated movie object as a JSON string
    updateUP.send(JSON.stringify(this.userprofile_array[currentIndex]));
    }
   
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
        this.userprofile_array = JSON.parse(fetchUserProfile.responseText);
  
        this.displayUserProfile2();
        this.displayUpdateUserProfile();
      };
  
      
      fetchUserProfile.send();
  }

  displayUserProfile2(){
    const table = document.getElementById("getUserProfiles");
      let upCount = 0;
      let message = "";
      table.innerHTML = "";
      const totalup = this.userprofile_array.length;

      for (let count = 0; count < totalup; count++)
      {
          const role = this.userprofile_array[count].role;
          const cell ='<option value="'+role+'">'+role+'</option>'

          table.insertAdjacentHTML("beforeend", cell);
          upCount++;
      }
  }

  displayUpdateUserProfile(){
    const table = document.getElementById("updateGetUserProfiles");
      let upCount = 0;
      let message = "";
      table.innerHTML = "";
      const totalup = this.userprofile_array.length;

      for (let count = 0; count < totalup; count++)
      {
          const id = this.userprofile_array[count]._id;
          const role = this.userprofile_array[count].role;
          const desc = this.userprofile_array[count].description;
          const cell ='<option value="'+role+'">'+role+'</option>'

          table.insertAdjacentHTML("beforeend", cell);
          upCount++;
      }
  }
}

const userprofile = new UserProfile("/userprofile","/searchuserprofile");