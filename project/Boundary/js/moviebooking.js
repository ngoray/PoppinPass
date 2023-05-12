function check4LoginMovie(){
    // if (sessionStorage.getItem("name") === null){
    //     alert("PLS LOGIN TO CONTINUE");
    //     document.getElementById('movieModal').style.display="none";
    //     document.getElementById('id01').style.display="block";
    // }
    // else 
    // {
        document.getElementById('movieModal').style.display="none";
        bookMoviePage();
    // }
}

function viewTicketType(){
    document.getElementById('bookST').style.display="none";
    document.getElementById('bookTicketType').style.display="block";   
}

function viewSeatMap(){
    document.getElementById('bookTicketType').style.display="none";
    document.getElementById('bookSeatMap').style.display="block";   
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