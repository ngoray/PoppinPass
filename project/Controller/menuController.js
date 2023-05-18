let menu_array = [];

class Menu {
    constructor(menuUrl,newmenuUrl) {
        this.menuUrl = menuUrl;
        this.newmenuUrl = newmenuUrl;
        this.menu_array = [];
        this.Snacks = "Snacks";
        this.Drinks = "Drinks";
        this.Combo = "Combo";
        this.cartTotalSpan = document.getElementById('cart-total');
        this.cartModal = document.getElementById('cart-modal');
        this.cartItems = [];
    }

    showMenuDetails(element){
        console.log(menu_array);
        var item = element.getAttribute("item");
        console.log(item);
        var id = menu_array[item]._id;

        var img = document.getElementById("updateOutput1");

        // document.getElementById("managerMenu").style.display ="none";

        document.getElementById("updateMenutable").style.display ="block";
        img.src = "./../images/menu/" + menu_array[item].image;
        document.getElementById("editmenu_id").value = menu_array[item]._id;
        document.getElementById("updateMenuName").value = menu_array[item].name;
        document.getElementById("updateMenuType").value = menu_array[item].type;
        document.getElementById("updatePicname1").value = menu_array[item].image;
        document.getElementById("updateMenuSmallPrice").value =menu_array[item].smallprice;
        document.getElementById("updateMenuMediumPrice").value =menu_array[item].mediumprice;
        document.getElementById("updateMenuLargePrice").value =menu_array[item].largeprice;
        document.getElementById("updateAvailability").value = menu_array[item].availability;
    }   

    openAddMenuModal() {
        document.getElementById("createMenutable").style.display ="block";
    }

    closeAddMenuModal() {
        document.getElementById("createMenutable").style.display ="none";
    }

    add2sum(event){
        var button = event.target;
           console.log(button);
           var totalprice = document.getElementById("summaryPrice").innerHTML;
           console.log("totalprice: "+ totalprice);
           var intValue = parseInt(totalprice.substring(1));
           console.log("totalprice: "+ intValue);
   
           var productArr = button.getAttribute("item2");
   
           var productPrice = button.getAttribute("item");
           var newPrice = parseInt(productPrice);
           console.log(newPrice);
           var productName = menu_array[productArr].name;
           document.getElementById("summaryFood").innerHTML = productName;
           var NEWSUMPRICE = newPrice + intValue;
           document.getElementById("summaryPrice").innerHTML ='$'+ NEWSUMPRICE;
           document.getElementById("summaryPru").innerHTML ='$'+ NEWSUMPRICE;
           
           viewSummary();
    }
}

const menu = new Menu("/menu","/suspendmenu");

//done
class CreateMenuController {
    constructor(menuUrl) {
        this.menuUrl = menuUrl;
    }

    newMenu(){
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
}
const createmenucontroller = new CreateMenuController("/menu");
//done
class ViewMenuController {
    constructor(menuUrl) {
        this.menuUrl = menuUrl;
    }

    fetchMenu(){
        const menuRequest = new XMLHttpRequest();
        menuRequest.open('GET', this.menuUrl, true);
        console.log(menuRequest);

        menuRequest.onload = () => {
            menu_array = JSON.parse(menuRequest.responseText);
            console.log(menu_array);
            this.generateMenu();
        };
        menuRequest.send();
    }

    generateMenu(){
        const table = document.getElementById("getMenu");
        let menuCount = 0;
        let message = "";
        table.innerHTML = "";
        const totalmenu = menu_array.length;

        for (let count = 0; count < totalmenu; count++)
        {
            const id = menu_array[count]._id;
            const image = menu_array[count].image;
            const name = menu_array[count].name;
            const smol = menu_array[count].smallprice;
            const med = menu_array[count].mediumprice;
            const large = menu_array[count].largeprice;
            const availability = menu_array[count].availability;
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
                                <button item = '+count+' style="background-color:#333333a0;" onclick="suspendmenucontroller.suspendMenu(this)">\
                                <img src="./../images/delete.png" width="30px" height="30px">\
                        </td>'

            table.insertAdjacentHTML("beforeend", cell);
            menuCount++;
        }

    }
}
const viewmenucontroller = new ViewMenuController("/menu");

class customerViewMenuController {
    constructor(menuUrl) {
        this.menuUrl = menuUrl;
        this.Snacks = "Snacks";
        this.Drinks = "Drinks";
        this.Combo = "Combo";
        this.cartTotalSpan = document.getElementById('cart-total');
        this.cartModal = document.getElementById('cart-modal');
        this.cartItems = [];
    }

    // This method calls the movies api and gets all the movies that are showing in Shaw Theatres for Showing Now and Coming Soon
    getDrinks() {
        const request = new XMLHttpRequest();
        request.open("GET", this.menuUrl, true);
        
        // This function will be called when data returns from the web api
        request.onload = () => {
        // Get all the movies records into our movie array
            menu_array = JSON.parse(request.responseText);
        
        // Call the function to display all movies tiles for "Now Showing"
        customerviewmenucontroller.generateDrinks(this.Drinks);
        };
        
        // This command starts the calling of the movies web api
        request.send();
    }
    generateDrinks(Drinks) {
        const table = document.getElementById("drinksmenu");
        let drinkCount = 0;
        
        table.innerHTML = "";
        const totalMenu = menu_array.length;
        
        for (let count = 0; count < totalMenu; count++) {
            if (menu_array[count].type === Drinks) {
            if (menu_array[count].availability === "active"){
            const image = "./../images/menu/" + menu_array[count].image;
            const name = menu_array[count].name;
            const smallprice = menu_array[count].smallprice;
            const mediumprice = menu_array[count].mediumprice;
            const largeprice = menu_array[count].largeprice;
        
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
                          <button onclick="menu.add2sum(event)" class="smartbtn" item = '+count+' style="background-color:#333333a0;float: right;">\
                              <img item2="'+count+'" item='+smallprice+' src="./../images/addcart.png" style="width: 40px; height: 40px;">\
                          </button>\
                        </td>\
                      </tr>\
                      <tr>\
                          <td><h3>Medium: </h3></td>\
                          <td><label>$</label><label>'+mediumprice+'</label></td>\
                          <td>\
                          <button onclick="menu.add2sum(event)" class="smartbtn" item = '+count+' style="background-color:#333333a0;float: right;">\
                              <img item2="'+count+'" item='+mediumprice+' src="./../images/addcart.png" style="width: 40px; height: 40px;">\
                          </button>\
                        </td>\
                      </tr>\
                      <tr>\
                          <td><h3>Large: </h3></td>\
                          <td><label>$</label><label>'+largeprice+'</label></td>\
                          <td>\
                          <button onclick="menu.add2sum(event)" class="smartbtn" item = '+count+' style="background-color:#333333a0;float: right;">\
                              <img item2="'+count+'" item='+largeprice+' src="./../images/addcart.png" style="width: 40px; height: 40px;">\
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

    getSnacks() {
        const request = new XMLHttpRequest();
        request.open("GET", this.menuUrl, true);
        
        // This function will be called when data returns from the web api
        request.onload = () => {
        // Get all the movies records into our movie array
        menu_array = JSON.parse(request.responseText);
        
        // Call the function to generate all movies tiles for "Now Showing"
        customerviewmenucontroller.generateSnacks(this.Snacks);
        };
        
        // This command starts the calling of the movies web api
        request.send();
    }
    generateSnacks(Snacks) {
        const table = document.getElementById("snacksmenu");
        let drinkCount = 0;
        
        table.innerHTML = "";
        const totalMenu = menu_array.length;
        
        for (let count = 0; count < totalMenu; count++) {
            if (menu_array[count].type === Snacks) {
            if (menu_array[count].availability === "active"){
                const image = "./../images/menu/" + menu_array[count].image;
                const name = menu_array[count].name;
                const smallprice = menu_array[count].smallprice;
                const mediumprice = menu_array[count].mediumprice;
                const largeprice = menu_array[count].largeprice;
        
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
                            <button onclick="menu.add2sum(event)" item = '+count+' style="background-color:#333333a0;float: right;">\
                                <img item2="'+count+'" item='+smallprice+' src="./../images/addcart.png" style="float: right; width: 40px; height: 40px;">\
                            </button>\
                          </td>\
                      </tr>\
                      <tr>\
                          <td><h3>Medium: </h3></td>\
                          <td><label>$</label><label>'+mediumprice+'</label></td>\
                          <td>\
                            <button onclick="menu.add2sum(event)" item = '+count+' style="background-color:#333333a0; float: right;">\
                                <img item2="'+count+'" item='+mediumprice+' src="./../images/addcart.png" style="width: 40px; height: 40px;">\
                            </button>\
                          </td>\
                      </tr>\
                      <tr>\
                          <td><h3>Large: </h3></td>\
                          <td><label>$</label><label>'+largeprice+'</label></td>\
                          <td>\
                            <button onclick="menu.add2sum(event)" item = '+count+' style="background-color:#333333a0; float: right;">\
                                <img item2="'+count+'" item='+largeprice+' src="./../images/addcart.png" style="float: right; width: 40px; height: 40px;">\
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


    getCombo() {
        const request = new XMLHttpRequest();
        request.open("GET", this.menuUrl, true);
        
        // This function will be called when data returns from the web api
        request.onload = () => {
        // Get all the movies records into our movie array
        menu_array = JSON.parse(request.responseText);
        
        // Call the function to generate all movies tiles for "Now Showing"
        customerviewmenucontroller.generateCombo(this.Combo);
        };
        
        // This command starts the calling of the movies web api
        request.send();
    }
    generateCombo(Combo) {
        const table = document.getElementById("combomenu");
        let drinkCount = 0;
        
        table.innerHTML = "";
        const totalMenu = menu_array.length;
        
        for (let count = 0; count < totalMenu; count++) {
            if (menu_array[count].type === Combo) {
            if (menu_array[count].availability === "active"){
            const image = "./../images/menu/" + menu_array[count].image;
            const name = menu_array[count].name;
            const smallprice = menu_array[count].smallprice;
            const mediumprice = menu_array[count].mediumprice;
            const largeprice = menu_array[count].largeprice;
        
            const cell =
                  ' <td>\
                  <img src="'+image+'" style="margin:10px 25px;width: 450px; height: 300px;">\
                  <table class="centerTable" style="width: 450px;">\
                      <tr>\
                          <td colspan="3">\
                              <center><h2 id ="product-name">'+name+'</h2></center>\
                          </td>\
                      </tr>\
                      <tr>\
                          <td><h3>Small: </h3></td>\
                          <td><label>$</label><label>'+smallprice+'</label></td>\
                          <td>\
                            <button onclick="menu.add2sum(event)" item = '+count+' style="background-color:#333333a0;float: right;">\
                                <img item2="'+count+'" item = '+smallprice+' src="./../images/addcart.png" style="right; width: 40px; height: 40px;">\
                            </button>\
                          </td>\
                      </tr>\
                      <tr>\
                          <td><h3>Medium: </h3></td>\
                          <td><label>$</label><label>'+mediumprice+'</label></td>\
                          <td>\
                          <button onclick="menu.add2sum(event)" item = '+count+' style="background-color:#333333a0;float: right;">\
                              <img item2="'+count+'" item = '+mediumprice+' src="./../images/addcart.png" style="width: 40px; height: 40px;">\
                          </button>\
                        </td>\
                      </tr>\
                      <tr>\
                          <td><h3>Large: </h3></td>\
                          <td><label>$</label><label>'+largeprice+'</label></td>\
                          <td>\
                            <button onclick="menu.add2sum(this)" item = '+count+' style="background-color:#333333a0;float: right;">\
                                <img item2="'+count+'" item='+largeprice+' src="./../images/addcart.png" style="width: 40px; height: 40px;">\
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
}
const customerviewmenucontroller = new customerViewMenuController("/menu");
//done
class UpdateMenuController {
    constructor(menuUrl) {
        this.menuUrl = menuUrl;
    }

    updateMenu(currentIndex){
        var id = parseInt(document.getElementById("editmenu_id").value);
        var currentIndex = -1;
        for (var i = 0; i < menu_array.length; i++) {
            if (id == menu_array[i]._id) {   
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

            menu_array[currentIndex].name = name;
            menu_array[currentIndex].image= img;
            menu_array[currentIndex].type = type;
            menu_array[currentIndex].smallprice = smol;
            menu_array[currentIndex].mediumprice = med;
            menu_array[currentIndex].largeprice = large;
            menu_array[currentIndex].availability = avail;

            updateMenu.onload = function () {
                alert("The menu information has been edited, please switch to other tab to refresh");
                document.getElementById("updateMenutable").style.display ="none";
                document.getElementById("manageFoodBeveragesTicket").style.display="none";
                mFoodBeveragesTicket();
            };
            updateMenu.send(JSON.stringify(editedmenu));
            }
    }
}
const updatemenucontroller = new UpdateMenuController("/menu");

class SuspendMenuController {
    constructor(newmenuUrl) {
        this.newmenuUrl = newmenuUrl;
    }

    suspendMenu(element){
        var item = element.getAttribute("item");
        var id = menu_array[item]._id;

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

            menu_array[item].availability = avail;
            
            suspendMenu.onload = function () {
                alert("The menu has been suspended");
                document.getElementById("manageFoodBeveragesTicket").style.display="none";
                mFoodBeveragesTicket();
            };

            suspendMenu.send(JSON.stringify(suspendmenu));
        }
    }
}
const suspendmenucontroller = new SuspendMenuController("/suspendmenu");

class SearchMenuController{
    constructor(searchUrl) {
        this.searchUrl = searchUrl;
    }
    searchMenu(){
        var input, filter, table, tr, td, a, i, txtValue;
          input = document.getElementById("menuSearch");
          filter = input.value.toUpperCase();
          table = document.getElementById("getMenu");
          const searchM = new XMLHttpRequest();
    
          if (filter === null)
          {
            document.getElementById("viewMenu").style.display="none";
            viewUserProfile();
          }
    
          else{
            const search1 = "%" +filter + "%"
            console.log ("search: " + search1);
            searchM.open('POST', this.searchUrl, true);
    
          const searchdata = {
            "search": search1
          }
    
          console.log("search data: "+ JSON.stringify(searchdata))
    
          searchM.setRequestHeader("Content-Type", "application/json");
          searchM.onload = function () {
            menu_array = []
            menu_array = JSON.parse(searchM.responseText);
            console.log("array length" + menu_array.length);
            document.getElementById("getMenu").style.display="none";
            document.getElementById("getSearchMenu").style.display="block";
            
    
            const table = document.getElementById("getSearchMenu");
            let upCount = 0;
            let message = "";
            table.innerHTML = "";
            const totalup = menu_array.length;
            console.log("array length" + menu_array.length);
    
            for (let count = 0; count < totalup; count++)
            {
                const id = menu_array[count]._id;
                const name = menu_array[count].name;
                const price = menu_array[count].price;
                const cell ='<td><strong id="up_id" style="display:none;">'+id+'</strong><a>'+name+'</a></td><td>'+price+'</td><td width="10%"><button item = '+count+' style="background-color:#333333a0;" onclick=""><img src="./../images/edit.png" width="30px" height="30px"></td>'
    
                table.insertAdjacentHTML("beforeend", cell);
                console.log(table);
                upCount++;
            }
          };
          searchM.send(JSON.stringify(searchdata));
        }
    
      }
}
const searchmenucontroller = new SearchMenuController("/searchmenu");
