class SeatMap {
    constructor(smUrl) {
      this.smUrl = smUrl;
      this.smarray = [];
    }

    addSM() {
        const addSm = new XMLHttpRequest();
        addSm.open('POST', this.smUrl, true);
    
        const seatno = document.getElementById("seatno").value;
        const row = document.getElementById("seatrow").value;
        const roomnumber = document.getElementById("editRoomName").value;
    
        const smData = {
            "seatno": seatno,
            "row": row,
            "roomnumber": roomnumber
        }
    
        console.log(smData)
    
        addSm.setRequestHeader("Content-Type", "application/json");
        addSm.onload = function () {
            const output = JSON.parse(addSm.responseText);
                alert("Seat added!");
                document.getElementById("addCinemaSeats").style.display ="none";
                document.getElementById("seatMapContent").style.display ="block";
            
        };
        addSm.send(JSON.stringify(smData));
      }
}

const seatmap = new SeatMap("/seatmap");