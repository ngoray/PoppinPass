"use strict"

const corpControllers = require('../controllers/corpController');

function routecorp(app) {

    app.route('/stafflogin')
    .post(corpControllers.login);

}

module.exports =  {routecorp};