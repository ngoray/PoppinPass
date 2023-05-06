var db = require('./../../dbconnection');

class UserProfile{

    addUserProfileDB(userprofile, callback){

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
    
        userprofile.addUserProfileDB(profileDetails, (error, result) => {
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

      viewAllUserProfileDB(callback) {
        var sql = "SELECT * FROM poppinpass.userprofile";

        return db.query(sql, callback);
      }

      viewAllUserProfile(request, respond) {
        userprofile.viewAllUserProfileDB(function (error, result){
            if (error) {
                respond.json(error);
            } else {
                respond.json(result);
            }
        });
    }

    updateUserProfileDB(occupancy, callback) {
      var sql = "UPDATE poppinpass.userprofile SET `role` = ?, description = ? WHERE _id = ?";
  
      return db.query(sql, [occupancy.role, occupancy.description, occupancy._id], callback);
  }

  updateUserProfile(request, respond) {
    var UPDetails = {
        "_id": parseInt(request.params._id),
        "role":request.body.role,
        "description":request.body.description
      }

      userprofile.updateUserProfileDB(UPDetails, function(error, result){
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