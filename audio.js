var context = new AudioContext;
var myAudioBuffer = null;
/*var labelAnnotations =  [
                {
                    "mid": "/m/068hy",
                    "description": "pet",
                    "score": 0.98414
                },
                {
                    "mid": "/m/0bt9lr",
                    "description": "dog",
                    "score": 0.97904623
                },
                {
                    "mid": "/m/04rky",
                    "description": "mammal",
                    "score": 0.96168429
                },
                {
                    "mid": "/m/0jbk",
                    "description": "animal",
                    "score": 0.95276582
                }
            ];

            document.getElementById("demo").innerHTML =
            labelAnnotations[0].description +
            + "<br/>" +
            labelAnnotations[1].description +
            + "<br/>" +
            labelAnnotations[2].description +
            + "<br/>" +
            labelAnnotations[3].description + ;
*/
var strJSON = '{"mid": "/m/068hy","description": "pedestrian1","score": 0.98414}';
var objJSON = eval("(function(){return " + strJSON + ";})()");
console.log(objJSON.description + ".wav");
console.log(objJSON.score * '100');
var url = ("sounds/" + objJSON.description + ".mp3");

function loadSound(url) {
  var request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.responseType = 'arraybuffer';
  request.onload = function() {
    //alert("sound loaded"); //test
    context.decodeAudioData(request.response, function(buffer) {
      myAudioBuffer = buffer;
      //alert("sound decoded"); //test
    });
  }
  request.send();
}

var source = null;
function playSound(anybuffer) {
  source = context.createBufferSource();
  source.buffer = anybuffer;
  source.connect(context.destination);
  source.start();
}

function stopSound() {
  if (source) {
    source.stop();
  }
}
