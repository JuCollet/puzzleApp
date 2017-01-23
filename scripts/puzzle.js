const rows = 15,
      col = 15,
      blocWidth = 70,
      blocHeight = 70,
      taillePiece = 50,
      randomZeroUn = function(){return Math.floor(Math.random()*2);},
      pieceStart1 = '<svg',
      pieceStart2 = 'width="70px" height="70px">',
      u0 = '<path d="M43.941,10c-0.498,4.5-4.309,8-8.941,8s-8.443-3.5-8.941-8H10v13h11v13h28V23h11V10H43.941z"/>',
      u1 = '<path d="M45,10c0-5.523-4.477-10-10-10S25,4.477,25,10H10v13h11v13h28V23h11V10H45z"/>',
      u2 = '<polygon points="60,10 10,10 10,23 21,23 21,36 49,36 49,23 60,23 "/>',
      r0 = '<path d="M52,35c0-4.633,3.5-8.443,8-8.941V10H47v11H34v28h13v11h13V43.941C55.5,43.443,52,39.633,52,35z"/>',
      r1 = '<path d="M60,25V10H47v11H34v28h13v11h13V45c5.523,0,10-4.477,10-10S65.523,25,60,25z"/>',
      r2 = '<polygon points="60,60 60,10 47,10 47,21 34,21 34,49 47,49 47,60 "/>',
      b0 = '<path d="M49,47V34H21v13H10v13h16.059c0.498-4.5,4.309-8,8.941-8s8.443,3.5,8.941,8H60V47H49z"/>',
      b1 = '<path d="M49,47V34H21v13H10v13h15c0,5.523,4.477,10,10,10s10-4.477,10-10h15V47H49z"/>',
      b2 = '<polygon points="10,60 60,60 60,47 49,47 49,34 21,34 21,47 10,47 "/>',
      l0 = '<path d="M23,21V10H10v16.059c4.5,0.498,8,4.309,8,8.941s-3.5,8.443-8,8.941V60h13V49h13V21H23z"/>',
      l1 = '<path d="M23,21V10H10v15C4.477,25,0,29.477,0,35s4.477,10,10,10v15h13V49h13V21H23z"/>',
      l2 = '<polygon points="10,10 10,60 23,60 23,49 36,49 36,21 23,21 23,10 "/>',
      pieceForm = function(formCode){
        finalForm = "";
            switch (formCode[0]) {
              case 0:
                finalForm += u0;
                break;
              case 1:
                finalForm += u1;
                break;
              case 2:
                finalForm += u2;
                break;
            };
            switch (formCode[1]) {
              case 0:
                finalForm += r0;
                break;
              case 1:
                finalForm += r1;
                break;
              case 2:
                finalForm += r2;
                break;
            };
            switch (formCode[2]) {
              case 0:
                finalForm += b0;
                break;
              case 1:
                finalForm += b1;
                break;
              case 2:
                finalForm += b2;
                break;
            };
            switch (formCode[3]) {
              case 0:
                finalForm += l0;
                break;
              case 1:
                finalForm += l1;
                break;
              case 2:
                finalForm += l2;
                break;
            };
          return finalForm;
      },
      pieceEnd = '</svg>',
      secret = [53,54,55,68,69,70,83,84,85];
let colonneGauche = [],
    colonneDroite = [],
    calCol = col,
    bordHaut = [],
    bordBas = [],
    puzzle = [],
    randomNumbers = [],
    posX = -10,
    posY = -10,
    puzzleEnd = false,
    timer3s = timer(3000),
    timer6s = timer(6000);

// Création du puzzle
function puzzleCreate(){
  /* Création d'un tableau contenant les numéros des pièces
     se trouvant aux extrémités gauche et droite (sauf coin)*/
  for(i=0;i<(rows-2);i++){
    colonneGauche.push(calCol+1);
    colonneDroite.push(calCol+col);
    calCol += col;
  };
  /* Création d'un tableau contenant les numéros des pièces
     se trouvant aux extrémités haute et basse (sauf coin) */
  for(i=0;i<(col-2);i++){
    bordHaut.push(i+2);
    bordBas.push(((col*rows)-col)+(i+2));
  };
  // Création aléatoire des pièces
  for(i=0;i<=(col*rows);i++){
    let puzzlePiece = [];
    for(j=0;j<4;j++){
      puzzlePiece[j] = randomZeroUn();
    };
  puzzle.push(puzzlePiece);
  };
  console.log(puzzle.length-1+" pièces créées");
  /* Toutes les pièces ont été créées > vérification des bords
     haut et gauche de chaque pièce pour qu'elle s'emboite
     dans les pièces voisines */
  for(i=1;i<puzzle.length;i++){
    // A - Verification des bords
    // 1-Est-ce que la pièce forme un coin ?
    if(i === 1){
      puzzle[i][0] = 2;
      puzzle[i][3] = 2;
    };
    if(i === col){
      puzzle[i][0] = 2;
      puzzle[i][1] = 2;
    };
    if(i === (((rows*col)-col)+1)){
      puzzle[i][2] = 2;
      puzzle[i][3] = 2;
    };
    if(i === puzzle.length-1){
      puzzle[i][1] = 2;
      puzzle[i][2] = 2;
    };
    // 2-Est-ce que la pièce est au bord ?
    if(bordHaut.indexOf(i) != -1){
      puzzle[i][0] = 2;
    };
    if(bordBas.indexOf(i) != -1){
      puzzle[i][2] = 2;
    };
    if(colonneGauche.indexOf(i) != -1){
      puzzle[i][3] = 2;
    };
    if(colonneDroite.indexOf(i) != -1){
      puzzle[i][1] = 2;
    };
    // B - Verification de la pièce du dessus
    if(i > col && puzzle[i][0] != 2){
      if(puzzle[i-(col)][2] === 0){
        puzzle[i][0] = 1;
      } else {
        puzzle[i][0] = 0;
        };
      };
    // C - Verification de la pièce de gauche
    // Si la pièce n'est pas à un bord gauche
    if(puzzle[i][3] != 2){
      if(puzzle[i-1][1] === 0){
      puzzle[i][3] = 1;
      } else {
        puzzle[i][3] = 0;
      };
    };
  };
  // Ajout des pièces au DOM avec jQuery
  for(i = 1; i<=puzzle.length-1; i++){
    $("#puzzle").append(
      pieceStart1 +
      " id='bloc"+i+"' class='puzzlePiece'" +
      "style='position:absolute;top:"+String(posY)+"px;left:"+String(posX)+"px;'" +
      pieceStart2 +
      pieceForm(puzzle[i]) +
      pieceEnd
    );
    posX += taillePiece;
    // Retour à la ligne en fin de rangée
    if(i%col === 0){
      posY += taillePiece;
      posX = -10;
    };
  };
};
// Révélation des pièces du Puzzle
function discoverPuzzlePiece(){
  const random = Math.floor(Math.random()*puzzle.length);
  // Est-ce qu'il reste des pièces à révéler ?
  if(randomNumbers.length < puzzle.length-1){
    // si oui, est-ce que la pièce a déjà été révélée ?
    if(randomNumbers.indexOf(random) != -1 || random === 0){
      discoverPuzzlePiece();
    } else if(secret.indexOf(random) != -1 && randomNumbers.length < 200) {
      discoverPuzzlePiece();
    } else {
      randomNumbers.push(random);
      $("body").append(pieceStart1+" class='animInit' id='"+"reveal"+random+"' fill='#FF2400'"+pieceStart2+pieceForm(puzzle[random])+pieceEnd);
      $("#reveal"+random).animate({top:"20%"},200).animate({top:($("#bloc"+random).offset().top)+"px", left:($("#bloc"+random).offset().left)+"px"},600).addClass("revealAnim").animate({opacity:"0"}, function(){$("#bloc"+random).fadeOut('short');});
      console.log((puzzle.length-randomNumbers.length)-1+' pièces restantes');
    };
  } else {
    // Il ne reste plus de pièce à révéler, fin de l'animation
    puzzleEnd = true;
    console.log("Toutes les pieces ont été dévoilées");
  };
};
// Révèle toutes les pièces;
function discoverAllPuzzlePieces(){
  puzzleEnd = true;
  for(i=0;i<puzzle.length;i++){
    $("#bloc"+i).delay(i*4).fadeOut('slow');
  };
};

function timer(time){
  let interval = null,
      running = false;
  return {
    start:function(){
      if(!running) {
        interval = setInterval(function(){
        if(!puzzleEnd) {
          discoverPuzzlePiece();
          console.log(time/1000+'s timer running');
        }
        else {
          clearInterval(interval);
        }
        },time);
      } else {
        console.log(time/1000+'s timer already running')
      };
      running = true;
    },
    stop:function(){
      clearInterval(interval);
      console.log(time/1000+'s timer stopped');
      running = false;
    }
  };
};
