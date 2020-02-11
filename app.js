let input = document.querySelector('.inpt'),
    ul = document.querySelector('.ul');
    let alert = document.querySelector('.bk');
		let body = document.querySelector('body');

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

ul.addEventListener('click', function (e) {
    if (e.target.parentElement.className === 'lis') {
        e.target.parentElement.remove();
        
    }
    e.preventDefault();
})
let chkb = document.querySelector('.chkbox');

chkb.addEventListener('change', function (e) {
    if (e.target.checked) {
        ul.style.display = 'none';   
    }
    else{
        ul.style.display = 'block';
    }
})
