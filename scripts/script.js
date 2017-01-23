function fadeCache(){
    $("#loading").delay(1000).fadeOut(500);
    $("#cache").delay(1500).fadeOut(1000);
}

document.onkeyup = function(e){
    if(e.keyCode === 85){
      // "u" dévoile une pièce avec animation
      discoverPuzzlePiece();
    } else if (e.keyCode === 82){
      // "r" dévoile toutes les pièces
      discoverAllPuzzlePieces();
    } else if (e.keyCode === 70){
      // "f" dévoile une pièce toutes les 3 secondes.
      timer3s.start();
    } else if (e.keyCode === 83){
      // "s" dévoile une pièce toutes les 6 secondes.
      timer6s.start();
    } else if (e.keyCode === 67){
      // Arrête les timers.
      timer3s.stop();
      timer6s.stop();
    }
};

function start(){
  fadeCache();
  puzzleCreate();
};
