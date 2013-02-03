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
      file: '',
      autoplay: false,
      loop: false,
      progressBar: true,
      element: new Audio(),
      cssPrefix: 'audio-player-'
    };
    
    var opts = $.extend(defaults, options);
    var player = this;
    
    /**
     * EventListener
     */
    
    // autoplay    
    opts.element.addEventListener('canplay', function() {
      if( opts.autoplay ) opts.element.play();
    }, false);
 
 
    //loop
    if( typeof opts.element.loop == 'boolean') {
      opts.element.loop = opts.loop;
    } else {
      opts.element.addEventListener('ended', function() {
        if( opts.loop ) {
          opts.element.currentTime = opts.element.startTime;
          opts.element.play();
        }
      }, false)
    }
   
    /
    if(opts.progressBar)
    {
      //current time update
      opts.element.addEventListener('timeupdate', function() {
      
      $(player).find('.'+ opts.cssPrefix +'progressBar').attr('value', opts.element.currentTime);
      
    }, false);
    
    //max time update
    opts.element.addEventListener('durationchange', function() {
      $(player).find('.'+ opts.cssPrefix +'progressBar').attr('max', opts.element.duration);
    }, false);
    }
    
    
    
    
    
    var suffix;
    
    //add audio
    if(opts.element.canPlayType("audio/ogg"))
    {
      suffix = "ogg";
    } else {
      suffix = "mp3";
    }  
    
    opts.element.src = opts.file + "." + suffix;
    
    

    
    // Html-Event Listener
    
    //play
    $(this).find('.'+ opts.cssPrefix +'play').bind('click', function(e) {      
      e.preventDefault();
      opts.element.play();              
      
    });
    
    //pause
    $(this).find('.'+ opts.cssPrefix +'pause').bind('click', function(e) {   
      e.preventDefault();
      opts.element.pause();      
    });
    
    
    // playToggle
    $(this).find('.'+ opts.cssPrefix +'play-toggle').bind('click', function(e) {
      e.preventDefault();
      if(opts.element.paused) {
    	opts.element.play();
      } else {
        opts.element.pause();
      }
      
      
    });
    
    // volumeUp
    $(player).find('.'+ opts.cssPrefix +'control-volume-up').bind('click', function(e) {   
      e.preventDefault();
      if(opts.element.volume < 1.0) opts.element.volume = opts.element.volume + 0.1;      
    });
    
    $(player).find('.'+ opts.cssPrefix +'control-volume-down').bind('click', function(e) {   
      e.preventDefault();
      if(opts.element.volume > 0.0) opts.element.volume = opts.element.volume - 0.1;     
    });
    
    
    return this;

  }
})(jQuery);