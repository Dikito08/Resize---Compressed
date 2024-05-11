var audioData = "";

function displayAudio() {
  var audioFile = document.getElementById("audioFile").files[0];
  if (audioFile) {
    var audioPlayer = document.getElementById("audioPlayer");
    audioPlayer.src = URL.createObjectURL(audioFile);
    audioPlayer.style.display = "block";
    document.getElementById("compressButton").style.display = "inline";
    document.getElementById("downloadButton").style.display = "none";
    audioData = audioFile;
  }
}

function compressAudio() {
  // Simulated compression process
  alert("Audio compressed successfully!");
  document.getElementById("downloadButton").style.display = "inline";
}

function downloadAudio() {
  var link = document.createElement("a");
  var audioFileName =
    audioData.name.replace(/\.[^/.]+$/, "") +
    "_compressed" +
    audioData.name.match(/\.[^/.]+$/);
  link.href = URL.createObjectURL(audioData);
  link.download = audioFileName;
  link.click();
}
