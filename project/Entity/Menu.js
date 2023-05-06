var db = require('./../../dbconnection');

class Menu{
    // Create Food Menu
    addMenuTable(menu, callback){

        console.log("Image: "+ menu.image);
        console.log("Name: "+ menu.name);
        console.log("Type: "+ menu.type);
        console.log("Small: $"+ menu.smallprice);
        console.log("Medium: $"+ menu.mediumprice);
        console.log("Large: $"+ menu.largeprice);
        var sql = "INSERT INTO poppinpass.menu (image, name, type, smallprice, mediumprice, largeprice, availability) VALUES (?, ?, ?, ?, ?, ?, 'active')";
        
        db.query(sql, [menu.image,menu.name,menu.type,menu.smallprice,menu.mediumprice,menu.largeprice], callback);
    }

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
    
        menu.addMenuTable(menudata, (error, result) => {
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
    viewAllMenuTable(callback) {
        var sql = "SELECT * FROM poppinpass.menu";
        return db.query(sql, callback);
    }

    viewAllMenu(request, respond) {
        menu.viewAllMenuTable((error, result) => {
          if (error) {
            respond.json(error);
          } else {
            respond.json(result);
          }
        });
      }

    // update food Menu
    updatemenuTable(menu, callback){
        var sql = "UPDATE poppinpass.menu SET image = ?, name = ?, `type` = ?, smallprice = ?, mediumprice = ?, largeprice = ?, `availability` = ? WHERE _id = ?";

        return db.query(sql, [menu.image,menu.name,menu.type,menu.smallprice,menu.mediumprice,menu.largeprice, menu.availability, menu._id], callback);
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
    
          menu.updatemenuTable(menuDetails, function(error, result){
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