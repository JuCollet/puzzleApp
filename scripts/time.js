function timer(){
/* Dévoile plusieurs pièces si l'animation manuelle prend du retard*/
var timerInterval = setInterval(function(){
    if((puzzle.length-randomNumbers.length)>(puzzle.length-soldeIteration)){
      soldeDiscover++;
      console.log("retard : "+soldeDiscover);
    }
    if(soldeIteration === puzzle.length-3){
      clearInterval(timerInterval);
    }
    soldeIteration++;
  }, 6000)
};
