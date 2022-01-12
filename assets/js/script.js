 
    $(document).ready(function () {
        //The list of all varriables used: 
        var $7am = $("#7am");
        var $8am = $("#8am");
        var $9am = $("#9am");
        var $10am = $("#10am");
        var $11am = $("#11am");
        var $12pm = $("#12pm");
        var $1pm = $("#1pm");
        var $2pm = $("#2pm");
        var $3pm = $("#3pm");
        var $4pm = $("#4pm");
        var $5pm = $("#5pm");
        var saveBtn = $(".saveBtn");

        //displays time in day, month, numerical day, year 
        var today = moment().format('dddd MMMM do, YYYY');
        console.log(today)
        $("#currentDay").append(today);

        //take the time from moment, converts into hours, then, depending on the time of day,
        //applys them to the class to change their color
        var now = parseInt(moment().format('HH'));
        $(".description").each(function () {
            var name = parseInt($(this).attr("name"));
            //set color class for past
            if (name < now) {
                $(this).addClass("past");
            }
            //set color class for present
            if (name === now) {
                $(this).addClass("present")
            }
            //set color class for future
            else if (name > now) {
                $(this).addClass("future")
            }
        })
    
       saveBtn.on("click", function () {
            var hour =$(this).parent().attr(".hour");
            var description = $(this).siblings(".description").val();
            localStorage.setItem(hour,description);
            
            // createItem()

            function getValue(){
                return localStorage.getItem("description");
            }
            console.log(getValue());
       })
    })

