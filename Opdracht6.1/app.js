let text = document.getElementById("inputField");
let button = document.getElementById("addToDo");
let container = document.getElementById("toDoContainer");

button.addEventListener("click", function() {
    let p = document.createElement("p");
    p.innerText = text.value;
    container.appendChild(p)
    

    text.value = "";

    
    p.addEventListener("click", function(){
        p.style.textDecoration = "line-through";
      });

      p.addEventListener("dblclick", function(){
        container.removeChild(p);
    
     });
    })



