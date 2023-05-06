class Ticket {
    constructor(ticketUrl) {
      this.ticketUrl = ticketUrl;
      this.ticket_array = [];
    }

    openAddTicketModal(){
        document.getElementById("createTickettable").style.display ="block";
    }

    closeAddTicketModal(){
        document.getElementById("createTickettable").style.display ="none";
    }
}

const ticket = new Ticket("/ticket");