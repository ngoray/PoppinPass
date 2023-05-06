class UserProfile {
    constructor(userprofileUrl) {
      this.userprofileUrl = userprofileUrl;
      this.userprofile_array = [];
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
    };
    addUserProfile.send(JSON.stringify(userprofileData));
  }

  fetchUserProfile(){
    const fetchUserProfile = new XMLHttpRequest();
    fetchUserProfile.open("GET", this.userprofileUrl, true);
  
      fetchUserProfile.onload = () => {
        this.userprofile_array = JSON.parse(fetchUserProfile.responseText);
  
        this.displayUserProfile();
      };
  
      
      fetchUserProfile.send();
  }

  displayUserProfile(){
    const table = document.getElementById("getUserProfile");
      let upCount = 0;
      let message = "";
      table.innerHTML = "";
      const totalup = this.userprofile_array.length;

      for (let count = 0; count < totalup; count++)
      {
          const id = this.userprofile_array[count]._id;
          const role = this.userprofile_array[count].role;
          const desc = this.userprofile_array[count].description;
          const cell ='<td><strong id="up_id" style="display:none;">'+id+'</strong><a>'+role+'</a></td><td>'+desc+'</td><td width="10%"><button item = '+count+' style="background-color:#333333a0;" onclick="userprofile.showUPDetails(this)"><img src="./../images/edit.png" width="30px" height="30px"></td>'

          table.insertAdjacentHTML("beforeend", cell);
          upCount++;
      }


  }

  openCreateUserProfileModal(){
    document.getElementById("createUserProfiletable").style.display="block";
  }

  closeCreateUserProfileModal(){
    document.getElementById("createUserProfiletable").style.display="none";
  }
    
}

const userprofile = new UserProfile("/userprofile");