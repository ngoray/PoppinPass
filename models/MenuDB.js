var db = require('../dbconnection');

class MenuDB{

    addMenu(menu, callback){

        console.log("Image: "+ menu.image);
        console.log("Name: "+ menu.name);
        console.log("Type: "+ menu.type);
        console.log("Small: $"+ menu.smallprice);
        console.log("Medium: $"+ menu.mediumprice);
        console.log("Large: $"+ menu.largeprice);
        var sql = "INSERT INTO poppinpass.menu (image, name, type, smallprice, mediumprice, largeprice, availability) VALUES (?, ?, ?, ?, ?, ?, 'active')";
        
        db.query(sql, [menu.image,menu.name,menu.type,menu.smallprice,menu.mediumprice,menu.largeprice], callback);
    }

    getAllMenu(callback) {
        var sql = "SELECT * FROM poppinpass.menu";
        return db.query(sql, callback);
    }

    updatemenu(menu, callback){
        var sql = "UPDATE poppinpass.menu SET image = ?, name = ?, `type` = ?, smallprice = ?, mediumprice = ?, largeprice = ?, `availability` = ? WHERE _id = ?";

        return db.query(sql, [menu.image,menu.name,menu.type,menu.smallprice,menu.mediumprice,menu.largeprice, menu.availability, menu._id], callback);
    }
}
module.exports = MenuDB;