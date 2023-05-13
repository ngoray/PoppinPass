class Menu {
    constructor(menuUrl,newmenuUrl) {
        this.menuUrl = menuUrl;
        this.newmenuUrl = newmenuUrl;
        this.menu_array = [];
        this.Snacks = "Snacks";
        this.Drinks = "Drinks";
        this.Combo = "Combo";
    }

    newMenu()
    {
        var name = document.getElementById("createMenuName").value;
        var picname = document.getElementById("picname1").value;
        var type = document.getElementById("createMenuType").value;
        var smol = document.getElementById("createMenuSmallPrice").value;
        var med = document.getElementById("createMenuMediumPrice").value;
        var large = document.getElementById("createMenuLargePrice").value;

        const menuData = {
            "name":name,
            "image":picname,
            "type": type,
            "smallprice":smol,
            "mediumprice":med,
            "largeprice":large

        }

        console.log("menuData: "+ JSON.stringify(menuData));
        const addMenu = new XMLHttpRequest();
        addMenu.open('POST', this.menuUrl, true);
        addMenu.setRequestHeader("Content-Type", "application/json");
        addMenu.onload = function() {
            const output = JSON.parse(addMenu.responseText);
            alert("Item added!");
            document.getElementById("createMenuName").value = "";
            document.getElementById("picname").value = "";
            document.getElementById("createMenuType").value = "";
            document.getElementById("createMenuSmallPrice").value = "";
            document.getElementById("createMenuMediumPrice").value = "";
            document.getElementById("createMenuLargePrice").value = "";
            document.getElementById("output1").src = "#";
            document.getElementById("createMenutable").style.display ="none";

            document.getElementById("manageFoodBeveragesTicket").style.display="none";

            mFoodBeveragesTicket();
        };
        addMenu.send(JSON.stringify(menuData));

    }

    fetchMenu()
    {
        const menuRequest = new XMLHttpRequest();
        menuRequest.open('GET', this.menuUrl, true);
        console.log(menuRequest);

        menuRequest.onload = () => {
            this.menu_array = JSON.parse(menuRequest.responseText);
            console.log(this.menuarray);
            this.displayMenu();
        };
        menuRequest.send();
    }

    displayMenu(){
        const table = document.getElementById("getMenu");
        let menuCount = 0;
        let message = "";
        table.innerHTML = "";
        const totalmenu = this.menu_array.length;

        for (let count = 0; count < totalmenu; count++)
        {
            const id = this.menu_array[count]._id;
            const image = this.menu_array[count].image;
            const name = this.menu_array[count].name;
            const smol = this.menu_array[count].smallprice;
            const med = this.menu_array[count].mediumprice;
            const large = this.menu_array[count].largeprice;
            const availability = this.menu_array[count].availability;
            const cell ='<td width="20%">\
                            <img src="./../images/menu/'+image+'" width="100px" height="70px">\
                        </td>\
                        <td>\
                            <label id="Menu_id" style="display:none;">'+id+'</label>\
                            <a>'+name+'</a>\
                        </td>\
                        <td>\
                                <label>'+availability+'</label>\
                                <label id="suspendMenu" style="display:none;">suspended</label>\
                        </td>\
                        <td width="10%">\
                            <button item = '+count+' style="background-color:#333333a0;" onclick="menu.showMenuDetails(this)">\
                                <img src="./../images/edit.png" width="30px" height="30px">\
                                <button item = '+count+' style="background-color:#333333a0;" onclick="menu.suspendMenu(this)">\
                                <img src="./../images/delete.png" width="30px" height="30px">\
                        </td>'

            table.insertAdjacentHTML("beforeend", cell);
            menuCount++;
        }

    }

    showMenuDetails(element){
        console.log(this.menu_array);
        var item = element.getAttribute("item");
        console.log(item);
        var id = this.menu_array[item]._id;

        var img = document.getElementById("updateOutput1");

        // document.getElementById("managerMenu").style.display ="none";

        document.getElementById("updateMenutable").style.display ="block";
        img.src = "./../images/menu/" + this.menu_array[item].image;
        document.getElementById("editmenu_id").value = this.menu_array[item]._id;
        document.getElementById("updateMenuName").value = this.menu_array[item].name;
        document.getElementById("updateMenuType").value = this.menu_array[item].type;
        document.getElementById("updatePicname1").value = this.menu_array[item].image;
        document.getElementById("updateMenuSmallPrice").value =this.menu_array[item].smallprice;
        document.getElementById("updateMenuMediumPrice").value =this.menu_array[item].mediumprice;
        document.getElementById("updateMenuLargePrice").value =this.menu_array[item].largeprice;
        document.getElementById("updateAvailability").value = this.menu_array[item].availability;
    }   

    updateMenu(currentIndex){
    var id = parseInt(document.getElementById("editmenu_id").value);
    var currentIndex = -1;
    for (var i = 0; i < this.menu_array.length; i++) {
        if (id == this.menu_array[i]._id) {   
        currentIndex = i;
        break; // Exit the loop once a match is found
     }
    }
    const edit_menu_url = this.menuUrl + "/" + id;
    const response = confirm("Are you sure you want to edit your information?");

    const name = document.getElementById("updateMenuName").value;
    const img = document.getElementById("updatePicname1").value;
    const type = document.getElementById("updateMenuType").value;
    const smol = document.getElementById("updateMenuSmallPrice").value;
    const med = document.getElementById("updateMenuMediumPrice").value;
    const large = document.getElementById("updateMenuLargePrice").value;
    const avail = document.getElementById("updateAvailability").value;

    const editedmenu = {
        _id: id,
        name: name,
        image: img,
        type: type,
        smallprice: smol,
        mediumprice: med,
        largeprice: large,
        availability: avail
      };

      if (response == true) {
        const updateMenu = new XMLHttpRequest();
        updateMenu.open("PUT", edit_menu_url, true);
        updateMenu.setRequestHeader("Content-Type", "application/json");

        this.menu_array[currentIndex].name = name;
        this.menu_array[currentIndex].image= img;
        this.menu_array[currentIndex].type = type;
        this.menu_array[currentIndex].smallprice = smol;
        this.menu_array[currentIndex].mediumprice = med;
        this.menu_array[currentIndex].largeprice = large;
        this.menu_array[currentIndex].availability = avail;

        updateMenu.onload = function () {
            alert("The menu information has been edited, please switch to other tab to refresh");
            document.getElementById("updateMenutable").style.display ="none";
            document.getElementById("manageFoodBeveragesTicket").style.display="none";
            mFoodBeveragesTicket();
        };

        
        updateMenu.send(JSON.stringify(editedmenu));
        }
    }

    suspendMenu(element){
        var item = element.getAttribute("item");
        var id = this.menu_array[item]._id;

        const suspend_menu_url = this.newmenuUrl + "/" + id;
        const response = confirm("Are you sure you want to suspend this menu?");
        const avail = document.getElementById("suspendMenu").innerHTML;
        console.log(suspend_menu_url);

        const suspendmenu = {
            _id: id,
            availability: avail
          };
 
          if (response == true) {
            const suspendMenu = new XMLHttpRequest();
            suspendMenu.open("PUT", suspend_menu_url, true);
            suspendMenu.setRequestHeader("Content-Type", "application/json");

            this.menu_array[item].availability = avail;
            
            suspendMenu.onload = function () {
                alert("The menu has been suspended");
                document.getElementById("manageFoodBeveragesTicket").style.display="none";
                mFoodBeveragesTicket();
            };

            suspendMenu.send(JSON.stringify(suspendmenu));
        }
    }

    

    openAddMenuModal() {
        document.getElementById("createMenutable").style.display ="block";
    }

    closeAddMenuModal() {
        document.getElementById("createMenutable").style.display ="none";
    }

// Create Menu Display for Customer

// This method calls the movies api and gets all the movies that are showing in Shaw Theatres for Showing Now and Coming Soon
getDrinks() {
    const request = new XMLHttpRequest();
    request.open("GET", this.menuUrl, true);
        
    // This function will be called when data returns from the web api
    request.onload = () => {
        // Get all the movies records into our movie array
        this.menu_array = JSON.parse(request.responseText);
        
        // Call the function to display all movies tiles for "Now Showing"
        menu.displayDrinks(this.Drinks);
    };
        
    // This command starts the calling of the movies web api
    request.send();
}
displayDrinks(Drinks) {
        const table = document.getElementById("drinksmenu");
        let drinkCount = 0;
        
        table.innerHTML = "";
        const totalMenu = this.menu_array.length;
        
        for (let count = 0; count < totalMenu; count++) {
            if (this.menu_array[count].type === Drinks) {
            const image = "./../images/menu/" + this.menu_array[count].image;
            const name = this.menu_array[count].name;
            const smallprice = this.menu_array[count].smallprice;
            const mediumprice = this.menu_array[count].mediumprice;
            const largeprice = this.menu_array[count].largeprice;
        
            const cell =
                  ' <td>\
                  <img src="'+image+'" style="margin:10px 25px;width: 450px; height: 300px;">\
                  <table class="centerTable" style="width: 450px;">\
                      <tr>\
                          <td colspan="3">\
                              <center><h2 id="product-name">'+name+'</h2></center>\
                          </td>\
                      </tr>\
                      <tr>\
                          <td><h3>Small: </h3></td>\
                          <td><label>$</label><label id="product-price">'+smallprice+'</label></td>\
                          <td>\
                          <button onclick="check4Login()" class="smartbtn" item = '+count+' style="background-color:#333333a0;float: right;">\
                              <img src="./../images/addcart.png" style="width: 40px; height: 40px;">\
                          </button>\
                        </td>\
                      </tr>\
                      <tr>\
                          <td><h3>Medium: </h3></td>\
                          <td><label>$</label><label>'+mediumprice+'</label></td>\
                          <td>\
                          <button onclick="check4Login()" class="smartbtn" item = '+count+' style="background-color:#333333a0;float: right;">\
                              <img src="./../images/addcart.png" style="width: 40px; height: 40px;">\
                          </button>\
                        </td>\
                      </tr>\
                      <tr>\
                          <td><h3>Large: </h3></td>\
                          <td><label>$</label><label>'+largeprice+'</label></td>\
                          <td>\
                          <button onclick="check4Login()" class="smartbtn" item = '+count+' style="background-color:#333333a0;float: right;">\
                              <img src="./../images/addcart.png" style="width: 40px; height: 40px;">\
                          </button>\
                        </td>\
                      </tr>\
                  </table>\
              </td>';
        
                table.insertAdjacentHTML("beforeend", cell);
                drinkCount++;
              }
            }
}

getSnacks() {
    const request = new XMLHttpRequest();
    request.open("GET", this.menuUrl, true);
        
    // This function will be called when data returns from the web api
    request.onload = () => {
        // Get all the movies records into our movie array
        this.menu_array = JSON.parse(request.responseText);
        
        // Call the function to display all movies tiles for "Now Showing"
        menu.displaySnacks(this.Snacks);
    };
        
    // This command starts the calling of the movies web api
    request.send();
}
displaySnacks(Snacks) {
        const table = document.getElementById("snacksmenu");
        let drinkCount = 0;
        
        table.innerHTML = "";
        const totalMenu = this.menu_array.length;
        
        for (let count = 0; count < totalMenu; count++) {
            if (this.menu_array[count].type === Snacks) {
            const image = "./../images/menu/" + this.menu_array[count].image;
            const name = this.menu_array[count].name;
            const smallprice = this.menu_array[count].smallprice;
            const mediumprice = this.menu_array[count].mediumprice;
            const largeprice = this.menu_array[count].largeprice;
        
            const cell =
                  ' <td>\
                  <img src="'+image+'" style="margin:10px 25px;width: 450px; height: 300px;">\
                  <table class="centerTable" style="width: 450px;">\
                      <tr>\
                          <td colspan="3">\
                              <center><h2>'+name+'</h2></center>\
                          </td>\
                      </tr>\
                      <tr>\
                          <td><h3>Small: </h3></td>\
                          <td><label>$</label><label>'+smallprice+'</label></td>\
                          <td>\
                            <button onclick="check4Login()" item = '+count+' style="background-color:#333333a0;float: right;">\
                                <img src="./../images/addcart.png" style="float: right; width: 40px; height: 40px;">\
                            </button>\
                          </td>\
                      </tr>\
                      <tr>\
                          <td><h3>Medium: </h3></td>\
                          <td><label>$</label><label>'+mediumprice+'</label></td>\
                          <td>\
                            <button onclick="check4Login()" item = '+count+' style="background-color:#333333a0; float: right;">\
                                <img src="./../images/addcart.png" style="width: 40px; height: 40px;">\
                            </button>\
                          </td>\
                      </tr>\
                      <tr>\
                          <td><h3>Large: </h3></td>\
                          <td><label>$</label><label>'+largeprice+'</label></td>\
                          <td>\
                            <button onclick="check4Login()" item = '+count+' style="background-color:#333333a0; float: right;">\
                                <img src="./../images/addcart.png" style="float: right; width: 40px; height: 40px;">\
                            </button>\
                          </td>\
                      </tr>\
                  </table>\
              </td>';
        
                table.insertAdjacentHTML("beforeend", cell);
                drinkCount++;
              }
            }
}


getCombo() {
    const request = new XMLHttpRequest();
    request.open("GET", this.menuUrl, true);
        
    // This function will be called when data returns from the web api
    request.onload = () => {
        // Get all the movies records into our movie array
        this.menu_array = JSON.parse(request.responseText);
        
        // Call the function to display all movies tiles for "Now Showing"
        menu.displayCombo(this.Combo);
    };
        
    // This command starts the calling of the movies web api
    request.send();
}
displayCombo(Combo) {
        const table = document.getElementById("combomenu");
        let drinkCount = 0;
        
        table.innerHTML = "";
        const totalMenu = this.menu_array.length;
        
        for (let count = 0; count < totalMenu; count++) {
            if (this.menu_array[count].type === Combo) {
            const image = "./../images/menu/" + this.menu_array[count].image;
            const name = this.menu_array[count].name;
            const smallprice = this.menu_array[count].smallprice;
            const mediumprice = this.menu_array[count].mediumprice;
            const largeprice = this.menu_array[count].largeprice;
        
            const cell =
                  ' <td>\
                  <img src="'+image+'" style="margin:10px 25px;width: 450px; height: 300px;">\
                  <table class="centerTable" style="width: 450px;">\
                      <tr>\
                          <td colspan="3">\
                              <center><h2>'+name+'</h2></center>\
                          </td>\
                      </tr>\
                      <tr>\
                          <td><h3>Small: </h3></td>\
                          <td><label>$</label><label>'+smallprice+'</label></td>\
                          <td>\
                            <button onclick="check4Login()" item = '+count+' style="background-color:#333333a0;float: right;">\
                                <img src="./../images/addcart.png" style="right; width: 40px; height: 40px;">\
                            </button>\
                          </td>\
                      </tr>\
                      <tr>\
                          <td><h3>Medium: </h3></td>\
                          <td><label>$</label><label>'+mediumprice+'</label></td>\
                          <td>\
                          <button onclick="check4Login()" item = '+count+' style="background-color:#333333a0;float: right;">\
                              <img src="./../images/addcart.png" style="width: 40px; height: 40px;">\
                          </button>\
                        </td>\
                      </tr>\
                      <tr>\
                          <td><h3>Large: </h3></td>\
                          <td><label>$</label><label>'+largeprice+'</label></td>\
                          <td>\
                            <button onclick="check4Login()" item = '+count+' style="background-color:#333333a0;float: right;">\
                                <img src="./../images/addcart.png" style="width: 40px; height: 40px;">\
                            </button>\
                          </td>\
                      </tr>\
                  </table>\
              </td>';
        
                table.insertAdjacentHTML("beforeend", cell);
                drinkCount++;
              }
            }
}
    
}

const menu = new Menu("/menu","/suspendmenu");