let history_array = [];
let chartInstances = {}; // Keep track of chart instances

class TransactionHistory {
    constructor(historyUrl, gethistoryUrl) {
      this.historyUrl = historyUrl;
      this.gethistoryUrl = gethistoryUrl;

    }
    viewMoreDetails(element){
        
      document.getElementById('viewTransactionHistory').style.display = "block";
      
      document.getElementById("viewTransactionId").innerHTML = history_array[element]._id;
      document.getElementById("viewTHTitle").innerHTML = history_array[element].movietitle;
      document.getElementById("viewTHTime").innerHTML = history_array[element].screentime;
      document.getElementById("viewTHCinema").innerHTML = history_array[element].roomno;
      document.getElementById("viewTHSeat").innerHTML = history_array[element].seatno;
      document.getElementById("viewTHTicketType").innerHTML = history_array[element].tickettype;
      document.getElementById("viewTHFoodName").innerHTML = history_array[element].foodname;
      document.getElementById("viewTHTotalPrice").innerHTML = history_array[element].totalprice;
      
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
          updatecustomerloyaltypointcontroller.updateLoyaltyPoints();
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
              // Call the function to generate all movies tiles for "Now Showing"
              generateHistory();
            };
  
            request.send(JSON.stringify(historyData));
      }


}
const viewtransactionhistorycontroller = new ViewTransactionHistoryController("/history","viewhistory");

class GenerateDailyTicketsBookedController{

  constructor(dailyUrl) {
    this.dailyUrl = dailyUrl;
  }

 fetchDailyTickGraph(){
          
          const request = new XMLHttpRequest();
          request.open("GET", this.dailyUrl, true);
          request.setRequestHeader('Content-Type', 'application/json');

          request.onload = () => {
            if (request.status === 200) {
              const data = JSON.parse(request.responseText);
              console.log(data);
              generateDailyTickGraph(data);
            } else {
              console.error(`Request failed with status ${request.status}`);
            }
          };
  
            request.send();
      }

}
const  generatedailyticketsbookedcontroller = new GenerateDailyTicketsBookedController("/ticketdaily");

class GenerateWeeklyTicketsBookedController{

  constructor(weeklyUrl) {
    this.weeklyUrl = weeklyUrl;
  }

  fetchWeeklyTickGraph(){
          
          const request = new XMLHttpRequest();
          request.open("GET", this.weeklyUrl, true);
          request.setRequestHeader('Content-Type', 'application/json');

          request.onload = () => {
            if (request.status === 200) {
              const data = JSON.parse(request.responseText);
              console.log(data);
              generateWeeklyTickGraph(data);
            } else {
              console.error(`Request failed with status ${request.status}`);
            }
          };
  
            request.send();
      }

}
const  generateweeklyticketsbookedcontroller = new GenerateWeeklyTicketsBookedController("/ticketweekly");

class GenerateMonthlyTicketsBookedController{

  constructor(monthlyUrl) {
    this.monthlyUrl = monthlyUrl;
  }

    fetchMonthlyTickGraph(){
          
          const request = new XMLHttpRequest();
          request.open("GET", this.monthlyUrl, true);
          request.setRequestHeader('Content-Type', 'application/json');

          request.onload = () => {
            if (request.status === 200) {
              const data = JSON.parse(request.responseText);
              console.log(data);
              generateMonthlyTickGraph(data);
            } else {
              console.error(`Request failed with status ${request.status}`);
            }
          };
  
            request.send();
      }

}
const  generatemonthlyticketsbookedcontroller = new GenerateMonthlyTicketsBookedController("/ticketmonthly");

class GenerateDailyFoodSalesController{

  constructor(dailyFoodUrl) {
    this.dailyFoodUrl = dailyFoodUrl;
  }

  fetchDailyFoodGraph(){
          
          const request = new XMLHttpRequest();
          request.open("GET", this.dailyFoodUrl, true);
          request.setRequestHeader('Content-Type', 'application/json');

          request.onload = () => {
            if (request.status === 200) {
              const data = JSON.parse(request.responseText);
              console.log(data);
              generateDailyFoodGraph(data);
            } else {
              console.error(`Request failed with status ${request.status}`);
            }
          };
  
            request.send();
      }

}
const  generatedailyfoodsalescontroller = new GenerateDailyFoodSalesController("/fooddaily");

class GenerateWeeklyFoodSalesController{

  constructor(weeklyFoodUrl) {
    this.weeklyFoodUrl = weeklyFoodUrl;
  }
    fetchWeeklyFoodGraph(){
          
          const request = new XMLHttpRequest();
          request.open("GET", this.weeklyFoodUrl, true);
          request.setRequestHeader('Content-Type', 'application/json');

          request.onload = () => {
            if (request.status === 200) {
              const data = JSON.parse(request.responseText);
              console.log(data);
              generateWeeklyFoodGraph(data);
            } else {
              console.error(`Request failed with status ${request.status}`);
            }
          };
  
            request.send();
      }

}
const  generateweeklyfoodsalescontroller = new GenerateWeeklyFoodSalesController("/foodweekly");

class GenerateMonthlyFoodSalesController{

  constructor(monthlyFoodUrl) {
    this.monthlyFoodUrl = monthlyFoodUrl;
  }

  fetchMonthlyFoodGraph(){
          
          const request = new XMLHttpRequest();
          request.open("GET", this.monthlyFoodUrl, true);
          request.setRequestHeader('Content-Type', 'application/json');

          request.onload = () => {
            if (request.status === 200) {
              const data = JSON.parse(request.responseText);
              console.log(data);
              generateMonthlyFoodGraph(data);
            } else {
              console.error(`Request failed with status ${request.status}`);
            }
          };
  
            request.send();
      }

}
const  generatemonthlyfoodsalescontroller = new GenerateMonthlyFoodSalesController("/foodmonthly");

class ViewReportController{
  constructor(yearlyfoodUrl, yearlyticketUrl) {
    this.yearlyfoodUrl = yearlyfoodUrl;
    this.yearlyticketUrl = yearlyticketUrl;
  }

  fetchYearlyTicketGraph(){
    const request1 = new XMLHttpRequest();

    request1.open("GET", this.yearlyticketUrl, true);

    request1.setRequestHeader('Content-Type', 'application/json');


    request1.onload = () => {
      if (request1.status === 200) {
        const data = JSON.parse(request1.responseText);
        console.log(data);
        generateYearlyTicketGraph(data);
      } else {
        console.error(`Request failed with status ${request1.status}`);
      }
    };


    request1.send();
  }

  fetchYearlyFoodGraph(){
          
    const request = new XMLHttpRequest();

    request.open("GET", this.yearlyfoodUrl, true);

    request.setRequestHeader('Content-Type', 'application/json');


    request.onload = () => {
      if (request.status === 200) {
        const data = JSON.parse(request.responseText);
        console.log(data);
        generateYearlyFoodGraph(data);
      } else {
        console.error(`Request failed with status ${request.status}`);
      }
    };

    request.send();
  }
}
const viewreportcontroller = new ViewReportController("/viewyearlyfood", "/viewyearlyticket")
