//store a reference to the button inside a variable called btn
var btn = document.querySelector('button');
//Defined a function that returns a random number.
function random(number) {
    return Math.floor(Math.random()*(number+1));
}

//Function to allow the background color to change with the click of a button
btn.onclick = function() {
    var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = rndCol;
}