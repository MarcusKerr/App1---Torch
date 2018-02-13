// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in cordova-simulate or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener('resume', onResume.bind(this), false);
    };

    // Target HTML button 
    var torch = document.getElementById("lightButton");

    // When button is clicked call the let there be light funciton
    torch.addEventListener('click', letThereBeLight);

    // This function runs when the button has been clicked
    function letThereBeLight() {

        // When the button is pressed toggle the light
        window.plugins.flashlight.toggle();

        // Check whether the light is on or off
        var isOn = window.plugins.flashlight.isSwitchedOn();

        // If the light is on change the text of the button to turn off 
        if (isOn == true){
            torch.innerHTML = "Turn Off";
        }

        // If the light is off chenge the text of the button to turn on
        else {
            torch.innerHTML = "Turn On";
        }
    }    

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
} )();