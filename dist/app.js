var message = "Igor Laur";
console.log(message);
var episode = 4;
console.log("This is episode " + 4);
episode = episode + 1;
console.log("Next episode is " + episode);
var favoriteCar; // posso tirar string, porém ele não me mostrará onde está o erro e passará o último valor por cima
favoriteCar = 'Mustang';
// favoriteCar = 11
console.log("My favorite car is " + favoriteCar);
var isEnoughToBeatMF = function (parsecs) {
    return parsecs < 12;
};
var distance = 14;
console.log("Is " + distance + " to go to the other world? " + (isEnoughToBeatMF(distance) ? 'YES' : 'NO') + " ");
// Arrow function
var call = function (name) { return console.log("Do you copy, " + name); };
call('R2');
// End
function inc(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
console.log("inc (5, 1) = " + inc(5, 1));
console.log("inc (5) = " + inc(5));
