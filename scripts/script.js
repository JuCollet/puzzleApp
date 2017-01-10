var randomNumbers = [],
    randomZeroUn = function(){return Math.floor(Math.random()*2);},
    soldeIteration = 0,
    soldeDiscover = 0;

function fadeCache(){
    $("#loading").delay(1000).fadeOut(500);
    $("#cache").delay(1500).fadeOut(1000);
}

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        discover();
    }
};

function start(){createPieces();createBlocs();fadeCache();timer();};

function discover(){
  var random = Math.floor(Math.random()*puzzle.length);

  if(soldeDiscover>0){
      soldeDiscover--;
      discover();
  }

  if(randomNumbers.length < puzzle.length-1){
    if(randomNumbers.indexOf(random) != -1 || random === 0){
      discover();
    } else {
      randomNumbers.push(random);
      console.log("problème pièce : "+random);
      discoverAnimation(random, $("#bloc"+random).offset().left, $("#bloc"+random).offset().top);
    }
  }

  if(randomNumbers.length === puzzle.length-1) { //Fin de l'animation
    console.log("Toutes les pieces ont été dévoilées");
    }
};

function discoverAnimation(bloc,posX,posY){
  $("body").append(
    pieceStart1 +
    " class='animInit' id='"+"reveal"+bloc+"' fill='#FF2400'" +
    pieceStart2 +
    pieceForm(puzzle[bloc]) +
    pieceEnd
    );

  $("#reveal"+bloc).animate({top:"20%"},200).animate({top:posY+"px", left:posX+"px"},600).addClass("revealAnim").animate({opacity:"0"});
  $("#bloc"+bloc).delay(800).fadeOut('slow');

};
