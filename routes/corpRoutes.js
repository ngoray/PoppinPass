"use strict"

const corpControllers = require('../controllers/corpControllers');

function routecorp(app) {

    app.route('/staff')
    .get(corpControllers.getAllStaff)
    .post(corpControllers.login);

    app.route('/staff/:_id')
    .put(corpControllers.updateStaff);

}

module.exports =  {routecorp};