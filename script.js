var inputElement = document.getElementById('input');
var countElement = document.getElementById('count');

inputElement.addEventListener('input', function() {
  var text = inputElement.value;
  var words = text.trim().split(/\s+/);
  var wordCount = words.length;
  countElement.textContent = wordCount;
});
