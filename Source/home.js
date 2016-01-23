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

doIt();