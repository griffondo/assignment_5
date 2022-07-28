$( document ).ready(function() {
    $(".row").each((i, row) => {
        let timeString = $(row).find(".time-block").first().text();
        let time = moment(timeString,"ha");
        if (time.isSame(moment(), "hour")) {
            $(row).addClass("present");
        } else if(moment(timeString,"ha").isAfter(moment())) {
            $(row).addClass("future");
        } else {
            $(row).addClass("past");
        }

    });
});