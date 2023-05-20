function gReport() {
    var y = document.getElementById("generateReport");
    var z = document.getElementById("viewReport");

    var c = document.getElementById("gReport");
    var d = document.getElementById("vReport");

    c.classList.add("active");
    d.classList.remove("active");

    if (y.style.display == "block") {
        y.style.display = "block";
        z.style.display = "none";
    } else {
        $("#generateReport").fadeIn()
        y.style.display = "block";
        z.style.display = "none";
    }

}

function vReport() {
    var y = document.getElementById("generateReport");
    var z = document.getElementById("viewReport");

    var c = document.getElementById("gReport");
    var d = document.getElementById("vReport");

    c.classList.remove("active");
    d.classList.add("active");

    $("#viewReport").fadeIn()
    y.style.display = "none";
    z.style.display = "block";

}

function generateDailyTicks(){
    generatedailyticketsbookedcontroller.fetchDailyTickGraph();
    document.getElementById("DailyTickChart").style.display="block";
    document.getElementById("WeeklyTickChart").style.display="none";
    document.getElementById("MonthlyTickChart").style.display="none";
    document.getElementById("DailyFoodChart").style.display="none";
    document.getElementById("WeeklyFoodChart").style.display="none";
    document.getElementById("MonthlyFoodChart").style.display="none";
    document.getElementById("Selection").style.display="none";
    document.getElementById("gReport").style.display="none";
    document.getElementById("vReport").style.display="none";
    document.getElementById("gbtn").style.display="block";
    
}

function generateWeeklyTicks(){
    generateweeklyticketsbookedcontroller.fetchWeeklyTickGraph();
    document.getElementById("WeeklyTickChart").style.display="block";
    document.getElementById("DailyTickChart").style.display="none";
    document.getElementById("MonthlyTickChart").style.display="none";
    document.getElementById("DailyFoodChart").style.display="none";
    document.getElementById("WeeklyFoodChart").style.display="none";
    document.getElementById("MonthlyFoodChart").style.display="none";
    document.getElementById("Selection").style.display="none";
    document.getElementById("gbtn").style.display="block";
    document.getElementById("gReport").style.display="none";
    document.getElementById("vReport").style.display="none";
}

function generateMonthlyTicks(){
    generatemonthlyticketsbookedcontroller.fetchMonthlyTickGraph();
    document.getElementById("WeeklyTickChart").style.display="none";
    document.getElementById("DailyTickChart").style.display="none";
    document.getElementById("MonthlyTickChart").style.display="block";
    document.getElementById("DailyFoodChart").style.display="none";
    document.getElementById("WeeklyFoodChart").style.display="none";
    document.getElementById("MonthlyFoodChart").style.display="none";
    document.getElementById("Selection").style.display="none";
    document.getElementById("gbtn").style.display="block";
    document.getElementById("gReport").style.display="none";
    document.getElementById("vReport").style.display="none";
}

function generateDailyFood(){
    generatedailyfoodsalescontroller.fetchDailyFoodGraph();
    document.getElementById("WeeklyTickChart").style.display="none";
    document.getElementById("DailyTickChart").style.display="none";
    document.getElementById("MonthlyTickChart").style.display="none";
    document.getElementById("DailyFoodChart").style.display="block";
    document.getElementById("WeeklyFoodChart").style.display="none";
    document.getElementById("MonthlyFoodChart").style.display="none";
    document.getElementById("Selection").style.display="none";
    document.getElementById("gbtn").style.display="block";
    document.getElementById("gReport").style.display="none";
    document.getElementById("vReport").style.display="none";
}

function generateWeeklyFood(){
    generateweeklyfoodsalescontroller.fetchWeeklyFoodGraph();
    document.getElementById("WeeklyTickChart").style.display="none";
    document.getElementById("DailyTickChart").style.display="none";
    document.getElementById("MonthlyTickChart").style.display="none";
    document.getElementById("DailyFoodChart").style.display="none";
    document.getElementById("WeeklyFoodChart").style.display="block";
    document.getElementById("MonthlyFoodChart").style.display="none";
    document.getElementById("Selection").style.display="none";
    document.getElementById("gbtn").style.display="block";
    document.getElementById("gReport").style.display="none";
    document.getElementById("vReport").style.display="none";
}

function generateMonthlyFood(){
    generatemonthlyfoodsalescontroller.fetchMonthlyFoodGraph();
    document.getElementById("WeeklyTickChart").style.display="none";
    document.getElementById("DailyTickChart").style.display="none";
    document.getElementById("MonthlyTickChart").style.display="none";
    document.getElementById("DailyFoodChart").style.display="none";
    document.getElementById("WeeklyFoodChart").style.display="none";
    document.getElementById("MonthlyFoodChart").style.display="block";
    document.getElementById("Selection").style.display="none";
    document.getElementById("gbtn").style.display="block";
    document.getElementById("gReport").style.display="none";
    document.getElementById("vReport").style.display="none";
}

function return2Main(){
    document.getElementById("WeeklyTickChart").style.display="none";
    document.getElementById("DailyTickChart").style.display="none";
    document.getElementById("MonthlyTickChart").style.display="none";
    document.getElementById("DailyFoodChart").style.display="none";
    document.getElementById("WeeklyFoodChart").style.display="none";
    document.getElementById("MonthlyFoodChart").style.display="none";
    document.getElementById("gbtn").style.display="none";
    $("Selection").fadeIn();
    document.getElementById("Selection").style.display="block";
    document.getElementById("gReport").style.display="block";
    document.getElementById("vReport").style.display="block";
}

function generateYearlyFood(){
    viewreportcontroller.fetchYearlyFoodGraph();
    document.getElementById("YearTickChart").style.display="none";
    document.getElementById("YearFoodChart").style.display="block";
}

function generateYearlyTick(){
    viewreportcontroller.fetchYearlyTicketGraph();
    document.getElementById("YearTickChart").style.display="block";
    document.getElementById("YearFoodChart").style.display="none";
}