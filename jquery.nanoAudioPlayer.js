/**
 * nanoAudioPlayer plugin for jQuery
 * by Lasse Nielsen
 * @version 0.1 
 * 03.02.2013
 * http://github.com/nano-entertainment/NanoAudioPlayer
 */
(function($){
  $.fn.nanoAudioPlayer = function( options ){
    var defaults = {
      autoplay: false,
      loop: false,
      element: new Audio()
    };
    
    var opts = $.extend(defaults, options);
    
    // EventListener 
    
    // autoplay    
    opts.element.addEventListener('canplay', function() {
      if( opts.autoplay ) opts.element.play();
    }, false);
 
    var suffix;
 
    if(opts.element.canPlayType("audio/ogg"))
      {
        suffix = "ogg";
      } else {
        suffix = "mp3";
      }
    opts.element.src = opts.file + "." + suffix;
 
    //loop
    if( typeof opts.element.loop == 'boolean') {
      opts.element.loop = opts.loop;
    } else {
      opts.element.addEventListener('ended', function() {
        if( opts.loop ) {
          opts.element.duration = opts.element.startTime;
          opts.element.play();
        }
      }, false)
    }
    
    
    
    // Html-Event Listener
    
    //play
    $(this).find('.play').bind('click', function() {      
      opts.audioElement.play();              
    });
    
    //pause
    $(this).find('.pause').bind('click', function() {      
      opts.audioElement.pause();      
    });
    
    // playToggle
    $(this).find('.play-toggle').bind('click', function() {
      if(opts.audioElement.paused) {
    	opts.audioElement.play();
      } else {
        opts.audioElement.pause();
      }
      
      
    });

  }
})(jQuery);