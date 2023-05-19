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
        .get(th.generateMonthlyTicket);

    app.route("/ticketweekly")
        .get(th.generateWeeklyTicket);

    app.route("/ticketdaily")
        .get(th.generateDailyTicket);

    app.route("/foodmonthly")
        .get(th.generateMonthlyFood);

    app.route("/foodweekly")
        .get(th.generateWeeklyFood);

    app.route("/fooddaily")
        .get(th.generateDailyFood);

    app.route("/viewyearlyticket")
        .get(th.viewYearlyTickets);
        
    app.route("/viewyearlyfood")
        .get(th.viewYearlyFood);

    }
}

module.exports =  HistoryRoutes;