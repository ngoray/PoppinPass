class SeatMap {
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

  
  getRoomSeats(roomnum)
  {
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
      this.smarray = JSON.parse(grs.responseText);
      console.log(grs.responseText);
      console.log("ok");
      console.log(this.smarray);
      this.displayRowA(this.row1);
      this.displayRowB(this.row2);
      this.displayRowC(this.row3);
      this.displayRowD(this.row4);
      this.displayRowE(this.row5);


    }
    console.log(smData);
    grs.send(JSON.stringify(smData));
  }


  displayRowA(row1) {
    const table = document.getElementById("rowA1");
    let RowCount = 0;
    let message = "";

    table.innerHTML = "";
    const totalRow = this.smarray.length;

    for (let count = 0; count < totalRow; count++) {
      if (this.smarray[count].row === row1) {
        const seatno = this.smarray[count].seatno;
        const row = this.smarray[count].row;
        const id = this.smarray[count]._id;
        const cell =
          '<button item="' + count +'" class="mapbtn"  id="'+id+'" style="background-color:rgb(255, 130, 6);" onclick="seatmap.suspendSM(this)" >'+seatno+'</button><label style="display:none;" id="seatrow">'+row+'</label>';

        table.insertAdjacentHTML("beforeend", cell);
        RowCount++;
      }
    }
  }

  displayRowB(row2) {
    const table = document.getElementById("rowB1");
    let RowCount = 0;
    let message = "";

    table.innerHTML = "";
    const totalRow = this.smarray.length;

    for (let count = 0; count < totalRow; count++) {
      if (this.smarray[count].row === row2) {
        const seatno = this.smarray[count].seatno;
        const row = this.smarray[count].row;
        const id = this.smarray[count]._id;
        const cell =
        '<button item="' + count +'" class="mapbtn"  id="'+id+'" style="background-color:rgb(255, 130, 6);" onclick="seatmap.suspendSM(this)" >'+seatno+'</button><label style="display:none;" id="seatrow">'+row+'</label>';

        table.insertAdjacentHTML("beforeend", cell);
        RowCount++;
      }
    }
  }

  displayRowC(row3) {
    const table = document.getElementById("rowC1");
    let RowCount = 0;
    let message = "";

    table.innerHTML = "";
    const totalRow = this.smarray.length;

    for (let count = 0; count < totalRow; count++) {
      if (this.smarray[count].row === row3) {
        const seatno = this.smarray[count].seatno;
        const row = this.smarray[count].row;
        const id = this.smarray[count]._id;
        const cell =
        '<button item="' + count +'" class="mapbtn"  id="'+id+'" style="background-color:rgb(255, 130, 6);" onclick="seatmap.suspendSM(this)" >'+seatno+'</button><label style="display:none;" id="seatrow">'+row+'</label>';

        table.insertAdjacentHTML("beforeend", cell);
        RowCount++;
      }
    }
  }

  displayRowD(row4) {
    const table = document.getElementById("rowD1");
    let RowCount = 0;
    let message = "";

    table.innerHTML = "";
    const totalRow = this.smarray.length;

    for (let count = 0; count < totalRow; count++) {
      if (this.smarray[count].row === row4) {
        const seatno = this.smarray[count].seatno;
        const row = this.smarray[count].row;
        const id = this.smarray[count]._id;
        const cell =
        '<button item="' + count +'" class="mapbtn"  id="'+id+'" style="background-color:rgb(255, 130, 6);" onclick="seatmap.suspendSM(this)" >'+seatno+'</button><label style="display:none;" id="seatrow">'+row+'</label>';

        table.insertAdjacentHTML("beforeend", cell);
        RowCount++;
      }
    }
  }

  displayRowE(row5) {
    const table = document.getElementById("rowE1");
    let RowCount = 0;
    let message = "";

    table.innerHTML = "";
    const totalRow = this.smarray.length;

    for (let count = 0; count < totalRow; count++) {
      if (this.smarray[count].row === row5) {
        const seatno = this.smarray[count].seatno;
        const row = this.smarray[count].row;
        const id = this.smarray[count]._id;

        const cell =
        '<button item="' + count +'" class="mapbtn"  id="'+id+'" style="background-color:rgb(255, 130, 6);" onclick="seatmap.suspendSM(this)" >'+seatno+'</button><label style="display:none;" id="seatrow">'+row+'</label>';

        table.insertAdjacentHTML("beforeend", cell);
        RowCount++;
      }
    }
  }

 
  addSM(currentIndex) {
      const addSm = new XMLHttpRequest();
      addSm.open('POST', this.smUrl2, true);
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
      seatmap.addSM(element);
      document.getElementById(id).style.backgroundColor = "green";
    }
  }

  fetchSM() {
    const SmRequest = new XMLHttpRequest();
    SmRequest.open('GET', this.smUrl, true);
    console.log(SmRequest);
    // Use an arrow function to preserve the 'this' context
    SmRequest.onload = () => {
        this.smarray = JSON.parse(SmRequest.responseText);
        console.log("ok");
        console.log(this.smarray);
    };

    SmRequest.send();
  }
//NOT EDITTED
  displaySM() {
    const table = document.getElementById("getMovies");
        let movieCount = 0;
        let message = "";
        table.innerHTML = "";
        const totalmovies = this.movieArray.length;

        for (let count = 0; count < totalmovies; count++)
        {
            const id = this.movieArray[count]._id;
            const title = this.movieArray[count].title;
            const advice = this.movieArray[count].advice;
            const genre = this.movieArray[count].genre;
            const duration = this.movieArray[count].duration;


            const cell ='<td style="width: 20%;">\
                          <strong id="movie_id" style="display:none;">\
                              '+id+'\
                          </strong>\
                          <a>\
                            '+title+'\
                          </a>\
                        </td>\
                        <td>\
                          <a>\
                            '+genre+'\
                          </a>\
                        </td>\
                        <td>\
                          <button item = '+count+' style="background-color:#333333a0;" onclick="movies.showMovieDetails2(this)">\
                            <img src="./../images/edit.png" width="30px" height="30px">\
                        </td>'

            table.insertAdjacentHTML("beforeend", cell);
            movieCount++;
        }
  }

  closeSuspendCinemaSeat(){
    document.getElementById("suspendCinemaSeats").style.display="none";
    document.getElementById("corploggout").style.display ="block";
    document.getElementById("managerMenu").style.display ="block";
    document.getElementById("seatMapContent").style.display ="block";
    
  }

  getRoomSeats4Cust(roomnum)
  {
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
      this.smarray = JSON.parse(grs.responseText);
      console.log(grs.responseText);
      console.log("ok");
      console.log(this.smarray);
      this.displayRowA4Cust(this.row1);
      this.displayRowB4Cust(this.row2);
      this.displayRowC4Cust(this.row3);
      this.displayRowD4Cust(this.row4);
      this.displayRowE4Cust(this.row5);


    }
    console.log(smData);
    grs.send(JSON.stringify(smData));
  }

  displayRowA4Cust(row1) {
    const table = document.getElementById("BrowA");
    let RowCount = 0;
    let message = "";

    table.innerHTML = "";
    const totalRow = this.smarray.length;

    for (let count = 0; count < totalRow; count++) {
      if (this.smarray[count].row === row1) {
        const seatno = this.smarray[count].seatno;
        const row = this.smarray[count].row;
        const id = this.smarray[count]._id;
        const cell =
          '<button item="' + count +'" class="mapbtn" try="'+seatno+'" id="'+id+'" style="background-color:rgb(255, 130, 6);" onclick="seatmap.updateSM(this); >'+seatno+'</button><label style="display:none;" id="seatrow">'+row+'</label>';

        table.insertAdjacentHTML("beforeend", cell);
        RowCount++;
      }
    }
  }

  displayRowB4Cust(row2) {
    const table = document.getElementById("BrowB");
    let RowCount = 0;
    let message = "";

    table.innerHTML = "";
    const totalRow = this.smarray.length;

    for (let count = 0; count < totalRow; count++) {
      if (this.smarray[count].row === row2) {
        const seatno = this.smarray[count].seatno;
        const row = this.smarray[count].row;
        const id = this.smarray[count]._id;
        const cell =
        '<button item="' + count +'" class="mapbtn" try="'+seatno+'" id="'+id+'" style="background-color:rgb(255, 130, 6);" onclick="seatmap.updateSM(this); >'+seatno+'</button><label style="display:none;" id="seatrow">'+row+'</label>';

        table.insertAdjacentHTML("beforeend", cell);
        RowCount++;
      }
    }
  }

  displayRowC4Cust(row3) {
    const table = document.getElementById("BrowC");
    let RowCount = 0;
    let message = "";

    table.innerHTML = "";
    const totalRow = this.smarray.length;

    for (let count = 0; count < totalRow; count++) {
      if (this.smarray[count].row === row3) {
        const seatno = this.smarray[count].seatno;
        const row = this.smarray[count].row;
        const id = this.smarray[count]._id;
        const cell =
        '<button item="' + count +'" class="mapbtn" try="'+seatno+'" id="'+id+'" style="background-color:rgb(255, 130, 6);" onclick="seatmap.updateSM(this);" >'+seatno+'</button><label style="display:none;" id="seatrow">'+row+'</label>';

        table.insertAdjacentHTML("beforeend", cell);
        RowCount++;
      }
    }
  }

  displayRowD4Cust(row4) {
    const table = document.getElementById("BrowD");
    let RowCount = 0;
    let message = "";

    table.innerHTML = "";
    const totalRow = this.smarray.length;

    for (let count = 0; count < totalRow; count++) {
      if (this.smarray[count].row === row4) {
        const seatno = this.smarray[count].seatno;
        const row = this.smarray[count].row;
        const id = this.smarray[count]._id;
        const cell =
        '<button item="' + count +'" class="mapbtn"  try="'+seatno+'" id="'+id+'" style="background-color:rgb(255, 130, 6);" onclick="seatmap.updateSM(this); >'+seatno+'</button><label style="display:none;" id="seatrow">'+row+'</label>';

        table.insertAdjacentHTML("beforeend", cell);
        RowCount++;
      }
    }
  }

  displayRowE4Cust(row5) {
    const table = document.getElementById("BrowE");
    let RowCount = 0;
    let message = "";

    table.innerHTML = "";
    const totalRow = this.smarray.length;

    for (let count = 0; count < totalRow; count++) {
      if (this.smarray[count].row === row5) {
        const seatno = this.smarray[count].seatno;
        const row = this.smarray[count].row;
        const id = this.smarray[count]._id;

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