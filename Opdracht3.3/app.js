let clicks = 0;

function onClick() {
  clicks += 1;
  document.getElementById("clicks").innerText = clicks; //niet in de functie maken maar buiten de functie en dus opslaan in een variabele

  if (clicks == 10) {
    clicks -= 10;
    //hier moet clicks weer bij 0 beginnen, oftewel: clicks = 0;
}; //bij een if moet ook een else, wat moet daar komen te staan?

};

