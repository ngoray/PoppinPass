const staffControllers = require('../controllers/staffControllers');
const staffcontroller = new staffControllers();

"use strict";

class StaffRoutes {

    StaffRoute(app) {
    app.route("/staff")
        .get(staffcontroller.getAllStaff)
        .post(staffcontroller.loginStaff);

    app.route("/staff/:_id")
        .put(staffcontroller.updateStaff);

    app.route("/newstaff")
        .post(staffcontroller.createStaff);
  }
}

module.exports =  StaffRoutes ;
