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
    "http://memesvault.com/wp-content/uploads/Feels-Good-Man-Frog-06.png",
    "https://static1.fjcdn.com/thumbnails/comments/The+feels+good+meme+_8904f29d2eee2a25fa6c458fba1f8cfb.png",
    "https://i.ytimg.com/vi/KY5n3Aftass/hqdefault.jpg",
    "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/2e/2e06f6132a4ffd1d157daac81a8e34148b2e26a3_full.jpg",
    "http://25.media.tumblr.com/tumblr_mcx4h0P39u1rdd4s9o1_r1_500.png",
    "https://outsidethewalls.files.wordpress.com/2012/08/cool-jesus.png",
    "http://justsomething.co/wp-content/uploads/2013/11/guns-replaced-thumbs-up-20.jpg"
];

$('#getNumber').click(function(){
    var item = getRandomFood(foodList);
    $(this).html(item);
    var pic = getRandomFood(imageList);
    $("#jankyPic").attr("src", pic);
});

};

$(document).ready(home);