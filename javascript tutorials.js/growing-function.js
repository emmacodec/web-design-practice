function zeroPad(number,width) {
    var string=String(number);
    while(string.length<width)
    string="0"+string;
    return string;
}

function printFarmInventory(cows,chickens,pigs) {
    console.log(zeroPad(cows,3) + "cows");
    console.log(zeroPad(chickens,3) + "chickens");
    console.log(zeroPad(pigs,3) + "pigs");
}

printFarmInventory(7,16,3);