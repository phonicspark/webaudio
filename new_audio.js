/*new_audio_js*/

var context;
var bufferLoader;

function loadAndPlay() {
    try {
        context = new AudioContext();
    }
    catch(e) {
        alert("Web Audio API is not supported in this browser");
    }

    bufferLoader = new BufferLoader(
        context,
        [
        "sounds/pedestrian2.mp3",
        "sounds/urban area.mp3",
        "sounds/road.mp3",
        ],
        finishedLoading
    );

    bufferLoader.load();
}



function finishedLoading(bufferList) {
    // Create three sources and buffers
    var kick = context.createBufferSource();
    var snare = context.createBufferSource();
    var hihat = context.createBufferSource();
    kick.buffer = bufferList[0];
    snare.buffer = bufferList[1];
    hihat.buffer = bufferList[2];

    kick.connect(context.destination);
    snare.connect(context.destination);
    hihat.connect(context.destination);
	// Play them together
    kick.start(0);
    snare.start(0);
    hihat.start(0);
}

var kick = context.createBufferSource();
var snare = context.createBufferSource();
var hihat = context.createBufferSource();
function stopSound() {
  var kick = context.createBufferSource();
  var snare = context.createBufferSource();
  var hihat = context.createBufferSource();
  if (kick) {
    kick.stop(0); // Stop source 1 immediately
  }
  if (snare) {
    snare.stop(0); // Stop source 2 immediately
  }
  if (hihat) {
    hihat.stop(0); // Stop source 3 immediately
  }
}
