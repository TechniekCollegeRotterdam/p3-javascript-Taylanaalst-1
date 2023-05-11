let output = document.querySelector(".output");
const product = {
    //properties
    name: "oreo",
    model: "Jordan 4",
    color: "white",
    img: "./img/oreo.jpg"
      
    
}

output.innerHTML = `
<p>name : ${product.name}</p>
<p>model : ${product.model}</p>
<p>color : ${product.model}</p>
<img src="${product.img}" alt="">


`