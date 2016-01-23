//JS
var home = function(){

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
link.onclick = getNumber(); // Runs the function on click

function getNumber(small, big) {
    var minNumber = small; // The minimum number you want
    var maxNumber = big; // The maximum number you want
    var randomNumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber); // Generates random number
    //$('#myNumber').html(randomnumber); // Sets content of <div> to number
    return randomNumber; // Returns false just to tidy everything up
}

var foodList = [
    "Chicken rice",
    "Wanton noodles",
    "Duck rice", 
    "Mee siam",
    "Mee goreng",
    "Prata",
    "Pasta",
    "Burger",
    "Sushi",
    "Mee rebus",
    "Prawn noodle",
    "Duck noodle",
    "Chicken chop",
    "Chicken cutlet",
    "Pork chop",
    "Pork cutlet",
    "Lamb chop",
    "Beef steak",
    "Satay bee hoon",
    "Bee hoon",
    "Udon",
    "Nasi Lemak",
    "Ayam penyet",
    "Fried Rice",
    "Dim sum",
    "Mee pok",
    "Mee kia",
    "Yong tau foo",
    "Claypot rice",
    "Curry chicken",
    "Laksa",
    "Ginseng chicken",
    "Nasi briyani",
    "Ramen",
    "Chicken noodle",
    "Pizza",
    "Beef noodles",
    "Beef stew",
    "Hotpot",
    "Mookata",
    "Fried kuay tiao",
    "Hokkien noodle",
    "Kuay chap",
    "Hor fun",
    "Lor mee",
    "Bak kut teh",
    "Fish soup noodle",
    "Korean BBQ",
    "Bibimbab",
    "Lagsane",
    "Seafood",
    "Teppanyaki",
    "Mixed vegetables rice",
    "Nasi mutton masala",
    "Mee mutton masala",
    "Maggi mutton masala",
    "Curry chicken briyani",
    "Fish soup rice",
    "Tom yam noodle",
    "You mian",
    "Ban mian",
    "Carrot cake",
    "Oyster egg",
    "Oyster mee sua",
    "Rojak",
    "Curry fish head",
    "Assam fish head",
    "Murtabak",
    "Sausage platter"
];

var getRandomObj = function(list){
    var randomNumber = getNumber(0, list.length);
    return foodList[randomNumber];
};

var imageList = [
    "https://pbs.twimg.com/profile_images/615768292926423040/sZImFnbw_400x400.png",
    "http://memesvault.com/wp-content/uploads/Feels-Good-Man-Frog-06.png",
    "http://images-cdn.9gag.com/photo/aQ46BOK_700b.jpg",
    "https://www.google.com.sg/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwiDm5OsvcDKAhWUUY4KHR9aAw0QjRwIBw&url=https%3A%2F%2Fforum.teksyndicate.com%2Ft%2Fyaranaika-memes%2F63669&bvm=bv.112454388,d.c2E&psig=AFQjCNFj5YyCTGisFTW_bWuNcXAmf5JiRw&ust=1453657197050639",
    "https://i.ytimg.com/vi/KY5n3Aftass/hqdefault.jpg",
    "http://vignette3.wikia.nocookie.net/pyruslords/images/1/1d/Success_Kid.jpg/revision/latest?cb=20130522022216",
    "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/2e/2e06f6132a4ffd1d157daac81a8e34148b2e26a3_full.jpg"
];

doIt();

$('#getNumber').click(function(){
    var item = getRandomObj(foodList);
    $(this).html(item);
    var pic = getRandomObj(
});

};

$(document).ready(home);