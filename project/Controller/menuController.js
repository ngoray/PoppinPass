class Menu {
    constructor(menuUrl,newmenuUrl) {
        this.menuUrl = menuUrl;
        this.newmenuUrl = newmenuUrl;
      this.menu_array = [];
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
            document.getElementById("createMenutable").style.display ="none";
        };
        addMenu.send(JSON.stringify(menuData));

    }

    displayFileName() {
        var input = document.getElementById('picname');
        var fileName = input.value.split('\\').pop();
        document.getElementById('picname1').value = fileName;
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
            const cell ='<td>\
                            <img src="./../images/menu/'+image+'" width="100px" height="70px">\
                        </td>\
                        <td>\
                            <center>\
                            <a id="Menu_id" style="display:none;">'+id+'</a>\
                            <a>'+name+'</a>\
                            </center>\
                        </td>\
                        <td>\
                            <center>\
                                <label>'+availability+'</label>\
                                <label id="suspendMenu" style="display:none;">suspended</label>\
                            </center>\
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
        

        document.getElementById("seatMapContent").style.display ="none";

        document.getElementById("corploggout").style.display ="none";
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
    console.log("avail: "+ avail);

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

    suspendMenu(currentIndex){
        var id = parseInt(document.getElementById("Menu_id").innerHTML);
        var currentIndex = -1;
        for (var i = 0; i < this.menu_array.length; i++) {
            if (id == this.menu_array[i]._id) {   
            currentIndex = i;
            break; // Exit the loop once a match is found
            }
        }
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
            this.menu_array[currentIndex].availability = avail;
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
    
}

const menu = new Menu("/menu","/suspendmenu");