var db = require('./../../dbconnection');

class Menu{

  searchMenu(request, respond) {

    const searchDetails = {
      search: request.body.search
    };

    var sql = "SELECT * FROM poppinpass.menu WHERE name LIKE ?;";
  
    db.query(sql, [searchDetails.search], function (error, result) {
      console.log("result: " + result);
  
      if (error) {
        respond.json(error);
      } else {
        respond.json(result);
      }
    });
  }


    // Create Food Menu
    addMenu(request, respond) {
      const menudata = {
        image: request.body.image,
        name: request.body.name,
        type: request.body.type,
        smallprice: request.body.smallprice,
        mediumprice: request.body.mediumprice,
        largeprice: request.body.largeprice
      };
    
      console.log("Image: " + menudata.image);
      console.log("Name: " + menudata.name);
      console.log("Type: " + menudata.type);
      console.log("Small: $" + menudata.smallprice);
      console.log("Medium: $" + menudata.mediumprice);
      console.log("Large: $" + menudata.largeprice);
    
      var sql = "INSERT INTO poppinpass.menu (image, name, type, smallprice, mediumprice, largeprice, availability) VALUES (?, ?, ?, ?, ?, ?, 'active')";
    
      db.query(sql, [menudata.image, menudata.name, menudata.type, menudata.smallprice, menudata.mediumprice, menudata.largeprice], function(error, result) {
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
    

    // view Food Menu
    viewAllMenu(request, respond) {
      var sql = "SELECT * FROM poppinpass.menu";
    
      db.query(sql, function(error, result) {
        if (error) {
          respond.json(error);
        } else {
          respond.json(result);
        }
      });
    }
    

    // update food Menu
    updateMenu(request, respond) {
      var menuDetails = {
        "_id": parseInt(request.params._id),
        "image": request.body.image,
        "name": request.body.name,
        "type": request.body.type,
        "smallprice": request.body.smallprice,
        "mediumprice": request.body.mediumprice,
        "largeprice": request.body.largeprice,
        "availability": request.body.availability
      };
    
      var sql = "UPDATE poppinpass.menu SET image = ?, name = ?, `type` = ?, smallprice = ?, mediumprice = ?, largeprice = ?, `availability` = ? WHERE _id = ?";
    
      db.query(sql, [menuDetails.image, menuDetails.name, menuDetails.type, menuDetails.smallprice, menuDetails.mediumprice, menuDetails.largeprice, menuDetails.availability, menuDetails._id], function(error, result) {
        if (error) {
          respond.json(error);
          console.log(error);
        } else {
          respond.json(result);
          console.log(menuDetails);
        }
      });
    }
    

    // Update Suspend
    suspendedMenu(request, respond) {
      var menuDetails = {
        "_id": parseInt(request.params._id),
        "availability": request.body.availability
      };
    
      var sql = "UPDATE poppinpass.menu SET `availability` = ? WHERE _id = ?";
    
      db.query(sql, [menuDetails.availability, menuDetails._id], function(error, result) {
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
const menu = new Menu;
module.exports = Menu;