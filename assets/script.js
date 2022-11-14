var currentDate = moment().format('dddd, MMM Do YYYY');

$("#currentDay").html(currentDate);

$(document).ready(function () {

    function trackTime() {
        var currentTime = moment().hour();

        $(".time-block").each(function () {
            var schedTime = parseInt($(this).attr("id"));
            
            if (schedTime === currentTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else if (schedTime < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    trackTime();
})