"use strict"

const corpControllers = require('../controllers/corpControllers');

function routecorp(app) {

    app.route('/stafflogin')
    .post(corpControllers.login);

    app.route('/staff')
    .get(corpControllers.getAllStaff);

}

module.exports =  {routecorp};