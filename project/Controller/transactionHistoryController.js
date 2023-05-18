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
              // Call the function to generate all movies tiles for "Now Showing"
              this.generateHistory();
            };
  
            request.send(JSON.stringify(historyData));
      }
  
  generateHistory()
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

class GenerateDailyTicketsBookedController{

  constructor(dailyUrl) {
    this.dailyUrl = dailyUrl;
  }

    // Method to generate the graph using Chart.js
    generateDailyTickGraph(data) {
      var labels = data.map(entry => entry.date);
      var ticketData = data.map(entry => entry.tickets_booked);
  
      // Get the canvas element
      var ctx = document.getElementById('DailyTickChart').getContext('2d');

      // Destroy the existing chart instance if it exists
      if (chartInstances['DailyTickChart']) {
        chartInstances['DailyTickChart'].destroy();
      }

      console.log(chartInstances);
  
      // Create the chart
      var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Tickets Booked',
            data: ticketData,
            backgroundColor: 'rgb(255, 130, 6)',
            borderColor: 'rgb(255, 130, 6)',
            borderWidth: 1,
            barThickness: 30,
            font:{size: 20}
          }]
        },
        options: {
          responsive: false,
          maintainAspectRatio: false,
          scales: {
            x: {
              title: {
                display: true,
                text: 'Date',
                color: 'white',
                font: {
                  size: 16 // Change the font size of the y-axis tick labels
                }
              },
              ticks: {
                color: 'white', // Change the color of the x-axis tick labels to white
                font: {
                  size: 16 // Change the font size of the y-axis tick labels
                }
              }
            },
            
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Quantity',
                color: 'white',
                font: {
                  size: 16 // Change the font size of the y-axis tick labels
                }
              },
              ticks: {
                color: 'white', // Change the color of the x-axis tick labels to white
                font: {
                  size: 16 // Change the font size of the y-axis tick labels
                }
              }
            }
          },
          plugins: {
            legend: {
              labels: {
                color: 'white', // Change the color of the legend labels to white
                font: {
                  size: 16 // Change the font size of the legend labels
                }
              }
            }
          }
        }
      });
    }

    fetchDailyTickGraph(){
          
          const request = new XMLHttpRequest();
          request.open("GET", this.dailyUrl, true);
          request.setRequestHeader('Content-Type', 'application/json');

          request.onload = () => {
            if (request.status === 200) {
              const data = JSON.parse(request.responseText);
              console.log(data);
              this.generateDailyTickGraph(data);
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

    // Method to generate the graph using Chart.js
    generateWeeklyTickGraph(data) {
      var labels = data.map(entry => entry.week_number);
      var ticketData = data.map(entry => entry.total_tickets_booked);
  
      // Get the canvas element
      var ctx = document.getElementById('WeeklyTickChart').getContext('2d');

      // Destroy the existing chart instance if it exists
      if (chartInstances['WeeklyTickChart']) {
        chartInstances['WeeklyTickChart'].destroy();
      }

      
      console.log(chartInstances);
  
      // Create the chart
      var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Weekly Report of Tickets Booked',
            data: ticketData,
            backgroundColor: 'rgb(255, 130, 6)',
            borderColor: 'rgb(255, 130, 6)',
            borderWidth: 1,
            barThickness: 30,
            font:{size: 20}
          }]
        },
        options: {
          responsive: false,
          maintainAspectRatio: false,
          scales: {
            x: {
              title: {
                display: true,
                text: 'Week',
                color: 'white',
                font: {
                  size: 16 // Change the font size of the y-axis tick labels
                }
              },
              ticks: {
                color: 'white', // Change the color of the x-axis tick labels to white
                font: {
                  size: 16 // Change the font size of the y-axis tick labels
                }
              }
            },
            
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Quantity',
                color: 'white',
                font: {
                  size: 16 // Change the font size of the y-axis tick labels
                }
              },
              ticks: {
                color: 'white', // Change the color of the x-axis tick labels to white
                font: {
                  size: 16 // Change the font size of the y-axis tick labels
                }
              }
            }
          },
          plugins: {
            legend: {
              labels: {
                color: 'white', // Change the color of the legend labels to white
                font: {
                  size: 16 // Change the font size of the legend labels
                }
              }
            }
          }
        }
      });
    }

    fetchWeeklyTickGraph(){
          
          const request = new XMLHttpRequest();
          request.open("GET", this.weeklyUrl, true);
          request.setRequestHeader('Content-Type', 'application/json');

          request.onload = () => {
            if (request.status === 200) {
              const data = JSON.parse(request.responseText);
              console.log(data);
              this.generateWeeklyTickGraph(data);
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

    // Method to generate the graph using Chart.js
    generateMonthlyTickGraph(data) {
      var labels = data.map(entry => entry.Month);
      var ticketData = data.map(entry => entry.Total_Tickets_Booked);
  
      // Get the canvas element
      var ctx = document.getElementById('MonthlyTickChart').getContext('2d');

      // Destroy the existing chart instance if it exists
      if (chartInstances['MonthlyTickChart']) {
        chartInstances['MonthlyTickChart'].destroy();
      }

      
      console.log(chartInstances);
  
      // Create the chart
      var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Monthly Report of Tickets Booked',
            data: ticketData,
            backgroundColor: 'rgb(255, 130, 6)',
            borderColor: 'rgb(255, 130, 6)',
            borderWidth: 1,
            barThickness: 30,
            font:{size: 20}
          }]
        },
        options: {
          responsive: false,
          maintainAspectRatio: false,
          scales: {
            x: {
              title: {
                display: true,
                text: 'Month',
                color: 'white',
                font: {
                  size: 16 // Change the font size of the y-axis tick labels
                }
              },
              ticks: {
                color: 'white', // Change the color of the x-axis tick labels to white
                font: {
                  size: 16 // Change the font size of the y-axis tick labels
                }
              }
            },
            
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Quantity',
                color: 'white',
                font: {
                  size: 16 // Change the font size of the y-axis tick labels
                }
              },
              ticks: {
                color: 'white', // Change the color of the x-axis tick labels to white
                font: {
                  size: 16 // Change the font size of the y-axis tick labels
                }
              }
            }
          },
          plugins: {
            legend: {
              labels: {
                color: 'white', // Change the color of the legend labels to white
                font: {
                  size: 16 // Change the font size of the legend labels
                }
              }
            }
          }
        }
      });
    }

    fetchMonthlyTickGraph(){
          
          const request = new XMLHttpRequest();
          request.open("GET", this.monthlyUrl, true);
          request.setRequestHeader('Content-Type', 'application/json');

          request.onload = () => {
            if (request.status === 200) {
              const data = JSON.parse(request.responseText);
              console.log(data);
              this.generateMonthlyTickGraph(data);
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

    // Method to generate the graph using Chart.js
    generateDailyFoodGraph(data) {
      var labels = data.map(entry => entry.Date);
      var ticketData = data.map(entry => entry.fooditems_sold);
  
      // Get the canvas element
      var ctx = document.getElementById('DailyFoodChart').getContext('2d');

      // Destroy the existing chart instance if it exists
      if (chartInstances['DailyFoodChart']) {
        chartInstances['DailyFoodChart'].destroy();
      }

      
      console.log(chartInstances);
  
      // Create the chart
      var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Daily Report of Food Sales',
            data: ticketData,
            backgroundColor: 'rgb(255, 130, 6)',
            borderColor: 'rgb(255, 130, 6)',
            borderWidth: 1,
            barThickness: 30,
            font:{size: 20}
          }]
        },
        options: {
          responsive: false,
          maintainAspectRatio: false,
          scales: {
            x: {
              title: {
                display: true,
                text: 'Day',
                color: 'white',
                font: {
                  size: 16 // Change the font size of the y-axis tick labels
                }
              },
              ticks: {
                color: 'white', // Change the color of the x-axis tick labels to white
                font: {
                  size: 16 // Change the font size of the y-axis tick labels
                }
              }
            },
            
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Food Item',
                color: 'white',
                font: {
                  size: 16 // Change the font size of the y-axis tick labels
                }
              },
              ticks: {
                color: 'white', // Change the color of the x-axis tick labels to white
                font: {
                  size: 16 // Change the font size of the y-axis tick labels
                }
              }
            }
          },
          plugins: {
            legend: {
              labels: {
                color: 'white', // Change the color of the legend labels to white
                font: {
                  size: 16 // Change the font size of the legend labels
                }
              }
            }
          }
        }
      });
    }

    fetchDailyFoodGraph(){
          
          const request = new XMLHttpRequest();
          request.open("GET", this.dailyFoodUrl, true);
          request.setRequestHeader('Content-Type', 'application/json');

          request.onload = () => {
            if (request.status === 200) {
              const data = JSON.parse(request.responseText);
              console.log(data);
              this.generateDailyFoodGraph(data);
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

    // Method to generate the graph using Chart.js
    generateWeeklyFoodGraph(data) {
      var labels = data.map(entry => entry.week_number);
      var ticketData = data.map(entry => entry.fooditems_sold);
  
      // Get the canvas element
      var ctx = document.getElementById('WeeklyFoodChart').getContext('2d');

      // Destroy the existing chart instance if it exists
      if (chartInstances['WeeklyFoodChart']) {
        chartInstances['WeeklyFoodChart'].destroy();
      }

      
      console.log(chartInstances);
  
      // Create the chart
      var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Weekly Report of Food Sales',
            data: ticketData,
            backgroundColor: 'rgb(255, 130, 6)',
            borderColor: 'rgb(255, 130, 6)',
            borderWidth: 1,
            barThickness: 30,
            font:{size: 20}
          }]
        },
        options: {
          responsive: false,
          maintainAspectRatio: false,
          scales: {
            x: {
              title: {
                display: true,
                text: 'Week',
                color: 'white',
                font: {
                  size: 16 // Change the font size of the y-axis tick labels
                }
              },
              ticks: {
                color: 'white', // Change the color of the x-axis tick labels to white
                font: {
                  size: 16 // Change the font size of the y-axis tick labels
                }
              }
            },
            
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Food Item',
                color: 'white',
                font: {
                  size: 16 // Change the font size of the y-axis tick labels
                }
              },
              ticks: {
                color: 'white', // Change the color of the x-axis tick labels to white
                font: {
                  size: 16 // Change the font size of the y-axis tick labels
                }
              }
            }
          },
          plugins: {
            legend: {
              labels: {
                color: 'white', // Change the color of the legend labels to white
                font: {
                  size: 16 // Change the font size of the legend labels
                }
              }
            }
          }
        }
      });
    }

    fetchWeeklyFoodGraph(){
          
          const request = new XMLHttpRequest();
          request.open("GET", this.weeklyFoodUrl, true);
          request.setRequestHeader('Content-Type', 'application/json');

          request.onload = () => {
            if (request.status === 200) {
              const data = JSON.parse(request.responseText);
              console.log(data);
              this.generateWeeklyFoodGraph(data);
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

    // Method to generate the graph using Chart.js
    generateMonthlyFoodGraph(data) {
      var labels = data.map(entry => entry.month);
      var ticketData = data.map(entry => entry.fooditems_sold);
  
      // Get the canvas element
      var ctx = document.getElementById('MonthlyFoodChart').getContext('2d');

      // Destroy the existing chart instance if it exists
      if (chartInstances['MonthlyFoodChart']) {
        chartInstances['MonthlyFoodChart'].destroy();
      }

      
      console.log(chartInstances);
  
      // Create the chart
      var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Monthly Report of Food Sales',
            data: ticketData,
            backgroundColor: 'rgb(255, 130, 6)',
            borderColor: 'rgb(255, 130, 6)',
            borderWidth: 1,
            barThickness: 30,
            font:{size: 20}
          }]
        },
        options: {
          responsive: false,
          maintainAspectRatio: false,
          scales: {
            x: {
              title: {
                display: true,
                text: 'Monthly',
                color: 'white',
                font: {
                  size: 16 // Change the font size of the y-axis tick labels
                }
              },
              ticks: {
                color: 'white', // Change the color of the x-axis tick labels to white
                font: {
                  size: 16 // Change the font size of the y-axis tick labels
                }
              }
            },
            
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Food Item',
                color: 'white',
                font: {
                  size: 16 // Change the font size of the y-axis tick labels
                }
              },
              ticks: {
                color: 'white', // Change the color of the x-axis tick labels to white
                font: {
                  size: 16 // Change the font size of the y-axis tick labels
                }
              }
            }
          },
          plugins: {
            legend: {
              labels: {
                color: 'white', // Change the color of the legend labels to white
                font: {
                  size: 16 // Change the font size of the legend labels
                }
              }
            }
          }
        }
      });
    }

    fetchMonthlyFoodGraph(){
          
          const request = new XMLHttpRequest();
          request.open("GET", this.monthlyFoodUrl, true);
          request.setRequestHeader('Content-Type', 'application/json');

          request.onload = () => {
            if (request.status === 200) {
              const data = JSON.parse(request.responseText);
              console.log(data);
              this.generateMonthlyFoodGraph(data);
            } else {
              console.error(`Request failed with status ${request.status}`);
            }
          };
  
            request.send();
      }

}
const  generatemonthlyfoodsalescontroller = new GenerateMonthlyFoodSalesController("/foodmonthly");