"use strict"

const ScreenTime = require('./../project/Entity/ScreenTime');
const screentime = new ScreenTime();

class ScreenTimeRoutes{

    screentimeRoutes(app) {
        app.route('/screentime')
        .get(screentime.viewAllScreenTime)
        .post(screentime.addScreenTime);

        app.route("/screentime/:_id")
        .put(screentime.updateScreenTime)
        .delete(screentime.suspendScreenTime);
    }

}

module.exports =  ScreenTimeRoutes;