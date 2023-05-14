"use strict"

const ScreenTime = require('./../project/Entity/ScreenTime');
const screentime = new ScreenTime();

class ScreenTimeRoutes{

    screentimeRoutes(app) {
        app.route('/screentimes')
        .get(screentime.viewAllScreenTime)
        .post(screentime.addScreenTime);

        app.route("/screentime/:_id")
        .put(screentime.updateScreenTime)
        .delete(screentime.suspendScreenTime);

        //THIS ROUTE IS FOR WHEN CUST WANTS TO VIEW SCREENTIME OF A CERTAIN MOVIE
        app.route('/screentiming')
        .post(screentime.viewCertainScreenTime);
    }

}

module.exports =  ScreenTimeRoutes;