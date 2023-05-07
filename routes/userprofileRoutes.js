"use strict"

const UserProfile = require('./../project/Entity/UserProfile');
const userProfile = new UserProfile();

class UserProfileRoutes{

    userprofileRoutes(app) {
        app.route('/userprofile')
        .post(userProfile.addingUserProfile)
        .get(userProfile.viewAllUserProfile);

        app.route("/userprofile/:_id")
        .put(userProfile.updateUserProfile);
    }


}

module.exports =  UserProfileRoutes;