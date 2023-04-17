let output = document.getElementById("tekst");
let input = 

let winkelmand = ["Bananen", "Whiskey", "Chips", "Bonen ", "Aardappelen"];

//opdr 1
output.innerText = "er zitten" + winkelmand.length + "producten in mijn winkelmand";

//opdr 2

// output.innerText = "uw producten zijn" + winkelmand;

//opdr 3
output.innerText = winkelmand[3] + "staat op de vierde plek in uw winkelmand"

//opdr 4
winkelmand[1] = "bier";

//opdr 5
function add_product() {
winkelmand.push("water");
output.innerText = winkelmand;
}

//opdr 6
if (winkelmand.length >= 1){
output.innerText = winkelmand;
} else{
output.innerText = "u heeft niet genoeg producten om te tonen";
}

//opdr 7
if (winkelmand[4] == "drop"){
output.innerText = winkelmand;
} else{
output.innerText = "u heeft geen drop";
}

//opdr 8
output.innerText = winkelmand.join(" ");

//opdr 9
winkelmand.splice(0, 2)
output.innerText = winkelmand;

//opdr 10
winkelmand.sort()
output.innerText = winkelmand;