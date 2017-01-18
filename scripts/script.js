function fadeCache(){
    $("#loading").delay(1000).fadeOut(500);
    $("#cache").delay(1500).fadeOut(1000);
}

document.onkeyup = function(e){
    if(e.keyCode === 85){
      // "u" dévoile une pièce avec animation
      discoverPuzzlePiece(true);
    } else if(e.keyCode === 73) {
      // "i" dévoile une pièce sans animation
      discoverPuzzlePiece(false);
    } else if (e.keyCode === 82){
      // "r" dévoile toutes les pièces
      discoverAllPuzzlePieces();
    } else if (e.keyCode === 78){
      // "n" reset du Puzzle
      puzzleReset();
    } else if (e.keyCode === 83){
      // "s" démarre le slideshow
      playSlideshow(true);
    } else if (e.keyCode === 68){
      // "d" arrête le slideshow
      playSlideshow(false);
    }
};

function start(){
  $('#puzzle').hide();
  $('#slideshow').hide();
  fadeCache();
  timer();
};
