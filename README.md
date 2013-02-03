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
  <div><a class="play" href="#">Play</a></div>
  <div><a class="pause" href="#">Pause</a></div>
  <div><a class="play-toggle" href="#">PlayToggle</a></div>
</div>
```
