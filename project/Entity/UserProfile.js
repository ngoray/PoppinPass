var db = require('./../../dbconnection');

class UserProfile{

  searchUserProfileTable(userprofile,callback){
    var sql = "SELECT * FROM poppinpass.userprofile WHERE role LIKE ?;"

    return db.query(sql, [userprofile.search], callback);

  }

  searchUserProfile(request, respond){
    console.log("THIS IS IN SEARCH PARAMS: "+ request.body.search)
    const searchDetails = {
      search: request.body.search
    };

    console.log("deets: "+ JSON.stringify(searchDetails));

    userprofile.searchUserProfileTable(searchDetails, (error, result) => {
      console.log("result: "+ result);

      if (error) {
        respond.json(error);
    } else {
        respond.json(result);
    }
    });
  }


    addUserProfileTable(userprofile, callback){

        console.log("Role: "+ userprofile.role);
        console.log("Description: "+ userprofile.description);
        var sql = "INSERT INTO poppinpass.userprofile (`role`, description) VALUES (?, ?)";
        
        db.query(sql, [userprofile.role, userprofile.description], callback);
    }

    addingUserProfile(request, respond) {
        const profileDetails = {
          role: request.body.role,
          description: request.body.description
    
        };
    
        console.log(profileDetails);
    
        userprofile.addUserProfileTable(profileDetails, (error, result) => {
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

      viewAllUserProfileTable(callback) {
        var sql = "SELECT * FROM poppinpass.userprofile";

        return db.query(sql, callback);
      }

      viewAllUserProfile(request, respond) {
        userprofile.viewAllUserProfileTable(function (error, result){
            if (error) {
                respond.json(error);
            } else {
                respond.json(result);
            }
        });
    }

    updateUserProfileTable(occupancy, callback) {
      var sql = "UPDATE poppinpass.userprofile SET `role` = ?, description = ? WHERE _id = ?";
  
      return db.query(sql, [occupancy.role, occupancy.description, occupancy._id], callback);
  }

  updateUserProfile(request, respond) {
    var UPDetails = {
        "_id": parseInt(request.params._id),
        "role":request.body.role,
        "description":request.body.description
      }

      userprofile.updateUserProfileTable(UPDetails, function(error, result){
        if (error) {
            respond.json(error);
            console.log(error);
        } else {
            respond.json(result);
            console.log(UPDetails);
        }
    });
}

}
const userprofile = new UserProfile;
module.exports = UserProfile;