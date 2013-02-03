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
    opts.element.bind('canplay', function() {
      if( opts.autoplay ) opts.element.play();
    });
    
    //loop
    if( typeof opts.element.loop == 'boolean') {
      opts.element.loop = opts.loop;
    } else {
      opts.element.bind('ended', function() {
        if( opts.loop ) {
          opts.element.duration = opts.element.startTime;
          opts.element.play();
        }
      })
    }
    opts.element.bind('ended', function() {
      if( opts.loop ) {
        opts.element.duration = 0;
        opts.element.play();
      }
    })
    
    
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