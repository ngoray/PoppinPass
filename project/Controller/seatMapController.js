let smarray = [];
class SeatMap {
  constructor(smUrl, smUrl2, smUrl4cust) {
    this.smUrl = smUrl;
    this.smUrl2 = smUrl2; 
    this.smUrl4cust = smUrl4cust;
    this.booked = [];
    this.row1 = "A";
    this.row2 = "B";
    this.row3 = "C";
    this.row4 = "D";
    this.row5 = "E";
  } 

  deleteUser(delitem) {
    var response = confirm("Are you sure you want to deactivate your account?");

    if (response == true) {

        var _id = delitem.getAttribute("item")
        console.log("item")
        var deleteSM = new XMLHttpRequest();

        var edit_deleteSM_url = this.smUrl + "/" + _id;
        console.log(count_id);


        deleteSM.open("DELETE", edit_deleteSM_url); 
        deleteSM.onload = function () {
            alert("Your Account has been deactivated")
        };
        deleteSM.send();
    }
 }

  deciding(element){
    var id = element.getAttribute("id")
    var colour = document.getElementById(id).style.backgroundColor;

    //check if color is orange
    if (colour == "rgb(255, 130, 6)"){
      createseatmapcontroller.addSM(element);
      document.getElementById(id).style.backgroundColor = "green";
    }
  }

  closeSuspendCinemaSeat(){
    document.getElementById("suspendCinemaSeats").style.display="none";
    document.getElementById("corploggout").style.display ="block";
    document.getElementById("managerMenu").style.display ="block";
    document.getElementById("seatMapContent").style.display ="block";
    const table1 = document.getElementById("rowA1");
    const table2 = document.getElementById("rowB1");
    const table3 = document.getElementById("rowC1");
    const table4 = document.getElementById("rowD1");
    const table5 = document.getElementById("rowE1");
    table1.innerHTML = "";
    table2.innerHTML = "";
    table3.innerHTML = "";
    table4.innerHTML = "";
    table5.innerHTML = "";
  }

  getRoomSeats4Cust(roomnum){
    var roomm = roomnum;
    console.log("roomnum: "+ roomnum);
    const grs = new XMLHttpRequest();
    grs.open('POST', this.smUrl4cust, true);   
    
    const smData = {
      "roomnumber": roomm
    }
    console.log("Data: "+ JSON.stringify(smData));
    grs.setRequestHeader("Content-Type", "application/json");
    grs.onload = () =>{
      smarray = JSON.parse(grs.responseText);
      console.log(grs.responseText);
      console.log("ok");
      console.log(smarray);
      this.generateRowA4Cust(this.row1);
      this.generateRowB4Cust(this.row2);
      this.generateRowC4Cust(this.row3);
      this.generateRowD4Cust(this.row4);
      this.generateRowE4Cust(this.row5);


    }
    console.log(smData);
    grs.send(JSON.stringify(smData));
  }

  generateRowA4Cust(row1) {
    const table = document.getElementById("BrowA");
    let RowCount = 0;
    let message = "";

    table.innerHTML = "";
    const totalRow = smarray.length;

    for (let count = 0; count < totalRow; count++) {
      if (smarray[count].row === row1) {
        const seatno = smarray[count].seatno;
        const row = smarray[count].row;
        const id = smarray[count]._id;
        const cell =
        '<button item="' + count +'" class="mapbtn" try="'+seatno+'" id="'+id+'" style="background-color:rgb(255, 130, 6);" onclick="seatmap.updateSM(this);" >'+seatno+'</button><label style="display:none;" id="seatrow">'+row+'</label>';

        table.insertAdjacentHTML("beforeend", cell);
        RowCount++;
      }
    }
  }

  generateRowB4Cust(row2) {
    const table = document.getElementById("BrowB");
    let RowCount = 0;
    let message = "";

    table.innerHTML = "";
    const totalRow = smarray.length;

    for (let count = 0; count < totalRow; count++) {
      if (smarray[count].row === row2) {
        const seatno = smarray[count].seatno;
        const row = smarray[count].row;
        const id = smarray[count]._id;
        const cell =
        '<button item="' + count +'" class="mapbtn" try="'+seatno+'" id="'+id+'" style="background-color:rgb(255, 130, 6);" onclick="seatmap.updateSM(this);" >'+seatno+'</button><label style="display:none;" id="seatrow">'+row+'</label>';

        table.insertAdjacentHTML("beforeend", cell);
        RowCount++;
      }
    }
  }

  generateRowC4Cust(row3) {
    const table = document.getElementById("BrowC");
    let RowCount = 0;
    let message = "";

    table.innerHTML = "";
    const totalRow = smarray.length;

    for (let count = 0; count < totalRow; count++) {
      if (smarray[count].row === row3) {
        const seatno = smarray[count].seatno;
        const row = smarray[count].row;
        const id = smarray[count]._id;
        const cell =
        '<button item="' + count +'" class="mapbtn" try="'+seatno+'" id="'+id+'" style="background-color:rgb(255, 130, 6);" onclick="seatmap.updateSM(this);" >'+seatno+'</button><label style="display:none;" id="seatrow">'+row+'</label>';

        table.insertAdjacentHTML("beforeend", cell);
        RowCount++;
      }
    }
  }

  generateRowD4Cust(row4) {
    const table = document.getElementById("BrowD");
    let RowCount = 0;
    let message = "";

    table.innerHTML = "";
    const totalRow = smarray.length;

    for (let count = 0; count < totalRow; count++) {
      if (smarray[count].row === row4) {
        const seatno = smarray[count].seatno;
        const row = smarray[count].row;
        const id = smarray[count]._id;
        const cell =
        '<button item="' + count +'" class="mapbtn" try="'+seatno+'" id="'+id+'" style="background-color:rgb(255, 130, 6);" onclick="seatmap.updateSM(this);" >'+seatno+'</button><label style="display:none;" id="seatrow">'+row+'</label>';

        table.insertAdjacentHTML("beforeend", cell);
        RowCount++;
      }
    }
  }

  generateRowE4Cust(row5) {
    const table = document.getElementById("BrowE");
    let RowCount = 0;
    let message = "";

    table.innerHTML = "";
    const totalRow = smarray.length;

    for (let count = 0; count < totalRow; count++) {
      if (smarray[count].row === row5) {
        const seatno = smarray[count].seatno;
        const row = smarray[count].row;
        const id = smarray[count]._id;

        const cell =
        '<button item="' + count +'" class="mapbtn" try="'+seatno+'" id="'+id+'" style="background-color:rgb(255, 130, 6);" onclick="seatmap.updateSM(this);" >'+seatno+'</button><label style="display:none;" id="seatrow">'+row+'</label>';

        table.insertAdjacentHTML("beforeend", cell);
        RowCount++;
      }
    }
  }

  updateSM(currentIndex){
    
    var id = currentIndex.getAttribute("id");
    var name = currentIndex.getAttribute("try");
    document.getElementById(id).style.backgroundColor = "green";

    
    // var seatclicked = this.smarray[currentIndex].seatno;
    var seatnobooking = document.getElementById('summarySeat');

    var id1 = parseInt(id);
    var currentIndex = -1;
    for (var i = 0; i < this.smarray.length; i++) {
        if (id1 == this.smarray[i]._id) {   
        currentIndex = i;
        break; // Exit the loop once a match is found
     }
    }
    console.log("THE ID OF CURENT INDEX IS: "+ this.smarray[currentIndex]._id);

    console.log("seatno: "+name);
    var bookedSM_url = this.smUrl + "/" + id;

    const susSM = new XMLHttpRequest();
    susSM.open("PUT", bookedSM_url, true);

    seatnobooking.innerHTML = seatnobooking.innerHTML +' '+name;
    console.log(seatnobooking.innerHTML);

    susSM.onload = function () {
  
      // document.getElementById("summarySeat").innerHTML = this.smarray[currentIndex].seatno;

  };
  susSM.send();
  }
}
const seatmap = new SeatMap("/seatmap", "/seatmaps", "/smbooking");

class CreateSeatMapController {
  constructor(smUrl2) {
    this.smUrl2 = smUrl2; 
  }

  addSM(currentIndex) {
    console.log(occuArray);
    const addSm = new XMLHttpRequest();
    addSm.open('POST', this.smUrl2, true);
    var item = currentIndex.getAttribute("item");
    var id = currentIndex.getAttribute("id");     

    const seatno = occuArray[item].seatno;
    const row = occuArray[item].row;
    const roomnumber = document.getElementById("editRoomName").innerHTML;

    const smData = {
        "seatno": seatno,
        "row": row,
        "roomnumber": roomnumber
    }

    
    console.log(smData)
      addSm.setRequestHeader("Content-Type", "application/json");
        addSm.onload = function () {
          const output = JSON.parse(addSm.responseText);
      };
      addSm.send(JSON.stringify(smData));
  }
}
const createseatmapcontroller = new CreateSeatMapController("/seatmaps");

class ViewSeatMapController {
  constructor(smUrl, smUrl2) {
    this.smUrl = smUrl;
    this.smUrl2 = smUrl2; 
    this.row1 = "A";
    this.row2 = "B";
    this.row3 = "C";
    this.row4 = "D";
    this.row5 = "E";
  }
  getRoomSeats(roomnum){
    var roomm = roomnum;
    console.log("roomnum: "+ roomnum);
    const grs = new XMLHttpRequest();
    grs.open('POST', this.smUrl, true);   
    
    const smData = {
      "roomnumber": roomm
    }
    console.log("Data: "+ JSON.stringify(smData));
    grs.setRequestHeader("Content-Type", "application/json");
    grs.onload = () =>{
      smarray = JSON.parse(grs.responseText);
      console.log("NUMBER OF SEATS FOR THIS ROOM: "+ JSON.stringify(smarray));
      console.log(grs.responseText);
      generateRowA(this.row1);
      generateRowB(this.row2);
      generateRowC(this.row3);
      generateRowD(this.row4);
      generateRowE(this.row5);


    }
    console.log(smData);
    grs.send(JSON.stringify(smData));
  }

}
const viewseatmapcontroller = new ViewSeatMapController("/seatmap", "/seatmaps");

class UpdateSeatMapController {
  constructor(smUrl) {
    this.smUrl = smUrl;
  }

  updateSM(currentIndex){
    
    var id = currentIndex.getAttribute("id");
    var name = currentIndex.getAttribute("try");
    document.getElementById(id).style.backgroundColor = "green";

    
    // var seatclicked = this.smarray[currentIndex].seatno;
    var seatnobooking = document.getElementById('summarySeat');

    var id1 = parseInt(id);
    var currentIndex = -1;
    for (var i = 0; i < smarray.length; i++) {
        if (id1 == smarray[i]._id) {   
        currentIndex = i;
        break; // Exit the loop once a match is found
     }
    }
    var bookedSM_url = this.smUrl + "/" + id;

    const susSM = new XMLHttpRequest();
    susSM.open("PUT", bookedSM_url, true);

    seatnobooking.innerHTML = seatnobooking.innerHTML +' '+name;
    console.log(seatnobooking.innerHTML);

    susSM.onload = function () {
      alert("The Seatmap information has been edited, please switch to other tabs to refresh");

  };
  susSM.send();


  }
}
const updateseatmapcontroller = new UpdateSeatMapController("/seatmap");

class SuspendSeatMapController {
  constructor(smUrl) {
    this.smUrl = smUrl;
  }

  suspendSM(currentIndex){
    console.log("suspendsm has been called");
    var response = confirm("Are you sure you want to suspend this seat?");
    if (response == true) {
    
    var id = currentIndex.getAttribute("id");
    console.log("id: "+id);
    var deleteSM_url = this.smUrl + "/" + id;

    const susSM = new XMLHttpRequest();
    susSM.open("DELETE", deleteSM_url);

    susSM.onload = function () {
      alert("The Seat has been suspended from the cinema room.")
    };
    susSM.send();
    }
  }
}
const suspendseatmapcontroller = new SuspendSeatMapController("/seatmap");

class SearchSeatMapController {
  constructor(smUrl, smUrl2, smUrl4cust) {
    this.smUrl = smUrl;
    this.smUrl2 = smUrl2; 
    this.smUrl4cust = smUrl4cust;
    this.booked = [];
    this.smarray = [];
    this.row1 = "A";
    this.row2 = "B";
    this.row3 = "C";
    this.row4 = "D";
    this.row5 = "E";
  }

  searchSeatMap(){
    var input, filter, table, tr, td, a, i, txtValue;
      input = document.getElementById("smSearch");
      filter = input.value.toUpperCase();
      table = document.getElementById("getsm");
      const searchM = new XMLHttpRequest();

      if (filter === null)
      {
        document.getElementById("viewsm").style.display="none";
        viewUserProfile();
      }

      else{
        const search1 = "%" +filter + "%"
        console.log ("search: " + search1);
        searchsM.open('POST', this.searchUrl, true);

      const searchdata = {
        "search": search1
      }

      console.log("search data: "+ JSON.stringify(searchdata))

      searchsM.setRequestHeader("Content-Type", "application/json");
      searchsM.onload = function () {
        smarray = []
        smarray = JSON.parse(searchsM.responseText);
        console.log("array length" + smarray.length);
        document.getElementById("getst").style.display="none";
        document.getElementById("getSearchsm").style.display="block";
        

        SearchSeatMap();
      };
      searchsM.send(JSON.stringify(searchdata));
    }

  }


}
const searchseatmapcontroller = new SearchSeatMapController("/seatmap", "/seatmaps", "/smbooking");