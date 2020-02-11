// Todo constructor
function Todo(input) {
  this.input = input;
}

// Ui constructor
function UI() {}

UI.prototype.addTodoList = function () {
  let fm = document.querySelector('#add-book').addEventListener('submit', function (e) {
    // create elements
    let newli = document.createElement('li');
    let newSpan = document.createElement('span');
    let newSpan2 = document.createElement('span');
    
    // add classes
    newSpan.className = 'name';
    newSpan2.className = 'delete';
    newSpan2.textContent = 'delete';
    newSpan.appendChild(document.createTextNode(input.value));
    newli.className = 'lis'

    //append to li
    newli.appendChild(newSpan);
    newli.appendChild(newSpan2);

    // append to ul
    ul.appendChild(newli);
    
    e.preventDefault();
})
}