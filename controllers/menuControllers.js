'use strict';
const MenuDB = require('../entity/Menu');
const menuDB = new MenuDB();

class MenuController {

  addMenu(request, respond) {
    const menudata = {
        image: request.body.image,
        name: request.body.name,
        type: request.body.type,
        smallprice: request.body.smallprice,
        mediumprice: request.body.mediumprice,
        largeprice: request.body.largeprice

    };

    console.log(menudata);

    menuDB.addMenu(menudata, (error, result) => {
      console.log(result);

      if (error) {
        respond.json({
          message: 'Something went wrong',
          error,
        });
      } else {
        respond.json(result);
      }
    });
  }

  getAllMenu(request, respond) {
    menuDB.getAllMenu((error, result) => {
      if (error) {
        respond.json(error);
      } else {
        respond.json(result);
      }
    });
  }
 
  updateMenu(request, respond) {
    var menuDetails = {
        "_id": parseInt(request.params._id),
        "image":request.body.image,
        "name":request.body.name,
        "type":request.body.type,
        "smallprice":request.body.smallprice,
        "mediumprice":request.body.mediumprice,
        "largeprice":request.body.largeprice,
        "availability":request.body.availability

      }

      menuDB.updatemenu(menuDetails, function(error, result){
        if (error) {
            respond.json(error);
            console.log(error);
        } else {
            respond.json(result);
            console.log(menuDetails);
        }
    });
}
}

module.exports = MenuController;