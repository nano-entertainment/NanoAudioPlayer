NanoAudioPlayer
===============

Javascript
===============
```js
$('.audio-player').NanoAudioPlayer({ });
```
settings:
```js
{
  file: '',
  autoplay: false,
  loop: false,
  progressBar: true,
  element: new Audio(),
  cssPrefix: 'audio-player-'
  autoplay: true
}
```

Html
===============
```html
<div class="audio-player">
  <a class="audio-player-play" href="#">
  <a class="audio-player-pause" href="#">
  <a class="audio-player-play-toggle" href="#">PlayToggle</a></div>
  <progress class="audio-player-progressBar" value="0" max="100"></progress>
  <a class="audio-player-volume-up" href="#">+</a>
  <a class="audio-player-volume-down" href="#">-</a>    
</div>
```
