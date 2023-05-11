
let output = document.querySelector(".output");
const car = {
    //properties
    name: "fiat",
    model: "500",
    weight: "850",
    color: "white",
    repairs: ["motor", "rem", "raam"],

    
    //methods
    start: function(){
        return "I start";
    },
    drive: function(){
        return "Im driving";
    },
    brake: function(){
        return "I brake";
    },

    stop: function(){
        return "I stop"
    }

};

output.innerHTML = `
<p>De naam van de auto is ${car.name}</p>
<p>${car.drive()}</p>
`


// car.name = "BMW";

