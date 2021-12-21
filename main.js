window.addEventListener('load', main);

function main() {
    addItemEvent();
}

function addItemEvent() {
    let form = document.getElementById('this-form');
    form.addEventListener('submit', checkIfEmpty);
}

function checkIfEmpty(event) {
    event.preventDefault();
    if (document.getElementById('todo-input').value === "") {
        alert('Beskriv vad du vill lägga till.');
    } else {
        addItem();
    }
}

function addItem() {
    let list = document.getElementById('todo-list')
    let todo = document.getElementById('todo-input').value;
    let added = document.createElement('li');
    added.setAttribute('id', 'list-item-id')
    added.appendChild(document.createTextNode(todo));
    list.appendChild(added);
    document.getElementById('todo-input').value = '';
    added.addEventListener('click', dashItem);
    todoCounter();
}

function todoCounter() {
    let listSize = document.querySelectorAll('li').length;
    let amount = document.getElementById('amount');
    amount.innerText = listSize;

}

function dashItem(event) {
    event.target.classList.toggle('finished');
}