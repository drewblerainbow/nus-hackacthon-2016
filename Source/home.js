var options = [
    ["music", "listeners"],
    ["software", "users"],
    ["films", "viewers"],
    ["comics", "readers"]
];

var interval = 2000;

var holder1 = $(".holder-1"), holder2 = $(".holder-2");
var currentIndex = 0;

function doIt() {
    holder1.html(options[currentIndex][0]);
    holder2.html(options[currentIndex][1]);
    currentIndex = (currentIndex + 1) % options.length;
    setTimeout(doIt, interval);
}

var link = document.getElementById('getNumber'); // Gets the link
link.onclick = getNumber; // Runs the function on click

function getNumber() {
    var minNumber = 1; // The minimum number you want
    var maxNumber = 69; // The maximum number you want
    var randomnumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber); // Generates random number
    $('#myNumber').html(randomnumber); // Sets content of <div> to number
    return false; // Returns false just to tidy everything up
}

doIt();