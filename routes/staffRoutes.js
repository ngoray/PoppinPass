const staffControllers = require('../controllers/staffControllers');
const staffcontroller = new staffControllers();

"use strict";

class StaffRoutes {

    StaffRoute(app) {
    app.route("/staff")
        .get(staffcontroller.getAllStaff)
        .post(staffcontroller.login);

    app.route("/staff/:_id")
        .put(staffcontroller.updateStaff);
  }
}

module.exports =  StaffRoutes ;
