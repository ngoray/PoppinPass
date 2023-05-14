"use strict"

const Sm = require('./../project/Entity/seatMap');
const sm = new Sm();

class SmRoutes{

    smRoutes(app) {
        app.route('/seatmap')
        .post(sm.getSomeSM);
        

        app.route("/seatmap/:_id")
        .put(sm.bookedSM)
        .delete(sm.deleteSM);

        app.route('/seatmaps')
        .post(sm.addSM);

        app.route("/smbooking")
        .post(sm.getUnbookedSM);
    }

}

module.exports =  SmRoutes;