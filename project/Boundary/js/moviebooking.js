let timebooked = [];

function returnHome(){
    document.getElementById('bookingpage').style.display="none";
    moviePage();
}

function check4LoginMovie(){
   if (sessionStorage.getItem("name") === null){
       alert("PLS LOGIN TO CONTINUE");
      document.getElementById('movieModal').style.display="none";
        document.getElementById('id01').style.display="block";
    }
    else 
    {
        document.getElementById('movieModal').style.display="none";
        var movietitle = document.getElementById("movieTitle").innerHTML;
        movietitle1 = movietitle.trim();
        console.log(movietitle1);
        var picture = document.getElementById("moviePoster").src;
        var fileName = picture.substring(picture.lastIndexOf('/')+1);
        fileName = fileName.replace(/%20/g, ' ');
        document.getElementById("bookingPoster").src='./../images/products/' + fileName;
        document.getElementById("summaryPoster").src='./../images/products/' + fileName;
        // allSpacesRemoved = movietitle.replaceAll(' ', '');
        
       
        bookMoviePage();
        screentime.fetchScreenTime4Cust(movietitle1);
    }
}

function viewTicketType(){
    document.getElementById('bookST').style.display="none";
    $("#bookTicketType").fadeIn()
    document.getElementById('bookTicketType').style.display="block";
    var time =document.getElementById('ticketDay').innerHTML;
    var day = document.getElementById('StTime').innerHTML;

    document.getElementById('summaryDay').innerHTML = day;
    document.getElementById('summaryTime').innerHTML= time;

    var lp = sessionStorage.getItem("loyaltypoints");
    console.log("lp: " + lp);
    document.getElementById("summaryPoints").innerHTML = lp;

    ticket.fetchTicketType2();
}

function viewSeatMap(){
    document.getElementById('bookTicketType').style.display="none";
    $("#bookSeatMap").fadeIn()
    document.getElementById('bookSeatMap').style.display="block";

    var TicketType = document.getElementById("TicketType").value;
    var quantity = document.getElementById("quant").value;
    var price = document.getElementById("ticketPrice1").innerHTML;
    console.log(price);
    
    var intValue = parseInt(price.substring(1)); // 7

    document.getElementById("summaryType").innerHTML = TicketType;
    document.getElementById("summaryQuantity").innerHTML = quantity;
    document.getElementById("summaryPrice").innerHTML = '$'+quantity*intValue;

    roomnum = document.getElementById("bookRoomName").innerHTML;
    seatmap.getRoomSeats4Cust(roomnum);
}

function viewMenu(){
    menu.getSnacks();
    document.getElementById('bookSeatMap').style.display="none";
    $("#menupage").fadeIn()
    document.getElementById('menupage').style.display="block";

}

function viewSummary(){
    document.getElementById('menupage').style.display="none";
    $("#movieBookingSum").fadeIn()
    document.getElementById('movieBookingSum').style.display="block";

}

function createTable() {
    // Get the reference to the table
    var table = document.getElementById("myTable");

    // Create a new table element
    var newTable = document.createElement("tr");

    // Clone the contents of the original table
    newTable.innerHTML = table.innerHTML;

    // Add the new table after the original table
    table.parentNode.insertBefore(newTable, table.nextSibling);
}

function bookingtiming(time){
    console.log("booking called")
    sessionStorage.setItem("timingbooked", time);
}

function handleCheckboxClick(event) {
    var checkbox = event.target;
    if (checkbox.checked) {
        var points = parseInt(sessionStorage.getItem("loyaltypoints"));
        var currentPT = parseInt(document.getElementById('summaryPoints').innerHTML);
        
        if (currentPT >= 100){
            console.log("Checkbox is checked");
            alert("checked");
            document.getElementById('movieBookingSum').style.display="none"
            document.getElementById("summaryPrice").innerHTML = "FREE (points redeemed)";
            newPT = currentPT - 100;
            document.getElementById("summaryPoints").innerHTML = newPT;
            $("#movieBookingSum").fadeIn()
            document.getElementById('movieBookingSum').style.display="block";
            checkbox.checked;
        }else if (points < 100){
            checkbox.checked = false;
            alert("HAHA LOSER")
        }

    }
    else if (checkbox.checked == false){
            alert("points has been returned");
            document.getElementById("summaryPoints").innerHTML = newPT + 100;
            document.getElementById("summaryPrice").innerHTML = document.getElementById("summaryPru").innerHTML;

            document.getElementById('movieBookingSum').style.display="none";
            $("#movieBookingSum").fadeIn()
            document.getElementById('movieBookingSum').style.display="block";
    }
  }

  