//Variables for each element that needs JS control
//Hamburger icon
var hamburger = document.getElementById("hamburger-button");

//Collapse div
var collapse = document.getElementById("collapse");

//Menu buttons

var menubutton = document.getElementById("home-button");
var aboutbutton = document.getElementById("about-button");
var ctabutton = document.getElementById("cta-button");
var portfoliobutton = document.getElementById("portfolio-button");
var contactbutton = document.getElementById("contact-button");

//Add all menubuttons to array
var buttons = [menubutton, aboutbutton, portfoliobutton, contactbutton, ctabutton];


//Eventlistener to check for clicking on the menu button
hamburger.addEventListener("click", function() {
    if ($(collapse).hasClass("collapsing")) {

    } else {
        $('.collapse').collapse("toggle");
        hamburger.classList.toggle("rotate");
    }
});

/* Adding click eventlisteners to all buttons in buttons array
 * with an enhanced for loop, and getting their anchor parts to 
 * use the jQuery animate function with,
 * in this case scrolling top.
 */

for (button of buttons) {
    //Couldn't get the anchortag to work with the home button
    if (button.id !== "home-button") {
        button.addEventListener("click", function() {
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 400, function() {
                    window.location.hash = hash;
                });
            }
        });
    } else {
        //So I manually declared an anchorpoint for the scrolltop function
        button.addEventListener("click", function() {
            $('html, body').animate({
                scrollTop: $("#navigation").offset().top
            }, 400)
        });
    }
}

//Showing the modal if the form is filled out and user clicks submit
//Aswell as reset the form.
$('#email-form').on('submit', function(e) {
    e.preventDefault(); //stop submit
    $('#email-modal').modal('show');
    $('#email-form').trigger("reset");
});