var db = require('./../../dbconnection');

class UserProfile{

  searchUserProfile(request, respond) {
    console.log("THIS IS IN SEARCH PARAMS: " + request.body.search);
    const searchDetails = {
      search: request.body.search
    };
  
    console.log("deets: " + JSON.stringify(searchDetails));
  
    var sql = "SELECT * FROM poppinpass.userprofile WHERE role LIKE ?;";
  
    db.query(sql, [searchDetails.search], function (error, result) {
      console.log("result: " + result);
  
      if (error) {
        respond.json(error);
      } else {
        respond.json(result);
      }
    });
  }
  
  addingUserProfile(request, respond) {
    const profileDetails = {
      role: request.body.role,
      description: request.body.description
    };
  
    console.log(profileDetails);
  
    console.log("Role: " + profileDetails.role);
    console.log("Description: " + profileDetails.description);
  
    var sql = "INSERT INTO poppinpass.userprofile (`role`, description) VALUES (?, ?)";
  
    db.query(sql, [profileDetails.role, profileDetails.description], function (error, result) {
      console.log(result);
  
      if (error) {
        respond.json({
          message: 'Something went wrong',
          error,
        });
      } else {
        respond.json(result);
      }
    });
  } 

  viewAllUserProfile(request, respond) {
    var sql = "SELECT * FROM poppinpass.userprofile";
  
    db.query(sql, function (error, result) {
      if (error) {
        respond.json(error);
      } else {
        respond.json(result);
      }
    });
  }
  

  updateUserProfile(request, respond) {
    var UPDetails = {
      "_id": parseInt(request.params._id),
      "role": request.body.role,
      "description": request.body.description
    }
  
    var sql = "UPDATE poppinpass.userprofile SET `role` = ?, description = ? WHERE _id = ?";
  
    db.query(sql, [UPDetails.role, UPDetails.description, UPDetails._id], function (error, result) {
      if (error) {
        respond.json(error);
        console.log(error);
      } else {
        respond.json(result);
        console.log(UPDetails);
      }
    });
  }

  suspendedUserProfile(request, respond) {
    var AccountDetails = {
      "_id": parseInt(request.params._id),
    };
  
    var sql = "DELETE FROM userprofile WHERE _id = ?";
  
    db.query(sql, [AccountDetails._id], function(error, result) {
      if (error) {
        respond.json(error);
        console.log(error);
      } else {
        respond.json(result);
        console.log(AccountDetails);
      }
    });
  }
  

}
const userprofile = new UserProfile;
module.exports = UserProfile;