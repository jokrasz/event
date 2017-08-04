var list = document.getElementById('list')
console.log(list)
var add = document.getElementById('addElem')
console.log(add)
add.addEventListener('click', function(e) {
  var element = document.createElement('li');
  var li = document.getElementsByTagName("li");
  element.innerHTML = 'item ' + li.length;
  list.appendChild(element);
});
