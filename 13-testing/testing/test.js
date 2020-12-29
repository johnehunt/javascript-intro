function updateAppointmentsList(appointments) {
    $("#appointmentlist").empty();
             let html = "<div class='appointment'>";
             $.each(appointments, function(i, appointment) {
                 console.log(appointment);
                 html += "<h3 class='title'>Appointment " + appointment.id + "</h3>";
                 html += "<ul>"
                 html += "<li>datetime: " + appointment.datetime + "</li>";
                 html += "<li>duration: " + appointment.duration + "</li>";
                 html += "<li>provider: " + appointment.provider + "</li>";
                 html += "<li>client: " + appointment.client + "</li>";
                 html += "<li>cost: " + appointment.cost + "</li>";
                 html += "<li>description: " + appointment.description + "</li>";
                 html += "<li>flag: " + appointment.flag + "</li>";
                 html += "</ul>";
               });
               html += "</div>";
               $("#appointmentlist").append($(html));
   }

describe("Testing the list appointments js functionality", function() {
    it("should display 1 or more results", function() {

        const body = document.getElementsByTagName("body")[0];
        const div= document.createElement("div");
        body.append(div);
        div.id="appointmentlist";

        let appointments = [{
        id: "123",
        datetime: "23/05/20:2000",
        duration: '2'
        }];

        updateAppointmentsList(appointments);

        const appointmentDiv = document.getElementsByClassName("appointment")[0];
        console.log(appointmentDiv);
        expect(appointmentDiv).not.toBeUndefined();
        const h3Div = appointmentDiv.childNodes[0];
        console.log(h3Div);
        expect(h3Div.innerHTML).toBe("Appointment 123");

       //  expect();
    });
});

