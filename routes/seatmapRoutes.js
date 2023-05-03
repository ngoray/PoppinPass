"use strict"

const SmController = require('../controllers/seatMapControllers');
const smController = new SmController();

class SmRoutes{

    smRoutes(app) {
        app.route('/seatmap')
        .post(smController.getSomeSM);
        

        app.route("/seatmap/:_id")
        .put(smController.updateSM)
        .delete(smController.deleteSM);

        app.route('/seatmaps')
        .post(smController.addSM);
    }

}

module.exports =  SmRoutes;