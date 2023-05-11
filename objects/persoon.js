let output = document.querySelector(".output");
const persoon = {
    //properties
    name: "Verditos",
    age: 18,
    birthday: "25-04-2005",
    gender: "man",
    alive: true,
    hobby: ["gamen", "voetbal", "eten", "slapen"],
      
    
}

output.innerHTML = `
<p>De naam van het persoon is ${persoon.name}</p>
<p>De leeftijd van het persoon is ${persoon.age}</p>
<p>Geboortedatum ${persoon.birthday}</p>
<p>Het geslacht van het persoon is een ${persoon.gender}</p>
<p>Leeft het persoon? ${persoon.alive}</p>
<p>Hobbies van het persoon ${persoon.hobby}</p>


`