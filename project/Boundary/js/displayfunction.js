function generateUserAccount(){
    const table = document.getElementById("getUser");
        let uaCount = 0;
        let message = "";
        table.innerHTML = "";
        const totalua = ua_array.length;

        for (let count = 0; count < totalua; count++)
        {
            const id = ua_array[count]._id;
            const name = ua_array[count].name;
            const email = ua_array[count].email;
            const role = ua_array[count].role;
            const status = ua_array[count].status;

            const cell = '<td colspan="2" width="19%">\
                            <strong id="st_id" style="display:none;">\
                                '+id+'\
                            </strong>\
                            <a>\
                                '+name+'\
                            </a>\
                        </td>\
                        <td>\
                            <a>\
                                '+email+'\
                            </a>\
                        </td>\
                        <td>\
                            <a>\
                                '+role+'\
                            </a>\
                        </td>\
                        <td>\
                          <label id="susAcc" style="display:none;">suspended</label>\
                            <a>\
                                '+status+'\
                            </a>\
                        </td>\
                        <td width="10%">\
                            <button item = '+count+' style="background-color:#333333a0;" onclick="useraccount.showUserAccountDetails(this)">\
                                <img src="./../images/edit.png" width="30px" height="30px">\
                            </button>\
                            <button item = '+count+' style="background-color:#333333a0;" onclick="suspenduseraccountcontroller.suspendUserAccount(this)">\
                                <img src="./../images/delete.png" width="30px" height="30px">\
                            </button>\    </td>'
            
            table.insertAdjacentHTML("beforeend", cell);
            uaCount++;
            
    }

}

function showUserPointsDetails(element){
    console.log(ua_array);
        var item = element.getAttribute("item");
        console.log(item);
        var id = ua_array[item]._id; 
        
        document.getElementById("ualoyaltypoint").value = ua_array[item].loyaltypoints;
}

function generateUserProfile(){
    const table = document.getElementById("getUserProfile");
      let upCount = 0;
      let message = "";
      table.innerHTML = "";
      const totalup = userprofile_array.length;
      console.log("array length" + userprofile_array.length);

      for (let count = 0; count < totalup; count++)
      {
          const id = userprofile_array[count]._id;
          const role = userprofile_array[count].role;
          const desc = userprofile_array[count].description;
          const cell ='<td>\
                        <strong id="up_id" style="display:none;">'+id+'</strong><a>'+role+'</a></td>\
                        <td>'+desc+'</td><td width="10%"><button item = '+count+' style="background-color:#333333a0;" onclick="userprofile.showUserProfileDetails(this)"><img src="./../images/edit.png" width="30px" height="30px">\
                        </button>\
                        <button item = '+count+' style="background-color:#333333a0;" onclick="suspenduserprofilecontroller.suspendUserProfile(this)">\
                        <img src="./../images/delete.png" width="30px" height="30px">\
                        </button>\
                      </td>'

          table.insertAdjacentHTML("beforeend", cell);
          console.log(table);
          upCount++;
      }
}

function generateHistory()
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

// Method to generate the graph using Chart.js
function  generateDailyTickGraph(data) {
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
// Method to generate the graph using Chart.js
function generateWeeklyTickGraph(data) {
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

function // Method to generate the graph using Chart.js
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

function    // Method to generate the graph using Chart.js
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

function // Method to generate the graph using Chart.js
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

function // Method to generate the graph using Chart.js
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

function // Method to generate the graph using Chart.js
generateYearlyFoodGraph(data) {
        var labels = data.map(entry => entry.years);
        var ticketData = data.map(entry => entry.fooditems_sold);
    
        // Get the canvas element
        var ctx = document.getElementById('YearFoodChart').getContext('2d');
  
        // Destroy the existing chart instance if it exists
        if (chartInstances['YearFoodChart']) {
          chartInstances['YearFoodChart'].destroy();
        }
  
        
        console.log(chartInstances);
    
        // Create the chart
        var myChart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [{
              label: 'Yearly Report of Food Sales',
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
                  text: 'Yearly',
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

function // Method to generate the graph using Chart.js
generateYearlyTicketGraph(data) {
        var labels = data.map(entry => entry.years);
        var ticketData = data.map(entry => entry.tickets_booked);
    
        // Get the canvas element
        var ctx = document.getElementById('YearTickChart').getContext('2d');
  
        // Destroy the existing chart instance if it exists
        if (chartInstances['YearTickChart']) {
          chartInstances['YearTickChart'].destroy();
        }
  
        
        console.log(chartInstances);
    
        // Create the chart
        var myChart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [{
              label: 'Yearly Report of Ticket Booked',
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
                  text: 'Yearly',
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
                  text: 'Ticket Booked',
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

function
generateTicketType(){
    const table = document.getElementById("getTicket");
    let mtCount = 0;
    let message = "";
    table.innerHTML = "";
    const totalmt = ticket_array.length;
    
    for (let count = 0; count < totalmt; count++)
    {
        const id = ticket_array[count]._id;
        const name = ticket_array[count].name;
        const age = ticket_array[count].age;
        const price = ticket_array[count].price;
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
                        <button item = '+count+' style="background-color:#333333a0;" onclick="suspendticketcontroller.suspendMovieTicket(this)">\
                            <img src="./../images/delete.png" width="30px" height="30px">\
                        </button>\    </td>'
        
        table.insertAdjacentHTML("beforeend", cell);
        mtCount++;            
    }

}

function searchTicketType(){
    const cell = '<td colspan="2" width="19%">\
    <strong id="st_id" style="display:none;">\
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
    <button item = '+count+' style="background-color:#333333a0;" onclick="">\
        <img src="./../images/edit.png" width="30px" height="30px">\
    </button>\
    <button item = '+count+' style="background-color:#333333a0;" onclick="">\
        <img src="./../images/delete.png" width="30px" height="30px">\
    </button>\    </td>'
}

function generateRowA(row1) {
    const table = document.getElementById("rowA1");
    let RowCount = 0;
    let message = "";

    table.innerHTML = "";
    const totalRow = smarray.length;

    for (let count = 0; count < totalRow; count++) {
      if (smarray[count].row === row1) {
        const seatno = smarray[count].seatno;
        const row = smarray[count].row;
        const id = smarray[count]._id;
        const cell =
          '<button item="' + count +'" class="mapbtn"  id="'+id+'" style="background-color:rgb(255, 130, 6);" onclick="suspendseatmapcontroller.suspendSM(this)" >'+seatno+'</button><label style="display:none;" id="seatrow">'+row+'</label>';

        table.insertAdjacentHTML("beforeend", cell);
        RowCount++;
      }
    }
}

function generateRowB(row2) {
    const table = document.getElementById("rowB1");
    let RowCount = 0;
    let message = "";

    table.innerHTML = "";
    const totalRow = smarray.length;

    for (let count = 0; count < totalRow; count++) {
      if (smarray[count].row === row2) {
        const seatno = smarray[count].seatno;
        const row = smarray[count].row;
        const id = smarray[count]._id;
        const cell =
        '<button item="' + count +'" class="mapbtn"  id="'+id+'" style="background-color:rgb(255, 130, 6);" onclick="suspendseatmapcontroller.suspendSM(this)" >'+seatno+'</button><label style="display:none;" id="seatrow">'+row+'</label>';

        table.insertAdjacentHTML("beforeend", cell);
        RowCount++;
      }
    }
}

function generateRowC(row3) {
    const table = document.getElementById("rowC1");
    let RowCount = 0;
    let message = "";

    table.innerHTML = "";
    const totalRow = smarray.length;

    for (let count = 0; count < totalRow; count++) {
      if (smarray[count].row === row3) {
        const seatno = smarray[count].seatno;
        const row = smarray[count].row;
        const id = smarray[count]._id;
        const cell =
        '<button item="' + count +'" class="mapbtn"  id="'+id+'" style="background-color:rgb(255, 130, 6);" onclick="suspendseatmapcontroller.suspendSM(this)" >'+seatno+'</button><label style="display:none;" id="seatrow">'+row+'</label>';

        table.insertAdjacentHTML("beforeend", cell);
        RowCount++;
      }
    }
}

function generateRowD(row4) {
    const table = document.getElementById("rowD1");
    let RowCount = 0;
    let message = "";

    table.innerHTML = "";
    const totalRow = smarray.length;

    for (let count = 0; count < totalRow; count++) {
      if (smarray[count].row === row4) {
        const seatno = smarray[count].seatno;
        const row = smarray[count].row;
        const id = smarray[count]._id;
        const cell =
        '<button item="' + count +'" class="mapbtn"  id="'+id+'" style="background-color:rgb(255, 130, 6);" onclick="suspendseatmapcontroller.suspendSM(this)" >'+seatno+'</button><label style="display:none;" id="seatrow">'+row+'</label>';

        table.insertAdjacentHTML("beforeend", cell);
        RowCount++;
      }
    }
}

function generateRowE(row5) {
    const table = document.getElementById("rowE1");
    let RowCount = 0;
    let message = "";

    table.innerHTML = "";
    const totalRow = smarray.length;

    for (let count = 0; count < totalRow; count++) {
      if (smarray[count].row === row5) {
        const seatno = smarray[count].seatno;
        const row = smarray[count].row;
        const id = smarray[count]._id;

        const cell =
        '<button item="' + count +'" class="mapbtn"  id="'+id+'" style="background-color:rgb(255, 130, 6);" onclick="suspendseatmapcontroller.suspendSM(this)" >'+seatno+'</button><label style="display:none;" id="seatrow">'+row+'</label>';

        table.insertAdjacentHTML("beforeend", cell);
        RowCount++;
      }
    }
}

function SearchSeatMap(){
        const table = document.getElementById("getSearchsm");
        let smCount = 0;
        let message = "";
        table.innerHTML = "";
        const totalsm = smarray.length;
        for (let count = 0; count < totalsm; count++)
        {
            const id = smarray[count]._id;
            const seatno = smarray[count].seatno;
            const room = smarray[count].room;
            const row = smarray[count].row;
            const cell ='<td><strong id="um_id" style="display:none;">'+id+'</strong><a>'+seatno+'</a></td><td>'+room+'</td><td>'+row+'</td><td width="10%"><button item = '+count+' style="background-color:#333333a0;" onclick=""><img src="./../images/edit.png" width="30px" height="30px"></td>'    
            table.insertAdjacentHTML("beforeend", cell);
            console.log(table);
            smCount++;
          }
}

function generateScreenTime(){
    const table = document.getElementById("getScreenTime");
    let stCount = 0;
    let message = "";
    table.innerHTML = "";
    const totalst = st_array.length;

    for (let count = 0; count < totalst; count++)
    {
        const id = st_array[count]._id;
        const timing = st_array[count].time;
        const day = st_array[count].day;
        const cell = '<td>\
                        <strong id="st_id" style="display:none;">\
                            '+id+'\
                        </strong>\
                        <a>\
                            '+day+'\
                        </a>\
                    </td>\
                    <td width="30%">\
                        <a>\
                            '+timing+'\
                        </a>\
                    </td>\
                    <td width="15%">\
                        <button item = '+count+' style="background-color:#333333a0;" onclick="screentime.showScreenTimeDetails(this)">\
                            <img src="./../images/edit.png" width="30px" height="30px">\
                        </button>\
                        <button item = '+count+' style="background-color:#333333a0;" onclick="suspendscreentimecontroller.suspendScreenTime(this)">\
                            <img src="./../images/delete.png" width="30px" height="30px">\
                        </button>\    </td>'
        
        table.insertAdjacentHTML("beforeend", cell);
        stCount++;    
  }
}

function searchST(){

    const cell ='<td><strong id="up_id" style="display:none;">'+id+'</strong><a>'+name+'</a></td><td>'+price+'</td><td width="10%"><button item = '+count+' style="background-color:#333333a0;" onclick=""><img src="./../images/edit.png" width="30px" height="30px"></td>'
}

function generateReviews() {
    const table = document.getElementById("reviewTable");
    let ViewReviewCount = 0;
    let message = "";
    
    table.innerHTML = "";
    const totalReviews = review_array.length;
    
    for (let count = 0; count < totalReviews; count++) {     
      const name = review_array[count].name;
      const review = review_array[count].review;
      const rating = review_array[count].rating;
      const cell ='<div style="background-color: #333;"><table border="0" style="width:100%;"><tr><td width="60px"><img src="./../images/profile.png" style="padding: 10px;"></td> <td> <h5 style="text-align:left;">'+ name +'</h5><h5 style="text-align:left;">'+ review +'</h5></td><td><h5 style="text-align:right;">'+rating+'</h5></td><td width="35px"><img src="./../images/star.png" style="width:30px; height:30px;"/></td></tr></table></div><br>'
      table.insertAdjacentHTML("beforeend", cell);
      ViewReviewCount++;
    }

    message = ViewReviewCount + " Reviews ";
    document.getElementById("reviewsummary").textContent = message;
  }

function generateOccu() {
    const table = document.getElementById("getOccupancy");
    let occuCount = 0;
    let message = "";
    table.innerHTML = "";
    const totalOccu = occuArray.length;

    for (let count = 0; count < totalOccu; count++)
    {
        const id = occuArray[count]._id;
        const seatno = occuArray[count].seatno;
        const row = occuArray[count].row;
        const status = occuArray[count].status;
        const cell ='<td style="width: 30%;"><strong id="occu_id" style="display:none;">'+id+'</strong><a>'+seatno+'</a></td><td><a>'+row+'</a></td><td><label id="occuSus" style="display:none;">suspended</label><a>'+status+'</a></td><td width="13%"><button item = '+count+' style="background-color:#333333a0;" onclick="occupancy.showOccuDetails(this)"><img src="./../images/edit.png" width="30px" height="30px">\
                      <button item = '+count+' style="background-color:#333333a0;" onclick="suspendoccupancycontroller.suspendOccu(this)">\
                      <img src="./../images/delete.png" width="30px" height="30px">\
                      </button>\</td>'

        table.insertAdjacentHTML("beforeend", cell);
        occuCount++;
    }
}

function searchOccupancy(){
    const cell ='<td style="width: 30%;"><strong id="occu_id" style="display:none;">'+id+'</strong><a>'+seatno+'</a></td><td><a>'+row+'</a></td><td ><button item = '+count+' style="background-color:#333333a0; float:right;" onclick="occupancy.showOccuDetails(this)"><img src="./../images/edit.png" width="30px" height="30px"></td>'
}

function generateMovies4Manager() {
    const table = document.getElementById("getMovies");
    let movieCount = 0;
    let message = "";
    table.innerHTML = "";
    const totalmovies = movie_array.length;

    for (let count = 0; count < totalmovies; count++)
    {
        const id = movie_array[count]._id;
        const title = movie_array[count].title;
        const advice = movie_array[count].advice;
        const genre = movie_array[count].availability;
        const duration = movie_array[count].duration;


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
                      <a id="movie_suspend" style="display:none;">Suspended</a>\
                    </td>\
                    <td  width="10%">\
                      <button item = '+count+' style="background-color:#333333a0;" onclick="movies.showMovieDetails2(this)">\
                        <img src="./../images/edit.png" width="30px" height="30px">\
                      </button>\
                      <button item = '+count+' style="background-color:#333333a0;" onclick="suspendmoviescontroller.suspendMovieStatus(this)">\
                        <img src="./../images/delete.png" width="30px" height="30px">\
                      </button>\
                    </td>'

        table.insertAdjacentHTML("beforeend", cell);
        movieCount++;
    }

}

function generateMovies(comingSoon) {
    const table = document.getElementById("moviesTable");
    let movieCount = 0;
    let message = "";

    table.innerHTML = "";
    const totalMovies = movie_array.length;

    for (let count = 0; count < totalMovies; count++) {
      if (movie_array[count].availability === comingSoon) {
        const thumbnail = "products/" + movie_array[count].thumb;
        const title = movie_array[count].title;

        const cell =
          '<div>                                                                                                                                                                                                   \
                            <div class="flip-container" >                                                                                                                                                                                       \
                                <div class="flipper">                                                                                                                                                                                           \
                                    <div class="front">                                                                                                                                                                                         \
                                        <a id="movies" class="movies" href="#" data-toggle="modal" data-target="#movieModal" item=' +
          count +
          '>                                                                                                \
                                            <img class="img-fluid img-thumbnail" src="./../images/'+thumbnail+'" />                                                                                                                                       \
                                        </a>                                                                                                                                                                                                    \
                                    </div>                                                                                                                                                                                                      \
                                    <div class="back">                                                                                                                                                                                          \
                                        <div class="bg-dark mystyle text-center py-3" style="text-align:center;" >                                                                                                                                                         \
                                            <span>' +
          title +
          "<br>" +
          "(" +
          movie_array[count].genre +
          ')</span><br>                                                                                                                                                                      \
                                            <button item="' +
          count +
          '" type="button" class="button" style="width:60%; border-radius:25px;" onClick="movies.showMovieDetails(this)" >See More</button>       \
                                        </div>                                                                                                                                                                                                  \
                                    </div>                                                                                                                                                                                                      \
                                </div>                                                                                                                                                                                                          \
                            </div>                                                                                                                                                                                                              \
                        </div>';

        table.insertAdjacentHTML("beforeend", cell);
        movieCount++;
      }
    }

    message = movieCount + " Movies " + comingSoon;
    document.getElementById("summary").textContent = message;
    document.getElementById("parent").textContent = "";
}

function generateMovies2(nowShowing) {
    const table = document.getElementById("moviesTable2");
    let movieCount = 0;
    let message = "";

    table.innerHTML = "";
    const totalMovies = movie_array.length;

    for (let count = 0; count < totalMovies; count++) {
      if (movie_array[count].availability === nowShowing) {
        const thumbnail = "products/" + movie_array[count].thumb;
        const title = movie_array[count].title;

        const cell =
          '<div class="scroll">                                                                                                                                                                                                   \
                            <div class="flip-container" >                                                                                                                                                                                       \
                                <div class="flipper">                                                                                                                                                                                           \
                                    <div class="front">                                                                                                                                                                                         \
                                        <a id="movies" class="movies" href="#" data-toggle="modal" data-target="#movieModal" item=' +
          count +
          '>                                                                                                \
                                            <img class="img-fluid img-thumbnail" src="./../images/' + thumbnail +'" />                                                                                                                                       \
                                        </a>                                                                                                                                                                                                    \
                                    </div>                                                                                                                                                                                                      \
                                    <div class="back">                                                                                                                                                                                          \
                                        <div class="bg-dark mystyle text-center py-3" style="text-align:center;" >                                                                                                                                                         \
                                            <span>' +
          title +
          "<br>" +
          "(" +
          movie_array[count].genre +
          ')</span><br>                                                                                                                                                                      \
                                            <button item="' +
          count +
          '" type="button" class="button" style="width:60%; border-radius:25px;" onClick="movies.showMovieDetails(this)" >See More</button>       \
                                        </div>                                                                                                                                                                                                  \
                                    </div>                                                                                                                                                                                                      \
                                </div>                                                                                                                                                                                                          \
                            </div>                                                                                                                                                                                                              \
                        </div>';

        table.insertAdjacentHTML("beforeend", cell);
        movieCount++;
      }
    }

    message = movieCount + " Movies " + nowShowing;
    document.getElementById("summary2").textContent = message;
    document.getElementById("parent2").textContent = "";
}

function SearchMovies(){
    const cell ='<td><strong id="up_id" style="display:none;">'+id+'</strong><a>'+name+'</a></td><td>'+price+'</td><td width="10%"><button item = '+count+' style="background-color:#333333a0;" onclick=""><img src="./../images/edit.png" width="30px" height="30px"></td>'
}

function generateMenu(){
    const table = document.getElementById("getMenu");
    let menuCount = 0;
    let message = "";
    table.innerHTML = "";
    const totalmenu = menu_array.length;

    for (let count = 0; count < totalmenu; count++)
    {
        const id = menu_array[count]._id;
        const image = menu_array[count].image;
        const name = menu_array[count].name;
        const smol = menu_array[count].smallprice;
        const med = menu_array[count].mediumprice;
        const large = menu_array[count].largeprice;
        const availability = menu_array[count].availability;
        const cell ='<td width="20%">\
                        <img src="./../images/menu/'+image+'" width="100px" height="70px">\
                    </td>\
                    <td>\
                        <label id="Menu_id" style="display:none;">'+id+'</label>\
                        <a>'+name+'</a>\
                    </td>\
                    <td>\
                            <label>'+availability+'</label>\
                            <label id="suspendMenu" style="display:none;">suspended</label>\
                    </td>\
                    <td width="10%">\
                        <button item = '+count+' style="background-color:#333333a0;" onclick="menu.showMenuDetails(this)">\
                            <img src="./../images/edit.png" width="30px" height="30px">\
                            <button item = '+count+' style="background-color:#333333a0;" onclick="suspendmenucontroller.suspendMenu(this)">\
                            <img src="./../images/delete.png" width="30px" height="30px">\
                    </td>'

        table.insertAdjacentHTML("beforeend", cell);
        menuCount++;
    }

}

function searchmenuD(){
    const cell ='<td><strong id="up_id" style="display:none;">'+id+'</strong><a>'+name+'</a></td><td>'+price+'</td><td width="10%"><button item = '+count+' style="background-color:#333333a0;" onclick=""><img src="./../images/edit.png" width="30px" height="30px"></td>'
}

function generateCinemaRoom() {
    const table = document.getElementById("getRoomNumber");
    let cinemaroomCount = 0;
    let message = "";
    table.innerHTML = "";
    const totalCinemaRoom = cinemaroomArray.length;

    for (let count = 0; count < totalCinemaRoom; count++)
    {
        const id = cinemaroomArray[count]._id;
        const roomno = cinemaroomArray[count].roomnumber;
        const status = cinemaroomArray[count].availability;
        const cell ='<td width="25%">\
                        <strong id="occu_id" style="display:none;">\
                            '+id+'\
                        </strong>\
                        <a>\
                            '+roomno+'\
                        </a>\
                    </td>\
                    <td>\
                        <a>\
                            '+status+'\
                        </a>\
                        <a id="cinema_suspend" style="display: none;">Suspended</a>\
                    </td>\
                    <td width="10%">\
                        <button item = '+count+' style="background-color:#333333a0;" onclick="cinemaroom.showCinemaRoomDetails(this)">\
                                <img src="./../images/add.png" width="30px" height="30px">\
                        </button>\
                        <button item = '+count+' style="background-color:#333333a0;" onclick="cinemaroom.showseatMapDetails(this)">\
                            <img src="./../images/edit.png" width="30px" height="30px">\
                        </button>\
                        <button item = '+count+' style="background-color:#333333a0;" onclick="suspendcinemaroomcontroller.suspendCinemaRoomStatus(this)">\
                            <img src="./../images/delete.png" width="30px" height="30px">\
                        </button>\
                    </td> '

        table.insertAdjacentHTML("beforeend", cell);
        cinemaroomCount++;
    }
}