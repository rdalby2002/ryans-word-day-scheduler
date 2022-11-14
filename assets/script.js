//Set user's current date as a variable, then appends it to the hero section of the page.
var currentDate = moment().format('dddd, MMM Do YYYY');

$("#currentDay").append(currentDate);

//Sets block colors and stored todos when site loads.
$(document).ready(function () {

    function trackTime() {
        //Sets user's current time as a variable.
        var currentTime = moment().hour();
        
        //Loops through the timeblocks
        $(".time-block").each(function () {
            var schedTime = parseInt($(this).attr("id"));
            
            //Sets block color to red if the block time matches the user's current time.
            if (schedTime === currentTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            //Sets block color to grey if the block time has passed.
            else if (schedTime < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            //Sets block color to green if the block time is still-to-come.
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    //Checks local storage for any saved todos and sets them to their respective timeblocks.
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));

    //Runs trackTime funtion.
    trackTime();
})

//Event listener for saveBtn that saves todos to local storage.
$(".saveBtn").on("click", function () {
    var time = $(this).parent().attr("id");
    var todo = $(this).siblings(".description").val();

    localStorage.setItem(time, todo);
})