//JS
var home = function(){

var interval = 2000;

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

var getRandomFood = function(list){
    var randomNumber = getNumber(1, list.length) - 1;
    return list[randomNumber];
};

var imageList = [
    "blackfeelsgood.png",
    "chingchong.png",
    "cool-jesus.png",
    "feelit.png",
    "feelsgoodman.png",
    "Feels-Good-Man-Frog-06.png",
    "heman.jpg",
    "impossibru.png",
    "Gunther.jpg",
    "stallone.png",
    "wtfben.png",

];

$('#getNumber').click(function(){
    var item = getRandomFood(foodList);
    $(this).html(item);
    var pic = getRandomFood(imageList);
    $("#jankyPic").attr("src", pic);
});

};

$(document).ready(home);
