class ScreenTime {
    constructor(screentimeUrl) {
      this.screentimeUrl = screentimeUrl;
      this.starray = [];
    }

    fetchScreenTime()
    {
        const request = new XMLHttpRequest();
        request.open("GET", this.screentimeUrl, true);
        console.log(request);
        request.onload = () => {
            // Get all the movies records into our movie array
            this.starray = JSON.parse(request.responseText);
            console.log(this.starray);
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
        const totalst = this.starray.length;

        for (let count = 0; count < totalst; count++)
        {
            const id = this.starray[count]._id;
            const timing = this.starray[count].time;
            const day = this.starray[count].day;
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
                            <button item = '+count+' style="background-color:#333333a0;" onclick="screentime.suspendScreenTime(this)">\
                                <img src="./../images/delete.png" width="30px" height="30px">\
                            </button>\    </td>'
            
            table.insertAdjacentHTML("beforeend", cell);
            stCount++;
            
    }

    }

    showScreenTimeDetails(element)
    {
        console.log(this.starray);
        var item = element.getAttribute("item");
        console.log(item);
        var id = this.starray[item]._id; 
        
        document.getElementById("updateScreenTimetable").style.display ="block";
        document.getElementById("updatestId").value = this.starray[item]._id;
        document.getElementById("updateDay").value = this.starray[item].day;
        document.getElementById("updateTime").value = this.starray[item].time;
    }

    updateScreenTime(currentIndex)
    {
        var id = parseInt(document.getElementById("updatestId").value);
    var currentIndex = -1;
    for (var i = 0; i < this.starray.length; i++) {
        if (id == this.starray[i]._id) {   
        currentIndex = i;
        break; // Exit the loop once a match is found
     }
    }
    const edit_st_url = this.screentimeUrl + "/" + id;
    const response = confirm("Are you sure you want to edit ScreenTime?");

    const day = document.getElementById("updateDay").value;
    const time = document.getElementById("updateTime").value;

    const editedst = {
        _id: id,
        day: day,
        time: time
      };

      if (response == true) {
        const updatest = new XMLHttpRequest();
        updatest.open("PUT", edit_st_url, true);
        updatest.setRequestHeader("Content-Type", "application/json");

        this.starray[currentIndex].day = day;
        this.starray[currentIndex].time= time;

        updatest.onload = function () {
            alert("The screentime information has been edited");
            document.getElementById("updateScreenTimetable").style.display ="none";
            document.getElementById("manageScreenTime").style.display ="none";

            mScreenTime();
        };

        updatest.send(JSON.stringify(editedst));
        }
    
    }

    addScreenTime()
    {
        const addScreenTime = new XMLHttpRequest();
        addScreenTime.open('POST', this.screentimeUrl, true);
    
        const day = document.getElementById("createDay").value;
        const time = document.getElementById("createTime").value;
    
        const screentimeDetails = {
            "day": day,
            "time": time
        }
    
        console.log(screentimeDetails)
    
        addScreenTime.setRequestHeader("Content-Type", "application/json");
        addScreenTime.onload = function () {
            const output = JSON.parse(addScreenTime.responseText);
                alert("Seat added!");
                document.getElementById("createTime").value = "";
                document.getElementById("createScreenTimetable").style.display="none";
                document.getElementById("manageScreenTime").style.display="none";
                mScreenTime();
            
        };
        addScreenTime.send(JSON.stringify(screentimeDetails));
    }

    suspendScreenTime(element)
    {
        var response = confirm("Are you sure you want to suspend this screentime?");
        if (response == true)
        {
            var item = element.getAttribute("item");
            var id = this.starray[item]._id;
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

const screentime = new ScreenTime("/screentime");
console.log(screentime.screentimeUrl);