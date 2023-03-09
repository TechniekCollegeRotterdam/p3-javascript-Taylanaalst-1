let nav = document.getElementById("nav");

document.body.addEventListener('mousemove', function(e) { 
   if (e.clientX < 10) {
    nav.classList.add("show-nav")
   }
});

document.body.addEventListener('mouseout', function(e) { 
    if (e.clientX > 10) {
     nav.classList.add("hide-nav")
    }
 });