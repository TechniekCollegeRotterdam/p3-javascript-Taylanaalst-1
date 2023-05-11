let output = document.querySelector(".output");
const boek = {
    //properties
    name: "Corkie",
    athor: "Taylan",
    publisher: "Chulu",
    year: 2023,
    sales: 8234,
    price: "19,99$",
}

output.innerHTML = `
<p>De naam van het boek is ${boek.name}</p>
<p>De auteur van het boek is${boek.athor}</p>
<p>De uitgeverij is ${boek.publisher}</p>
<p>Het boek is in ${boek.year} uitgekomen</p>
<p>Het boek is ${boek.sales} keer verkocht</p>
<p>Het boek is ${boek.price}</p>
`
