// ==============================================
//
// Les deux barres obliques indiquent un commentaire.
// Assure-toi d'en mettre pour expliquer chacun des éléments de ton application,
// ça va t'aider à débugger et à modifier. Fais-moi confiance! ;)
//
// ==============================================


window.addEventListener('load', () => {

  const canvas = document.querySelector("#canvas");
  const context = canvas.getContext("2d");


// FB MOD ----- DÉBUT DE MES MODIFICATIONS =========================================

  var color = "rgb(0,0,0)"; // couleur par défaut : noir (0,0,0) 
  function change(e){
    color = this.value; // Lorsque l'utilisateur choisi une nouvelle couleur, on change la variable color 
  }

// Demande au document (la page html) de trouver l'élément id = color
// S'il y a un changement, on appelle la fonction change 
document.getElementById("color").onchange = change;

// FIN FB MOD ----- FIN DE MES MODIFICATIONS =======================================

  //Resizing
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth; 

  //variables
  let painting = false;

  function startPosition(e){
    painting = true;
    draw(e);
  }

  function finishPosition () {
    painting = false;
    context.beginPath();
  }

  function draw (e) {
    if (!painting) return;
    context.lineWidth = 15;
    context.lineCap = 'round';
    context.lineTo(e.clientX, e.clientY);
    context.stroke();
    context.beginPath();
    context.moveTo(e.clientX, e.clientY);
    // VARIABLE QUI DÉTERMINE LA COULEUR
    context.strokeStyle = color; // ton code "orange"
  }

  //EventListeners
  canvas.addEventListener("mousedown", startPosition); // Clique bouton de la souris (mousedown)
  canvas.addEventListener("mouseup", finishPosition); // relâche le bouton de la souris (mouseup)
  canvas.addEventListener("mousemove", draw); // quand la souris bouge (mousemove)

});
