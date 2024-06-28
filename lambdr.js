window.onload = function() {
  var figures = document.querySelectorAll('figure');
  for (var i = 0; i < figures.length; i++) {
    var figcaption = figures[i].querySelector('figcaption');
    figcaption.innerHTML = '<b>Figure ' + (i + 1) + '.</b> ' + figcaption.innerHTML;
  }
};