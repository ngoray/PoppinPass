"use strict"

const SmController = require('../controllers/seatMapControllers');
const smController = new SmController();

class SmRoutes{

    smRoutes(app) {
        app.route('/seatmap')
        .get(smController.getAllSM)
        .post(smController.addSM);

        app.route("/seatmap/:_id")
        .put(smController.updateSM);
    }

}

module.exports =  SmRoutes;