"use strict"

const CustomerControllers = require('../controllers/customerControllers');
const customerControllers = new CustomerControllers();

class CustomerRoutes{

    routeMember(app) {
        app.route('/signup')
        .post(customerControllers.register);
    
        app.route('/login')
        .post(customerControllers.login);
    
        app.route('/user/:_id')
        .put(customerControllers.updateUser)
        .delete(customerControllers.deleteUser);
    
        app.route('/user')
        .get(customerControllers.getAllUsers);
    }
    
}

module.exports =  CustomerRoutes;