let occuArray = [];

class Occupancy {
  constructor(occuUrl, searchUrl) {
    this.occuUrl = occuUrl;
    this.searchUrl = searchUrl;
    this.occuArray = [];
    this.row1 = "A";
    this.row2 = "B";
    this.row3 = "C";
    this.row4 = "D";
    this.row5 = "E";
  }

  showOccuDetails(element) {
      console.log(occuArray);
      var item = element.getAttribute("item");
      console.log(item);
      const currentIndex = item;

      document.getElementById("editOccupancytable").style.display ="block";
      document.getElementById("editSeatNo").value = occuArray[item].seatno;
      document.getElementById("editSeatRow").value = occuArray[item].row;
      document.getElementById("editOccu_id").value = occuArray[item]._id;
  }
  cancelOccupancyDetails(){
      document.getElementById("editOccupancytable").style.display ="none"; 
  }
  openAddOccupancyModal(){
      $("#createMovietable").fadeIn()
      document.getElementById("createOccupancytable").style.display="block";
  }
  
  closeAddOccupancyModal(){
      document.getElementById("createOccupancytable").style.display="none";
  }

  fetchRow() {
      const OccuRequest = new XMLHttpRequest();
      OccuRequest.open('GET', this.occuUrl, true);
      console.log(OccuRequest);
      // Use an arrow function to preserve the 'this' context
      OccuRequest.onload = () => {
          occuArray = JSON.parse(OccuRequest.responseText);
          console.log("ok");
          console.log(occuArray);
          this.displayRowA(this.row1);
          this.displayRowB(this.row2);
          this.displayRowC(this.row3);
          this.displayRowD(this.row4);
          this.displayRowE(this.row5);
      };
  
      OccuRequest.send();
  }

  displayRowA(row1) {
      const table = document.getElementById("rowA");
      let RowCount = 0;
      let message = "";
  
      table.innerHTML = "";
      const totalRow = occuArray.length;
  
      for (let count = 0; count < totalRow; count++) {
        if (occuArray[count].row === row1) {
          const seatno = occuArray[count].seatno;
          const row = occuArray[count].row;
          const cell =
            '<button item="' + count +'" class="mapbtn"  id="'+count+'" style="background-color:rgb(255, 130, 6);" onclick="seatmap.deciding(this)" >'+seatno+'</button><label style="display:none;" id="seatrow">'+row+'</label>';
  
          table.insertAdjacentHTML("beforeend", cell);
          RowCount++;
        }
      }
    }

    displayRowB(row2) {
      const table = document.getElementById("rowB");
      let RowCount = 0;
      let message = "";
  
      table.innerHTML = "";
      const totalRow = occuArray.length;
  
      for (let count = 0; count < totalRow; count++) {
        if (occuArray[count].row === row2) {
          const seatno = occuArray[count].seatno;
          const row = occuArray[count].row;
          const cell =
          '<button item="' + count +'" class="mapbtn"  id="'+count+'" style="background-color:rgb(255, 130, 6);" onclick="seatmap.deciding(this)" >'+seatno+'</button><label style="display:none;" id="seatrow">'+row+'</label>';
  
          table.insertAdjacentHTML("beforeend", cell);
          RowCount++;
        }
      }
    }

    displayRowC(row3) {
      const table = document.getElementById("rowC");
      let RowCount = 0;
      let message = "";
  
      table.innerHTML = "";
      const totalRow = occuArray.length;
  
      for (let count = 0; count < totalRow; count++) {
        if (occuArray[count].row === row3) {
          const seatno = occuArray[count].seatno;
          const row = occuArray[count].row;
          const cell =
          '<button item="' + count +'" class="mapbtn"  id="'+count+'" style="background-color:rgb(255, 130, 6);" onclick="seatmap.deciding(this)" >'+seatno+'</button><label style="display:none;" id="seatrow">'+row+'</label>';
  
          table.insertAdjacentHTML("beforeend", cell);
          RowCount++;
        }
      }
    }


    displayRowD(row4) {
      const table = document.getElementById("rowD");
      let RowCount = 0;
      let message = "";
  
      table.innerHTML = "";
      const totalRow = occuArray.length;
  
      for (let count = 0; count < totalRow; count++) {
        if (occuArray[count].row === row4) {
          const seatno = occuArray[count].seatno;
          const row = occuArray[count].row;
          const cell =
          '<button item="' + count +'" class="mapbtn"  id="'+count+'" style="background-color:rgb(255, 130, 6);" onclick="seatmap.deciding(this)" >'+seatno+'</button><label style="display:none;" id="seatrow">'+row+'</label>';
  
          table.insertAdjacentHTML("beforeend", cell);
          RowCount++;
        }
      }
    }

    displayRowE(row5) {
      const table = document.getElementById("rowE");
      let RowCount = 0;
      let message = "";
  
      table.innerHTML = "";
      const totalRow = occuArray.length;
  
      for (let count = 0; count < totalRow; count++) {
        if (occuArray[count].row === row5) {
          const seatno = occuArray[count].seatno;
          const row = occuArray[count].row;
  
          const cell =
          '<button item="' + count +'" class="mapbtn"  id="'+count+'" style="background-color:rgb(255, 130, 6);" onclick="seatmap.deciding(this)" >'+seatno+'</button><label style="display:none;" id="seatrow">'+row+'</label>';
  
          table.insertAdjacentHTML("beforeend", cell);
          RowCount++;
        }
      }
    }
}
const occupancy = new Occupancy("/occupancy", "/searchoccu");

class CreateOccupancyController {
  constructor(occuUrl) {
    this.occuUrl = occuUrl;
  }

  addOccu() {
    const addOccu = new XMLHttpRequest();
    addOccu.open('POST', this.occuUrl, true);

    const seatno = document.getElementById("createSeatNumber").value;
    const row = document.getElementById("createSeatRow").value;

    const occupancyDetails = {
        "seatno": seatno,
        "row": row
    }

    console.log(occupancyDetails)

    addOccu.setRequestHeader("Content-Type", "application/json");
    addOccu.onload = function () {
        const output = JSON.parse(addOccu.responseText);
            alert("Seat added!");
            document.getElementById("createSeatNumber").value = "";
            document.getElementById("createOccupancytable").style.display ="none";
            document.getElementById("createSeatRow").value = "";
            document.getElementById("manageOccupancy").style.display="none";
            mOccupancy();
        
    };
    addOccu.send(JSON.stringify(occupancyDetails));
  }
}
const createoccupancycontroller = new CreateOccupancyController("/occupancy");

class ViewOccupancyController {
  constructor(occuUrl) {
    this.occuUrl = occuUrl;
  }

  fetchOccu() {
    const OccuRequest = new XMLHttpRequest();
    OccuRequest.open('GET', this.occuUrl, true);
    console.log(OccuRequest);
    // Use an arrow function to preserve the 'this' context
    OccuRequest.onload = () => {
        occuArray = JSON.parse(OccuRequest.responseText);
        console.log("ok");
        console.log(occuArray);
        this.displayOccu();
    };

    OccuRequest.send();
  }

  displayOccu() {
    const table = document.getElementById("getOccupancy");
    let occuCount = 0;
    let message = "";
    table.innerHTML = "";
    const totalOccu = occuArray.length;

    for (let count = 0; count < totalOccu; count++)
    {
        const id = occuArray[count]._id;
        const seatno = occuArray[count].seatno;
        const row = occuArray[count].row;
        const cell ='<td style="width: 30%;"><strong id="occu_id" style="display:none;">'+id+'</strong><a>'+seatno+'</a></td><td><a>'+row+'</a></td><td ><button item = '+count+' style="background-color:#333333a0; float:right;" onclick="occupancy.showOccuDetails(this)"><img src="./../images/edit.png" width="30px" height="30px"></td>'

        table.insertAdjacentHTML("beforeend", cell);
        occuCount++;
    }
  }
}
const viewoccupancycontroller = new ViewOccupancyController("/occupancy");

class UpdateOccupancyController {
  constructor(occuUrl) {
    this.occuUrl = occuUrl;
  }

  updateOccu(currentIndex) {

    var id = parseInt(document.getElementById("editOccu_id").value);

    console.log("id: "+ id);
    var currentIndex = -1;
    for (var i = 0; i < occuArray.length; i++) {
        if (id == occuArray[i]._id) {   
        currentIndex = i;
        break; // Exit the loop once a match is found
      }
    }

    const edit_occu_url = this.occuUrl + "/" + id;
    const response = confirm("Are you sure you want to edit your information?");
    
    const seatno = document.getElementById("editSeatNo").value;
    const row = document.getElementById("editSeatRow").value;

    console.log("current ind: "+ currentIndex)
    console.log("seatno: "+ seatno)
    console.log("row: "+ row)

    const editedOccu = {
        seatno: seatno,
        row: row
    };
    console.log(editedOccu);
    
    if (response == true) {
        const updateOccu = new XMLHttpRequest();
        updateOccu.open("PUT", edit_occu_url, true);
        updateOccu.setRequestHeader("Content-Type", "application/json");

        console.log(occuArray[currentIndex]);

        //Update the movie object in the movieArray
        occuArray[currentIndex].seatno = seatno;
        occuArray[currentIndex].row = row;

        updateOccu.onload = function () {
            alert("Your occupancy information has been edited.");
            document.getElementById("manageOccupancy").style.display="none";
            mOccupancy();
        };

        // Send the updated movie object as a JSON string
        updateOccu.send(JSON.stringify(occuArray[currentIndex]));
    }
    document.getElementById("editOccupancytable").style.display ="none"; 
    mOccupancy();
  }
}
const updateoccupancycontroller = new UpdateOccupancyController("/occupancy");

class SuspendOccupancyController {
  constructor(occuUrl) {
    this.occuUrl = occuUrl;
  }
}
const suspendoccupancycontroller = new SuspendOccupancyController("/occupancy");

class SearchOccupancyController {
  constructor(searchUrl) {
    this.searchUrl = searchUrl;
  }

  searchOccupancy(){
    var input, filter, table, tr, td, a, i, txtValue;
      input = document.getElementById("occuSearch");
      filter = input.value.toUpperCase();
      table = document.getElementById("getOccupancy");
      const searchoccu = new XMLHttpRequest();

      if (filter === null)
      {
        document.getElementById("manageOccupancy").style.display="none";
        viewUserAccount()
      }

      else{
        const search1 = "%" +filter + "%"
        console.log ("search: " + search1);
        searchoccu.open('POST', this.searchUrl, true);

      const searchdata = {
        "search": search1
      }

      console.log("search data: "+ JSON.stringify(searchdata))

      searchoccu.setRequestHeader("Content-Type", "application/json");
      searchoccu.onload = function () {
        movieArray= []
        movieArray = JSON.parse(searchoccu.responseText);
        console.log("array length" + movieArray.length);
        document.getElementById("manageOccupancy").style.display="none";
        document.getElementById("getOccupancy").style.display="block";
        

      const table = document.getElementById("getOccupancy");
      let occuCount = 0;
      let message = "";
      table.innerHTML = "";
      const totalOccu = occuArray.length;

      for (let count = 0; count < totalOccu; count++)
      {
          const id = occuArray[count]._id;
          const seatno = occuArray[count].seatno;
          const row = occuArray[count].row;
          const cell ='<td style="width: 30%;"><strong id="occu_id" style="display:none;">'+id+'</strong><a>'+seatno+'</a></td><td><a>'+row+'</a></td><td ><button item = '+count+' style="background-color:#333333a0; float:right;" onclick="occupancy.showOccuDetails(this)"><img src="./../images/edit.png" width="30px" height="30px"></td>'

          table.insertAdjacentHTML("beforeend", cell);
          occuCount++;
      }
      };
      searchoccu.send(JSON.stringify(searchdata));
    }

  }
}
const searchoccupancycontroller = new SearchOccupancyController("/searchoccu");