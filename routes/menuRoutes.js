"use strict"

const Menu = require('./../project/Entity/Menu');
const menu = new Menu();

class MenuRoutes{

    menuRoutes(app) {
        app.route('/menu')
        .get(menu.viewAllMenu)
        .post(menu.addMenu);

        app.route("/menu/:_id")
        .put(menu.updateMenu);
    }

}

module.exports =  MenuRoutes;