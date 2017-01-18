const slideshow = function(playSlides){
  let slide = null,
      playing = false;
  return {
    start: function(){
      if(!playing) {
        console.log("slideshow started");
        slide = setInterval(playSlides, 5000);
        playing = true;
      }
    },
    stop: function(){
      if(playing){
        console.log("slideshow stopped");
        clearInterval(slide);
        playing = false;
      }
    }
  };
};

let playingSlides = false,
    photoSlides = slideshow(function(){
      alert("ok");
    });

const playSlideshow = function(play){
  $("#puzzle").fadeOut(500, function(){
    $('.animInit').remove();
    $('#puzzle').empty();
  });
  puzzlePlaying = false;
  if(play){
    playingSlides = true;
    $('#slideshow').fadeIn(500);
    photoSlides.start();
  } else {
    playingSlides = false;
    photoSlides.stop();
  };
};
