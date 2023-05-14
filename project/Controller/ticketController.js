class Ticket {
    constructor(ticketUrl) {
      this.ticketUrl = ticketUrl;
      this.ticket_array = [];
    }

    fetchTicketType()
    {
        const request = new XMLHttpRequest();
        request.open("GET", this.ticketUrl, true);
        console.log(request);
        request.onload = () => {
            // Get all the movies records into our movie array
            this.ticket_array = JSON.parse(request.responseText);
            console.log(this.ticket_array);
            // Call the function to display all movies tiles for "Now Showing"
            this.displayTicketType();
          };

          request.send();
    }

    displayTicketType()
    {
        const table = document.getElementById("getTicket");
        let mtCount = 0;
        let message = "";
        table.innerHTML = "";
        const totalmt = this.ticket_array.length;
        
        for (let count = 0; count < totalmt; count++)
        {
            const id = this.ticket_array[count]._id;
            const name = this.ticket_array[count].name;
            const age = this.ticket_array[count].age;
            const price = this.ticket_array[count].price;
            const cell = '<td>\
                            <strong id="mt_id" style="display:none;">\
                                '+id+'\
                            </strong>\
                            <a>\
                                '+name+'\
                            </a>\
                        </td>\
                        <td>\
                            <a>\
                                '+age+'\
                            </a>\
                        </td>\
                        <td>\
                            <a>\
                                '+price+'\
                            </a>\
                        </td>\
                        <td width="10%">\
                            <button item = '+count+' style="background-color:#333333a0;" onclick="ticket.showTicketTypeDetails(this)">\
                                <img src="./../images/edit.png" width="30px" height="30px">\
                            </button>\
                            <button item = '+count+' style="background-color:#333333a0;" onclick="ticket.suspendMovieTicket(this)">\
                                <img src="./../images/delete.png" width="30px" height="30px">\
                            </button>\    </td>'
            
            table.insertAdjacentHTML("beforeend", cell);
            mtCount++;
            
    }

    }
    
    addTicketType()
    {
    const addTicketType = new XMLHttpRequest();
    addTicketType.open('POST', this.ticketUrl, true);
  
      const name = document.getElementById("createTicketName").value;
      const age = document.getElementById("createTicketAge").value;
      const price = document.getElementById("createTicketPrice").value;
  
      const ticketTypeDetails = {
          "name": name,
          "age": age,
          "price": price
      }
  
      console.log(ticketTypeDetails)
  
      addTicketType.setRequestHeader("Content-Type", "application/json");
      addTicketType.onload = function () {
          const output = JSON.parse(addTicketType.responseText);
              alert("Seat added!");
              document.getElementById("createTicketName").value = "";
              document.getElementById("createTicketAge").value = "";
              document.getElementById("createTicketPrice").value = "";
              document.getElementById("createTickettable").style.display ="none";
              document.getElementById("manageMovieTicket").style.display="none";
              mMovieTicket();
          
      };
      addTicketType.send(JSON.stringify(ticketTypeDetails));
    }


    showTicketTypeDetails(element)
    {
        console.log(this.ticket_array);
        var item = element.getAttribute("item");
        var id = this.ticket_array[item]._id; 
        
        document.getElementById("updateTickettable").style.display ="block";
        document.getElementById("updatemtId").value = this.ticket_array[item]._id;
        document.getElementById("updateTicketName").value = this.ticket_array[item].name;
        document.getElementById("updateTicketAge").value = this.ticket_array[item].age;
        document.getElementById("updateTicketPrice").value = this.ticket_array[item].price;
    }
    
    updateTicketType(currentIndex)
    {
        var id = parseInt(document.getElementById("updatemtId").value);
        var currentIndex = -1;
    for (var i = 0; i < this.ticket_array.length; i++) {
        if (id == this.ticket_array[i]._id) {   
        currentIndex = i;
        break; // Exit the loop once a match is found
     }
    }
    const edit_mt_url = this.ticketUrl + "/" + id;
    const response = confirm("Are you sure you want to edit this ticket?");
    
    const name = document.getElementById("updateTicketName").value;
    const age = document.getElementById("updateTicketAge").value;
    const price = document.getElementById("updateTicketPrice").value;

    const editedmt = {
        _id: id,
        name: name,
        age: age,
        price: price
      };

      if (response == true) {
        const updatemt = new XMLHttpRequest();
        updatemt.open("PUT", edit_mt_url, true);
        updatemt.setRequestHeader("Content-Type", "application/json");

        this.ticket_array[currentIndex].name = name;
        this.ticket_array[currentIndex].age = age;
        this.ticket_array[currentIndex].price = price;

        updatemt.onload = function () {
            alert("The movie ticket information has been edited");
            document.getElementById("updateTickettable").style.display ="none";
            document.getElementById("manageMovieTicket").style.display ="none";

            mMovieTicket();
        };

        updatemt.send(JSON.stringify(editedmt));
        }



    }

    suspendMovieTicket(element)
    {
        var response = confirm("Are you sure you want to suspend this Movie Ticket?");
        if (response == true)
        {
            var item = element.getAttribute("item");
            var id = this.ticket_array[item]._id;
            var suspendticket = new XMLHttpRequest();

        var sus_mt_url = this.ticketUrl + "/" + id;
        console.log(id);


        suspendticket.open("DELETE", sus_mt_url); 
        suspendticket.onload = function () {
            alert("the screentime has been suspended");
            document.getElementById("manageMovieTicket").style.display="none";
            mMovieTicket();
        };
        suspendticket.send();
        }
        

    }

    openAddTicketModal(){
        document.getElementById("createTickettable").style.display ="block";
    }

    closeAddTicketModal(){
        document.getElementById("createTickettable").style.display ="none";
    }

    closeUpdateTicketModal(){
        document.getElementById("updateTickettable").style.display ="none";
    }

    fetchTicketType2()
    {
        const request = new XMLHttpRequest();
        request.open("GET", this.ticketUrl, true);
        console.log(request);
        request.onload = () => {
            // Get all the movies records into our movie array
            this.ticket_array = JSON.parse(request.responseText);
            console.log(this.ticket_array);
            // Call the function to display all movies tiles for "Now Showing"
            this.displayTicketType2();
          };

          request.send();
    }

    displayTicketType2()
    {
        const table = document.getElementById("TicketType");
        let mtCount = 0;
        let message = "";
        table.innerHTML = "";
        const totalmt = this.ticket_array.length;
        
        for (let count = 0; count < totalmt; count++)
        {
            const id = this.ticket_array[count]._id;
            const name = this.ticket_array[count].name;
            const age = this.ticket_array[count].age;
            const price = this.ticket_array[count].price;
            const cell = '<option value="'+name+'">'+name+'</option>\
                            <option id="ticketPrice1" value="'+price+'" style="display:none;">'+price+'</option>'
            
            table.insertAdjacentHTML("beforeend", cell);
            mtCount++;    
        }

    }
}

const ticket = new Ticket("/movieticket");