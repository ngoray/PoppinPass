"use strict"

const Occupancy = require('./../project/Entity/Occupancy');
const occupancy = new Occupancy();

class OccupancyRoutes{

    occupancyRoutes(app) {
        app.route('/occupancy')
        .get(occupancy.viewAllOccu)
        .post(occupancy.addOccu);

        app.route("/occupancy/:_id")
        .put(occupancy.updateOccu);
    }

}

module.exports =  OccupancyRoutes;