const marvels = ["1", "2", "3", "4"];

const addMarvel = () => {
    marvels.push("spiderman");
}

addMarvel()

for(let marvel of marvels){
console.log(marvel);
}