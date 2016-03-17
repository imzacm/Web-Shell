function html5() {
  var test_canvas = document.createElement("canvas");
  var canvascheck = (test_canvas.getContext)? true : false;
  if (canvascheck == true) {
    return true;
  }
  else {
    return false;
  }
}

function java() {
  addlib(http://java.com/js/deployJava.js);
  var versions = deployJava.getJREs();
  alert(versions);
}
