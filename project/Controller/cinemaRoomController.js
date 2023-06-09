let cinemaroomArray = [];

class CinemaRoom {
    constructor(cinemaroomUrl) {
      this.cinemaroomUrl = cinemaroomUrl;
    }

    fetchCinemaRoomST() {
        const cinemaroomRequest = new XMLHttpRequest();
        cinemaroomRequest.open('GET', this.cinemaroomUrl, true);
        console.log(cinemaroomRequest);
        // Use an arrow function to preserve the 'this' context
        cinemaroomRequest.onload = () => {
            cinemaroomArray = [];
            cinemaroomArray = JSON.parse(cinemaroomRequest.responseText);
            this.generateCinemaRoomST();
        };
    
        cinemaroomRequest.send();
    }

    generateCinemaRoomST(){
        const table = document.getElementById("createRoomNumberST");
        const table2 = document.getElementById("updateRoomNumberST");
          let upCount = 0;
          let message = "";
          table.innerHTML = "";
          table2.innerHTML = "";
          const totalup = cinemaroomArray.length;
    
          for (let count = 0; count < totalup; count++)
          {
              const rm = cinemaroomArray[count].roomnumber;
              const cell ='<option value="'+rm +'">'+rm+'</option>'
    
              table.insertAdjacentHTML("beforeend", cell);
              table2.insertAdjacentHTML("beforeend", cell);
              upCount++;
          }
      }

    showseatMapDetails(element) {
        var item = element.getAttribute("item");
        console.log(item);
        const currentIndex = item;

        document.getElementById("seatMapContent").style.display ="none";

        document.getElementById("corploggout").style.display ="none";
        document.getElementById("managerMenu").style.display ="none";

        document.getElementById("suspendCinemaSeats").style.display ="block";
        var cinemaRoom = cinemaroomArray[item].roomnumber;
        console.log("THE CINMEMA ROOM IS :"+cinemaRoom);
        document.getElementById("suspendRoomName").innerHTML = cinemaroomArray[item].roomnumber;
        console.log(cinemaroomArray[item].roomnumber);
        viewseatmapcontroller.getRoomSeats(cinemaRoom);

    }

    showCinemaRoomDetails(element) {
        console.log(cinemaroomArray);
        var item = element.getAttribute("item");
        console.log(item);
        const currentIndex = item;

        document.getElementById("seatMapContent").style.display ="none";

        document.getElementById("corploggout").style.display ="none";
        document.getElementById("managerMenu").style.display ="none";

        document.getElementById("addCinemaSeats").style.display ="block";
        document.getElementById("editRoomName").innerHTML = cinemaroomArray[item].roomnumber;
        console.log(cinemaroomArray[item].roomnumber);
        occupancy.fetchRow();
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

class CreateCinemaRoomController {
    constructor(cinemaroomUrl) {
        this.cinemaroomUrl = cinemaroomUrl;
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
}
const createcinemaroomcontroller = new CreateCinemaRoomController("/room");

class ViewCinemaRoomController {
    constructor(cinemaroomUrl) {
        this.cinemaroomUrl = cinemaroomUrl;
      }

    fetchCinemaRoom() {
        const cinemaroomRequest = new XMLHttpRequest();
        cinemaroomRequest.open('GET', this.cinemaroomUrl, true);
        console.log(cinemaroomRequest);
        // Use an arrow function to preserve the 'this' context
        cinemaroomRequest.onload = () => {
            cinemaroomArray = JSON.parse(cinemaroomRequest.responseText);
            console.log("ok");
            console.log(cinemaroomArray);
            generateCinemaRoom();
        };
    
        cinemaroomRequest.send();
    }

}
const viewcinemaroomcontroller = new ViewCinemaRoomController("/room");

class SuspendCinemaRoomController {
    constructor(cinemaroomUrl) {
        this.cinemaroomUrl = cinemaroomUrl;
    }

    suspendCinemaRoomStatus(element) {
        var item = element.getAttribute("item");
        console.log(item); // check the value of "item"
        console.log(cinemaroomArray[item]); // check the movie object at the specified index
        var id = cinemaroomArray[item]._id;
        console.log(id);
        const suspendroomurl = this.cinemaroomUrl + "/" + id;
        
        const response = confirm("Are you sure you want to suspend this cinemaroom?");
          
        const availability = document.getElementById("cinema_suspend").innerHTML;
          
        const suspendroom = {
              availability: availability
          };
          console.log(suspendroom);
          
        if (response == true) {
              const suspendRoom = new XMLHttpRequest();
              suspendRoom.open("PUT", suspendroomurl, true);
              suspendRoom.setRequestHeader("Content-Type", "application/json");
      
              //Update the movie object in the movieArray
              cinemaroomArray[item].availability = availability;
      
              suspendRoom.onload = function () {
                  alert("Your CinemaRoom has been suspended.");
                  document.getElementById("manageSeatMap").style.display = "none";
                  mSeatMap();

              };
      
              // Send the updated movie object as a JSON string
              suspendRoom.send(JSON.stringify(cinemaroomArray[item]));
          }
    }
}
const suspendcinemaroomcontroller = new SuspendCinemaRoomController("/room");