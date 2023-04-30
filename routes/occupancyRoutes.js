"use strict"

const OccupancyController = require('../controllers/occupancyControllers');
const occupancyController = new OccupancyController();

class OccupancyRoutes{

    occupancyRoutes(app) {
        app.route('/occupancy')
        .get(occupancyController.getAllOccu)
        .post(occupancyController.addOccu);

        app.route("/occupancy/:_id")
        .put(occupancyController.updateOccu);
    }

}

module.exports =  OccupancyRoutes;