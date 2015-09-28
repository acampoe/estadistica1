var shown = false, display = 'none';
function showMenu() {
  var items = document.querySelectorAll('nav ul li:not(#selected)');
  shown ? display = 'none' : display = 'block';
  for (var i = 0; i < items.length; i++) {
    items[i].style.display = display;
  }
  shown = !shown;
}
