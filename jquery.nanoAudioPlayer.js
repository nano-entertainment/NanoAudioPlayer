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
      element: new Audio()
    };
    
    var opts = $.extend(defaults, options);
    
    // EventListener autoplay / loop
    
    opts.element.bind('canplay', function() {
      if( opts.autoplay ) opts.element.play();
    });
    
    
    // Html-Event Listener
    
    $(this).find('.play-toggle').bind('click', function() {
      if(opts.audioElement.paused) {
    	opts.audioElement.play();
      } else {
        opts.audioElement.pause();
      }
    });

  }
})(jQuery);