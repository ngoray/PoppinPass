class CinemaRoom {
    constructor(cinemaroomUrl) {
      this.cinemaroomUrl = cinemaroomUrl;
      this.cinemaroomArray = [];
    }

    fetchCinemaRoom() {
        const cinemaroomRequest = new XMLHttpRequest();
        cinemaroomRequest.open('GET', this.cinemaroomUrl, true);
        console.log(cinemaroomRequest);
        // Use an arrow function to preserve the 'this' context
        cinemaroomRequest.onload = () => {
            this.cinemaroomArray = JSON.parse(cinemaroomRequest.responseText);
            console.log("ok");
            console.log(this.cinemaroomArray);
            this.displayCinemaRoom();
        };
    
        cinemaroomRequest.send();
    }

    displayCinemaRoom() {
        const table = document.getElementById("getRoomNumber");
        let cinemaroomCount = 0;
        let message = "";
        table.innerHTML = "";
        const totalCinemaRoom = this.cinemaroomArray.length;

        for (let count = 0; count < totalCinemaRoom; count++)
        {
            const id = this.cinemaroomArray[count]._id;
            const roomno = this.cinemaroomArray[count].roomnumber;
            const status = this.cinemaroomArray[count].availability;
            const cell ='<td>\
                            <strong id="occu_id" style="display:none;">\
                                '+id+'\
                            </strong>\
                            <a>\
                                '+roomno+'\
                            </a>\
                        </td>\
                        <td>\
                            <a>\
                                '+status+'\
                            </a>\
                        </td>\
                        <td width="10%">\
                            <button item = '+count+' style="background-color:#333333a0;" onclick="cinemaroom.showCinemaRoomDetails(this)">\
                                <img src="./../images/edit.png" width="30px" height="30px">\
                            </button>\
                            <button item = '+count+' style="background-color:#333333a0;" onclick="cinemaroom.showseatMapDetails(this)">\
                                <img src="./../images/delete.png" width="30px" height="30px">\
                            </button>\
                        </td> '

            table.insertAdjacentHTML("beforeend", cell);
            cinemaroomCount++;
        }
    }

    showseatMapDetails(element) {
        console.log(this.cinemaroomArray);
        var item = element.getAttribute("item");
        console.log(item);
        const currentIndex = item;

        document.getElementById("seatMapContent").style.display ="none";

        document.getElementById("corploggout").style.display ="none";
        document.getElementById("managerMenu").style.display ="none";

        document.getElementById("suspendCinemaSeats").style.display ="block";
        var cinemaRoom = this.cinemaroomArray[item].roomnumber;
        document.getElementById("suspendRoomName").innerHTML = this.cinemaroomArray[item].roomnumber;
        console.log(this.cinemaroomArray[item].roomnumber);
        seatmap.getRoomSeats(cinemaRoom);

    }

    showCinemaRoomDetails(element) {
        console.log(this.cinemaroomArray);
        var item = element.getAttribute("item");
        console.log(item);
        const currentIndex = item;

        document.getElementById("seatMapContent").style.display ="none";

        document.getElementById("corploggout").style.display ="none";
        document.getElementById("managerMenu").style.display ="none";

        document.getElementById("addCinemaSeats").style.display ="block";
        document.getElementById("editRoomName").innerHTML = this.cinemaroomArray[item].roomnumber;
        console.log(this.cinemaroomArray[item].roomnumber);
        occupancy.fetchRow();
    }

      addCinemaRoom() {
        const addCinemaRoom = new XMLHttpRequest();
        addCinemaRoom.open('POST', this.cinemaroomUrl, true);
    
        const roomnumber = document.getElementById("createRoomNumber").value;
        
    
    
        const cinemaroomData = {
            "roomnumber": roomnumber
        }
    
        addCinemaRoom.setRequestHeader("Content-Type", "application/json");
        addCinemaRoom.onload = function () {
            const output = JSON.parse(addCinemaRoom.responseText);
                alert("Seat added!");
                document.getElementById("createRoomNumber").value = "";
                document.getElementById("createRoomNumbertable").style.display ="none";
                document.getElementById("manageSeatMap").style.display="none";
                mSeatMap();
            
        };
        addCinemaRoom.send(JSON.stringify(cinemaroomData));
      }

      openAddRoomNumberModal(){
        $("#createRoomNumbertable").fadeIn()
        document.getElementById("createRoomNumbertable").style.display="block";
    }
    
    closeAddRoomNumberModal(){
        document.getElementById("createRoomNumbertable").style.display="none";
    }

    closeSeatMapContent(){
        document.getElementById("addCinemaSeats").style.display="none";
        document.getElementById("corploggout").style.display ="block";
        document.getElementById("managerMenu").style.display ="block";
        document.getElementById("seatMapContent").style.display ="block";
    }
}



const cinemaroom = new CinemaRoom("/room");