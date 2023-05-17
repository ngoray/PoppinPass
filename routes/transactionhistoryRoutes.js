"use strict"

const TH = require('./../project/Entity/Transaction');
const th = new TH();


class HistoryRoutes {

    HistoryRoute(app) {
    app.route("/history")
        .post(th.addTransaction);
    
    app.route("/viewhistory")
        .post(th.viewTransaction);

    app.route("/ticketmonthly")
        .get(th.viewMonthlyTicket);

    app.route("/ticketweekly")
        .get(th.viewWeeklyTicket);

    app.route("/ticketdaily")
        .get(th.viewDailyTicket);

    app.route("/foodmonthly")
        .get(th.viewMonthlyFood);

    app.route("/foodweekly")
        .get(th.viewWeeklyFood);

    app.route("/fooddaily")
        .get(th.viewDailyFood);

    }
}

module.exports =  HistoryRoutes;