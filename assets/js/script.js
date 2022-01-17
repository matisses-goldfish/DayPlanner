 
    $(document).ready(function () {
        var saveBtn = $(".saveBtn");

        //displays time in day, month, numerical day, year 
        // sourced: https://momentjs.com/
        var today = moment().format("dddd, MMMM Do YYYY");
        console.log(today)
        $("#currentDay").append(today);

        //take the time from moment, converts into hours, then, depending on the time of day,
        //applys them to the class to change their color
       // format sourced from : https://github.com/cibellem/dayplanner/blob/master/assets/js/script.js
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
    //source from: https://www.codegrepper.com/code-examples/javascript/how+to+save+to+local+storage+jquery
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

