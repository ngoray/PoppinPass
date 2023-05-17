let history_array = [];

class TransactionHistory {
    constructor(historyUrl, gethistoryUrl) {
      this.historyUrl = historyUrl;
      this.gethistoryUrl = gethistoryUrl;
      this.history_array = [];

    }
}
const transactionhistory = new TransactionHistory("/history","viewhistory");

class CreateTransactionHistoryController {

  constructor(historyUrl, gethistoryUrl) {
    this.historyUrl = historyUrl;
    this.gethistoryUrl = gethistoryUrl;
  }

  addTransactionHistory() {
    
    const addHistory = new XMLHttpRequest();
    addHistory.open('POST', this.historyUrl, true);
    
    const accountname = sessionStorage.getItem("name");
    const movietitle = document.getElementById("summaryTitle").innerHTML;
    const tickettype = document.getElementById("summaryType").innerHTML;
    const screentime = document.getElementById("summaryTime").innerHTML+',' + document.getElementById("summaryDay").innerHTML;
    const roomno = document.getElementById("summaryRoom").innerHTML;
    const seatno = document.getElementById("summarySeat").innerHTML;
    const foodname = document.getElementById("summaryFood").innerHTML;
    const totalprice = document.getElementById("summaryPrice").innerHTML;
    
    
    const historyData = {
        "accountname": accountname,
        "movietitle": movietitle,
        "tickettype": tickettype,
        "screentime": screentime,
        "roomno": roomno,
        "seatno": seatno,
        "foodname": foodname,
        "totalprice": totalprice
    }
    
        console.log(historyData)
    
        addHistory.setRequestHeader("Content-Type", "application/json");
        addHistory.onload = function () {
          alert("Transaction Successful");
          useraccount.updateLoyaltyPoints();
          document.getElementById('movieBookingSum').style.display="none";
          profilePage();
        };
        addHistory.send(JSON.stringify(historyData));
    }

}
const createtransactionhistorycontroller = new CreateTransactionHistoryController("/history","viewhistory");

class ViewTransactionHistoryController {

  constructor(historyUrl, gethistoryUrl) {
    this.historyUrl = historyUrl;
    this.gethistoryUrl = gethistoryUrl;

  }

  fetchTransactionHistory(currentName)
      {
          currentName = sessionStorage.getItem("name");
          
          const request = new XMLHttpRequest();
          request.open("POST", this.gethistoryUrl, true);
          request.setRequestHeader('Content-Type', 'application/json');

          const historyData = {
            "accountname": currentName
        }
        console.log(JSON.stringify(historyData));

          request.onload = () => {
              // Get all the movies records into our movie array
              history_array = JSON.parse(request.responseText);
              console.log(history_array);
              // Call the function to display all movies tiles for "Now Showing"
              transactionhistory.displayHistory();
            };
  
            request.send(JSON.stringify(historyData));
      }
  
  displayHistory()
      {
          const table = document.getElementById("transactionTable")
          let hCount = 0;
          let message = "";
          table.innerHTML = "";
          const totalhistory = history_array.length;
          
          for (let count = 0; count < totalhistory; count++)
          {
              const id = history_array[count]._id;
              const date = history_array[count].date;
              const cell = '<div  style="background-color: #333;">\
              <table class="center">\
                <tr>\
                  <td>\
                    <h5>ID</h5><h5 id="historyID">'+id+'</h5>\
                  </td>\
                  <td> \
                    <h5>Date</h5><h5 id="historyDate">'+date+'</h5>\
                  </td>\
                  <td><button item='+count+' class="button3"  onclick ="transactionhistory.viewMoreDetails('+count+');" style="float: right;cursor: pointer;"><img src="./../../images/view.png" style="padding: 10px; float: right;"></button></td>\
                </tr>\
              </table>\
            </div>\
            <br>'
              table.insertAdjacentHTML("beforeend", cell);   
          }
  
          hCount++; 
      }

}
const viewtransactionhistorycontroller = new ViewTransactionHistoryController("/history","viewhistory");