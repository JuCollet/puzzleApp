var rows = 15,
    col = 20,
    blocWidth = 70,
    blocHeight = 70,
    taillePiece = 50,
    colonneGauche = [],
    colonneDroite = [],
    bordHaut = [],
    bordBas = [],
    puzzle = [];

    function colonnes(){
      var calCol = col;
      for(i=0;i<(rows-2);i++){
        colonneGauche.push(calCol+1);
        colonneDroite.push(calCol+col);
        calCol += col;
      }
    }

    function rangees(){
      for(i=0;i<(col-2);i++){
        bordHaut.push(i+2);
        bordBas.push(((col*rows)-col)+(i+2));
      }
    }

    function createPieces(){
      colonnes();
      rangees();

      // Création des pièces
      for(i=0;i<=(col*rows);i++){
        var puzzlePiece = [];
        for(j=0;j<4;j++){
          puzzlePiece[j] = randomZeroUn();
         }
      puzzle.push(puzzlePiece);
      }
      console.log(puzzle.length-1+" pièces créées");
      piecesRefactor();
    }

    function piecesRefactor(){
      for(i=1;i<puzzle.length;i++){

        // A - Verification des bords
        // 1-Est-ce que la pièce forme un coin ?
        if(i == 1){
           puzzle[i][0] = 2;
           puzzle[i][3] = 2;
           }
        if(i == col){
           puzzle[i][0] = 2;
           puzzle[i][1] = 2;
        }
        if(i == (((rows*col)-col)+1)){
           puzzle[i][2] = 2;
           puzzle[i][3] = 2;
        }
        if(i == puzzle.length-1){
           puzzle[i][1] = 2;
           puzzle[i][2] = 2;
        }
        // 2-Est-ce que la pièce est au bord ?
        if(bordHaut.indexOf(i) != -1){
           puzzle[i][0] = 2;
        }
        if(bordBas.indexOf(i) != -1){
           puzzle[i][2] = 2;
        }
        if(colonneGauche.indexOf(i) != -1){
           puzzle[i][3] = 2;
        }
        if(colonneDroite.indexOf(i) != -1){
           puzzle[i][1] = 2;
        }
        // B - Verification de la pièce du dessus
        if(i > col && puzzle[i][0] != 2){
          if(puzzle[i-(col)][2] === 0){
            puzzle[i][0] = 1;
          } else {
            puzzle[i][0] = 0;
          }
        }
        // C - Verification de la pièce de gauche
        // Si la pièce n'est pas à un bord gauche
        if(puzzle[i][3] != 2){
          if(puzzle[i-1][1] === 0){
            puzzle[i][3] = 1;
          } else {
            puzzle[i][3] = 0;
          }
        }
      }
    }

    function createBlocs(){
    var posX = -10,
        posY = -10;
    for(var i = 1; i<=puzzle.length-1; i++){
      $("#puzzle").append(
        pieceStart1 +
        " id='bloc"+i+"' class='puzzlePiece'" +
        "style='position:absolute;top:"+String(posY)+"px;left:"+String(posX)+"px;'" +
        pieceStart2 +
        pieceForm(puzzle[i]) +
        pieceEnd
      );
      posX += taillePiece;
      if(i%col === 0){
        posY += taillePiece;
        posX = -10;
      }
    }}
