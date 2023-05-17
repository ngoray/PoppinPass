"use strict"

const UserAccount = require('./../project/Entity/UserAccount');
const useraccount = new UserAccount();

class UserAccountRoutes{

    useraccountRoutes(app) {
        app.route('/useraccount')
        .get(useraccount.viewAllUserAccount)
        .post(useraccount.addUserAccount);

        app.route("/useraccount/:_id")
        .put(useraccount.updateUserAccount);

        app.route('/login')
        .post(useraccount.login);

        app.route("/updatelp/:name")
        .put(useraccount.updateLoyaltyPoints);

        app.route("/updatePassword/:name")
        .put(useraccount.updateCustomerAccount);
    }

}

module.exports =  UserAccountRoutes;