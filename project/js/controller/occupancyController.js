class Occupancy {
    constructor(occuUrl) {
      this.occuUrl = occuUrl;
      this.occuArray = [];
      this.row1 = "A";
      this.row2 = "B";
      this.row3 = "C";
      this.row4 = "D";
      this.row5 = "E";
    }

    fetchOccu() {
        const OccuRequest = new XMLHttpRequest();
        OccuRequest.open('GET', this.occuUrl, true);
        console.log(OccuRequest);
        // Use an arrow function to preserve the 'this' context
        OccuRequest.onload = () => {
            this.occuArray = JSON.parse(OccuRequest.responseText);
            console.log("ok");
            console.log(this.occuArray);
            this.displayOccu();
        };
    
        OccuRequest.send();
    }

    displayOccu() {
        const table = document.getElementById("getOccupancy");
        let occuCount = 0;
        let message = "";
        table.innerHTML = "";
        const totalOccu = this.occuArray.length;

        for (let count = 0; count < totalOccu; count++)
        {
            const id = this.occuArray[count]._id;
            const seatno = this.occuArray[count].seatno;
            const row = this.occuArray[count].row;
            const cell ='<td style="width: 30%;"><strong id="occu_id" style="display:none;">'+id+'</strong><a>'+seatno+'</a></td><td><a>'+row+'</a></td><td ><button item = '+count+' style="background-color:#333333a0; float:right;" onclick="occupancy.showOccuDetails(this)"><img src="./../images/edit.png" width="30px" height="30px"></td>'

            table.insertAdjacentHTML("beforeend", cell);
            occuCount++;
        }
    }

    showOccuDetails(element) {
        console.log(this.occuArray);
        var item = element.getAttribute("item");
        console.log(item);
        const currentIndex = item;

        document.getElementById("editOccupancytable").style.display ="block";
        document.getElementById("editSeatNo").value = this.occuArray[item].seatno;
        document.getElementById("editSeatRow").value = this.occuArray[item].row;
        document.getElementById("editOccu_id").value = this.occuArray[item]._id;
    }

    cancelOccupancyDetails(){
        document.getElementById("editOccupancytable").style.display ="none"; 
      }

      updateOccu(currentIndex) {

        var id = parseInt(document.getElementById("editOccu_id").value);

        console.log("id: "+ id);
        var currentIndex = -1;
        for (var i = 0; i < this.occuArray.length; i++) {
            if (id == this.occuArray[i]._id) {   
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

            console.log(this.occuArray[currentIndex]);
    
            //Update the movie object in the movieArray
            this.occuArray[currentIndex].seatno = seatno;
            this.occuArray[currentIndex].row = row;
    
            updateOccu.onload = function () {
                alert("Your occupancy information has been edited.");
            };
    
            // Send the updated movie object as a JSON string
            updateOccu.send(JSON.stringify(this.occuArray[currentIndex]));
        }
        document.getElementById("editOccupancytable").style.display ="none"; 
        occupancy.displayOccu();
      }

      addOccu() {
        const addOccu = new XMLHttpRequest();
        addOccu.open('POST', this.occuUrl, true);
    
        const seatno = document.getElementById("createSeatNumber").value;
        const row = document.getElementById("createSeatRow").value;
    
        const occuData = {
            "seatno": seatno,
            "row": row
        }
    
        console.log(occuData)
    
        addOccu.setRequestHeader("Content-Type", "application/json");
        addOccu.onload = function () {
            const output = JSON.parse(addOccu.responseText);
                alert("Seat added!");
                document.getElementById("createSeatNumber").value = "";
                document.getElementById("createOccupancytable").style.display ="none";
                document.getElementById("createSeatRow").value = "";
            
        };
        addOccu.send(JSON.stringify(occuData));
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
            this.occuArray = JSON.parse(OccuRequest.responseText);
            console.log("ok");
            console.log(this.occuArray);
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
        const totalRow = this.occuArray.length;
    
        for (let count = 0; count < totalRow; count++) {
          if (this.occuArray[count].row === row1) {
            const seatno = this.occuArray[count].seatno;
            const row = this.occuArray[count].row;
            const cell =
              '<button item="' + count +'" class="mapbtn"  id="' + count +'" onclick="seatmap.addSM(this)" >'+seatno+'</button><label style="display:none;" id="seatrow">'+row+'</label><button item="' + count +'" class="mapbtn"  id="' + count +'" style="display:none;" onclick="seatmap.suspendSM(this)" >'+seatno+'</button><button item="' + count +'" class="mapbtn"  id="' + count +'active" style="display:none;" onclick="seatmap.activeSM(this)" >'+seatno+'</button>';
    
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
        const totalRow = this.occuArray.length;
    
        for (let count = 0; count < totalRow; count++) {
          if (this.occuArray[count].row === row2) {
            const seatno = this.occuArray[count].seatno;
            const row = this.occuArray[count].row;
            const cell =
              '<button item="' + count +'" class="mapbtn"  id="' + count +'" onclick="seatmap.addSM(this)">'+seatno+'</button><label style="display:none;" id="seatrow">'+row+'</label>';
    
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
        const totalRow = this.occuArray.length;
    
        for (let count = 0; count < totalRow; count++) {
          if (this.occuArray[count].row === row3) {
            const seatno = this.occuArray[count].seatno;
            const row = this.occuArray[count].row;
            const cell =
              '<button item="' + count +'" class="mapbtn"  id="' + count +'" onclick="seatmap.addSM(this)">'+seatno+'</button><label style="display:none;" id="seatrow">'+row+'</label>';
    
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
        const totalRow = this.occuArray.length;
    
        for (let count = 0; count < totalRow; count++) {
          if (this.occuArray[count].row === row4) {
            const seatno = this.occuArray[count].seatno;
            const row = this.occuArray[count].row;
            const cell =
              '<button item="' + count +'" class="mapbtn"  id="' + count +'"  onclick="seatmap.addSM(this)">'+seatno+'</button><label style="display:none;" id="seatrow">'+row+'</label>';
    
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
        const totalRow = this.occuArray.length;
    
        for (let count = 0; count < totalRow; count++) {
          if (this.occuArray[count].row === row5) {
            const seatno = this.occuArray[count].seatno;
            const row = this.occuArray[count].row;
    
            const cell =
              '<button item="' + count +'"  id="' + count +'" class="mapbtn"  onclick="seatmap.addSM(this)">'+seatno+'</button><label style="display:none;" id="seatrow">'+row+'</label>';
    
            table.insertAdjacentHTML("beforeend", cell);
            RowCount++;
          }
        }
      }
}



const occupancy = new Occupancy("/occupancy");