let st_array = []
class ScreenTime {
    constructor(screentimeUrl, stbookingUrl) {
      this.screentimeUrl = screentimeUrl;
      this.stbookingUrl = stbookingUrl;
    }

    showScreenTimeDetails(element){
        var item = element.getAttribute("item");
        console.log(item);
        var id = st_array[item]._id; 
        movies.getMovieDataST();
        cinemaroom.fetchCinemaRoomST();
        
        document.getElementById("updateScreenTimetable").style.display ="block";
        document.getElementById("updatestId").value = st_array[item]._id;
        document.getElementById("updateDay").value = st_array[item].day;
        document.getElementById("updateTime").value = st_array[item].time;
    }

    suspendScreenTime(element){
        var response = confirm("Are you sure you want to suspend this screentime?");
        if (response == true)
        {
            var item = element.getAttribute("item");
            var id = st_array[item]._id;
            var suspendST = new XMLHttpRequest();

        var sus_st_url = this.screentimeUrl + "/" + id;
        console.log(id);


        suspendST.open("DELETE", sus_st_url); 
        suspendST.onload = function () {
            alert("the screentime has been suspended");
            document.getElementById("manageScreenTime").style.display="none";
            mScreenTime();
        };
        suspendST.send();
        }
        

    }

    fetchScreenTime4Cust(title){
        
        const stmoviedeets = {
            "movietitle": title
          };

          const request = new XMLHttpRequest();
          request.open('POST', this.stbookingUrl, true);
          request.setRequestHeader('Content-Type', 'application/json');
        
        request.onload = () => {
            // Get all the movies records into our movie array
            st_array = JSON.parse(request.responseText);
            console.log(st_array);
            screentime.displayScreenTime4Cust()
            // Call the function to display all movies tiles for "Now Showing"
          };
          console.log(JSON.stringify(stmoviedeets));
          request.send(JSON.stringify(stmoviedeets));

    }

    displayScreenTime4Cust(){
        const table1 = document.getElementById("monday");
        const table2 = document.getElementById("tuesday");
        const table3 = document.getElementById("wednesday");
        const table4 = document.getElementById("thursday");
        const table5 = document.getElementById("friday");
        const table6 = document.getElementById("saturday");
        const table7 = document.getElementById("sunday");
        let stCount = 0;
        let message = "";
        table1.innerHTML = "";
        const totalst = st_array.length;

        for (let count = 0; count < totalst; count++)
        {
            document.getElementById("ticketDay").innerHTML = st_array[count].day;
            document.getElementById("bookMovieTitle").innerHTML = st_array[count].title;
            document.getElementById("summaryTitle").innerHTML = st_array[count].title;
            var rm = st_array[count].roomnumber;
            var rmtrim = rm.trim();
            document.getElementById("summaryRoom").innerHTML = rmtrim;
            document.getElementById("bookRoomName").innerHTML = rmtrim;

            const id = st_array[count]._id;
            const timing = st_array[count].time;
            const cell = '<td> \
                                <button id="StTime" onclick="viewTicketType()" item = '+count+' class="button2">'+timing+'</button> \
                            </td>'
            
            table1.insertAdjacentHTML("beforeend", cell);
            
        }
       
        stCount++;          
    }
}

const screentime = new ScreenTime("/screentimes", "/screentiming");

class CreateScreenTimeController {
    constructor(screentimeUrl, stbookingUrl) {
        this.screentimeUrl = screentimeUrl;
        this.stbookingUrl = stbookingUrl;
      }

      addScreenTime()
      {
          const addScreenTime = new XMLHttpRequest();
          addScreenTime.open('POST', this.screentimeUrl, true);
      
          const day = document.getElementById("createDay").value;
          const time = document.getElementById("createTime").value;
          const title = document.getElementById("createMovieST").value;
          const rm = document.getElementById("createRoomNumberST").value;
          
      
          const screentimeDetails = {
              "day": day,
              "time": time,
              "title":title,
              "roomnumber":rm
          }
      
          console.log(screentimeDetails)
      
          addScreenTime.setRequestHeader("Content-Type", "application/json");
          addScreenTime.onload = function () {
              const output = JSON.parse(addScreenTime.responseText);
                  alert("Screentime added!");
                  document.getElementById("createTime").value = "";
                  document.getElementById("createScreenTimetable").style.display="none";
                  document.getElementById("manageScreenTime").style.display="none";
                  mScreenTime();
              
          };
          addScreenTime.send(JSON.stringify(screentimeDetails));
      }
}
const createscreentimecontroller = new CreateScreenTimeController("/screentimes", "/screentiming");
// DONE
class ViewScreenTimeController {
    constructor(screentimeUrl, stbookingUrl) {
        this.screentimeUrl = screentimeUrl;
        this.stbookingUrl = stbookingUrl;
  
      }

    fetchScreenTime()
      {
          const request = new XMLHttpRequest();
          request.open("GET", this.screentimeUrl, true);
          console.log(request);
          request.onload = () => {
              // Get all the movies records into our movie array
              st_array = JSON.parse(request.responseText);
              // Call the function to display all movies tiles for "Now Showing"
              this.displayScreenTime();
            };
  
            request.send();
      }
  
    displayScreenTime(){
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
}
const viewscreentimecontroller = new ViewScreenTimeController("/screentimes", "/screentiming");

class UpdateScreenTimeController {
    constructor(screentimeUrl, stbookingUrl) {
        this.screentimeUrl = screentimeUrl;
        this.stbookingUrl = stbookingUrl;
      }
    

    updateScreenTime(currentIndex){
        var id = parseInt(document.getElementById("updatestId").value);
        var currentIndex = -1;
        for (var i = 0; i < st_array.length; i++) {
            if (id == st_array[i]._id) {   
            currentIndex = i;
            break; // Exit the loop once a match is found
            }
        }
        const edit_st_url = this.screentimeUrl + "/" + id;
        const response = confirm("Are you sure you want to edit ScreenTime?");

        const day = document.getElementById("updateDay").value;
        const time = document.getElementById("updateTime").value;
        const title = document.getElementById("updateMovieST").value;
        const rm = document.getElementById("updateRoomNumberST").value;
        console.log("rm: "+rm);

        console.log()
        const editedst = {
            _id: id,
            day: day,
            time: time,
            title:title,
            roomnumber:rm
        };

        console.log("THE DATA I AM SENDNING: "+ JSON.stringify(editedst))

        if (response == true) {
            const updatest = new XMLHttpRequest();
            updatest.open("PUT", edit_st_url, true);
            updatest.setRequestHeader("Content-Type", "application/json");

            st_array[currentIndex].day = day;
            st_array[currentIndex].time= time;
            st_array[currentIndex].title = title;
            st_array[currentIndex].roomnumber = rm;

            updatest.onload = function () {
                alert("The screentime information has been edited");
                document.getElementById("updateScreenTimetable").style.display ="none";
                document.getElementById("manageScreenTime").style.display ="none";
                mScreenTime();
            };

        updatest.send(JSON.stringify(editedst));
        }
    
    }
}
const updatescreentimecontroller = new UpdateScreenTimeController("/screentime", "/screentiming");

class SuspendScreenTimeController {
    constructor(screentimeUrl, stbookingUrl) {
        this.screentimeUrl = screentimeUrl;
        this.stbookingUrl = stbookingUrl;
      }
    
    suspendScreenTime(element){
        var response = confirm("Are you sure you want to suspend this screentime?");
        if (response == true){
            var item = element.getAttribute("item");
            var id = st_array[item]._id;
            var suspendST = new XMLHttpRequest();
            var sus_st_url = this.screentimeUrl + "/" + id;
            console.log(id);
  
  
            suspendST.open("DELETE", sus_st_url); 
            suspendST.onload = function () {
                alert("the screentime has been suspended");
                document.getElementById("manageScreenTime").style.display="none";
                mScreenTime();
            };
          suspendST.send();
        }
          
    }
}
const suspendscreentimecontroller = new SuspendScreenTimeController("/screentimes", "/screentiming");

class SearchScreenTimeController {
    constructor(screentimeUrl, stbookingUrl) {
        this.screentimeUrl = screentimeUrl;
        this.stbookingUrl = stbookingUrl;
      }
}
const searchscreentimecontroller = new SearchScreenTimeController("/screentimes", "/screentiming");