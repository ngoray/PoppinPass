class SeatMap {
    constructor(smUrl) {
      this.smUrl = smUrl;
      this.smarray = [];
    }

    addSM(currentIndex) {
        const addSm = new XMLHttpRequest();
        addSm.open('POST', this.smUrl, true);
        var item = currentIndex.getAttribute("item");
        var id = currentIndex.getAttribute("id");     
    
        const seatno = occupancy.occuArray[item].seatno;
        const row = occupancy.occuArray[item].row;
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

    suspendSM(currentIndex){
      console.log("suspendsm has been called");
      var id = currentIndex.getAttribute("id");
      document.getElementById(id).style.backgroundColor = "red";  

    }
}

const seatmap = new SeatMap("/seatmap");