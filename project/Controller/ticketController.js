let ticket_array = [];
class Ticket {
    constructor(ticketUrl) {
      this.ticketUrl = ticketUrl;
      this.ticket_array = [];
    }


    showTicketTypeDetails(element){
        console.log(ticket_array);
        var item = element.getAttribute("item");
        var id = ticket_array[item]._id; 
        
        document.getElementById("updateTickettable").style.display ="block";
        document.getElementById("updatemtId").value = ticket_array[item]._id;
        document.getElementById("updateTicketName").value = ticket_array[item].name;
        document.getElementById("updateTicketAge").value = ticket_array[item].age;
        document.getElementById("updateTicketPrice").value = ticket_array[item].price;
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
            // Call the function to generate all movies tiles for "Now Showing"
            this.generateTicketType2();
          };

          request.send();
    }

    generateTicketType2()
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

class CreateTicketController {
    constructor(ticketUrl) {
        this.ticketUrl = ticketUrl;
      }

    addTicketType(){
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
                alert("Ticket added!");
                document.getElementById("createTicketName").value = "";
                document.getElementById("createTicketAge").value = "";
                document.getElementById("createTicketPrice").value = "";
                document.getElementById("createTickettable").style.display ="none";
                document.getElementById("manageMovieTicket").style.display="none";
                mMovieTicket();
            
        };
        addTicketType.send(JSON.stringify(ticketTypeDetails));
    }
}
const createticketcontroller = new CreateTicketController("/movieticket");

class ViewTicketController {
    constructor(ticketUrl) {
        this.ticketUrl = ticketUrl;
      }

    fetchTicketType(){
        const request = new XMLHttpRequest();
        request.open("GET", this.ticketUrl, true);
        console.log(request);
        request.onload = () => {
            // Get all the movies records into our movie array
            ticket_array = JSON.parse(request.responseText);
            console.log(ticket_array);
            // Call the function to generate all movies tiles for "Now Showing"
            generateTicketType();
          };

          request.send();
    }
}
const viewticketcontroller = new ViewTicketController("/movieticket");

class UpdateTicketController {
    constructor(ticketUrl) {
        this.ticketUrl = ticketUrl;
      }
      
    updateTicketType(currentIndex) {
            var id = parseInt(document.getElementById("updatemtId").value);
            var currentIndex = -1;
            for (var i = 0; i < ticket_array.length; i++) {
                if (id == ticket_array[i]._id) {   
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
  
            ticket_array[currentIndex].name = name;
            ticket_array[currentIndex].age = age;
          ticket_array[currentIndex].price = price;
  
          updatemt.onload = function () {
              alert("The movie ticket information has been edited");
              document.getElementById("updateTickettable").style.display ="none";
              document.getElementById("manageMovieTicket").style.display ="none";
  
              mMovieTicket();
          };
  
          updatemt.send(JSON.stringify(editedmt));
          }
  
      }
}
const updateticketcontroller = new UpdateTicketController("/movieticket");

class SuspendTicketController {
    constructor(ticketUrl) {
        this.ticketUrl = ticketUrl;
      }

    suspendMovieTicket(element){
          var response = confirm("Are you sure you want to suspend this Movie Ticket?");
          if (response == true)
          {
              var item = element.getAttribute("item");
              var id = ticket_array[item]._id;
              var suspendticket = new XMLHttpRequest();
  
          var sus_mt_url = this.ticketUrl + "/" + id;
          console.log(id);
  
  
          suspendticket.open("DELETE", sus_mt_url); 
          suspendticket.onload = function () {
              alert("the ticket has been suspended");
              document.getElementById("manageMovieTicket").style.display="none";
              mMovieTicket();
          };
          suspendticket.send();
          }
          
  
    }
}
const suspendticketcontroller = new SuspendTicketController("/movieticket");

class SearchTicketController {
    constructor(ticketUrl, searchUrl) {
        this.ticketUrl = ticketUrl;
        this.searchUrl = searchUrl;
        this.ticket_array = [];
      }


    searchTicketType(){
        var input, filter, table, tr, td, a, i, txtValue;
      input = document.getElementById("tickettypeSearch");
      filter = input.value.toUpperCase();
      table = document.getElementById("getticketType");
      const searchTT = new XMLHttpRequest();

      if (filter === null)
      {
        document.getElementById("viewticketType").style.display="none";
        viewUserAccount()
      }

      else{
        const search1 = "%" +filter + "%"
        console.log ("search: " + search1);
        searchTT.open('POST', this.searchUrl, true);

      const searchdata = {
        "search": search1
      }

      console.log("search data: "+ JSON.stringify(searchdata))

      searchTT.setRequestHeader("Content-Type", "application/json");
      searchTT.onload = function () {
        ticket_array= []
        ticket_array = JSON.parse(searchTT.responseText);
        console.log("array length" + ticket_array.length);
        document.getElementById("getUserProfile").style.display="none";
        document.getElementById("getSearchProfile").style.display="block";
        

        const table = document.getElementById("getUser");
        let ttCount = 0;
        let message = "";
        table.innerHTML = "";
        const totaltt = ticket_array.length;

      for (let count = 0; count < totaltt; count++)
      {
          const id = ticket_array[count]._id;
          const name = ticket_array[count].name;
          const age = ticket_array[count].age;
          const price = ticket_array[count].price;
          
            searchTicketType();
          
          table.insertAdjacentHTML("beforeend", cell);
          ttCount++;
          
  }
      };
      searchTT.send(JSON.stringify(searchdata));
    }

      }
}
const searchticketcontroller = new SearchTicketController("/movieticket","/searchticket");