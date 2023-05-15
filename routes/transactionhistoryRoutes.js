"use strict"

const TH = require('./../project/Entity/Transaction');
const th = new TH();


class HistoryRoutes {

    HistoryRoute(app) {
    app.route("/history")
        .post(th.addTransaction);
    
    app.route("/viewhistory")
        .post(th.viewTransaction);

    }
}

module.exports =  HistoryRoutes;