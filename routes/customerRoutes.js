"use strict"

const customerControllers = require('../controllers/customerControllers');

function routeMember(app) {
    app.route('/signup')
    .post(customerControllers.register)
    .get(customerControllers.getAllUsers);

    app.route('/login')
    .post(customerControllers.login)

    app.route('/signup/:_id')
    .put(customerControllers.updateUser)
    .delete(customerControllers.deleteUser);

}

module.exports =  {routeMember};