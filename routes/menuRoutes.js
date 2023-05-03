"use strict"

const MenuController = require('../controllers/menuControllers');
const menuController = new MenuController();

class MenuRoutes{

    menuRoutes(app) {
        app.route('/menu')
        .get(menuController.getAllMenu)
        .post(menuController.addMenu);

        app.route("/menu/:_id")
        .put(menuController.updateMenu);
    }

}

module.exports =  MenuRoutes;