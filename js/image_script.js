var originalContent = document.getElementById("container").innerHTML;

function resizeImage() {
  var fileInput = document.getElementById("imageFile");
  var widthInput = document.getElementById("width");
  var heightInput = document.getElementById("height");

  var file = fileInput.files[0];
  var width = widthInput.value;
  var height = heightInput.value;

  if (file) {
    var reader = new FileReader();
    reader.onload = function (e) {
      var image = new Image();
      image.src = e.target.result;
      image.onload = function () {
        var canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(image, 0, 0, width, height);
        var resizedImage = canvas.toDataURL("image/jpeg");
        document.getElementById("imageContainer").innerHTML =
          '<img src="' + resizedImage + '" alt="Resized Image">';
        document
          .getElementById("downloadButton")
          .setAttribute("onclick", 'downloadImage("' + resizedImage + '")');
        document.getElementById("downloadButton").style.display = "inline";
        document.getElementById("resetButton").style.display = "inline";
      };
    };
    reader.readAsDataURL(file);
  }
}

function downloadImage(imageData) {
  var link = document.createElement("a");
  link.href = imageData;
  link.download = "modified_image.jpg";
  link.click();
}
