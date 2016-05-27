function filter() {
  try {
    // Retrieve user posts by the div class id
    var elements = document.getElementsByClassName('_4-u2');
    var rex = /(hillary|bernie|clinton|sanders)/i;
    var badposts = [];
    for (i=0; i<elements.length; i++) {
      var data = elements[i].innerHTML;
      if (rex.test(data)) {
        elements[i].parentNode.removeChild(elements[i]);
        // Since we removed an element, we need to run the for loop
        // using the same iteration value
        i--;
      }
    }
  }
  catch(err) {
    // ignore it
  }
}
var timeout = null;
document.addEventListener("DOMSubtreeModified", function() {
  if(timeout) {
    clearTimeout(timeout);
  }
  timeout = setTimeout(filter, 500);
}, false);

