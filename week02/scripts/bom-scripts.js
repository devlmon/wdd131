/*
const button = document.querySelector('button');
const input = document.querySelector('#favchap');
const list = document.querySelector('#list');
const listItem = document.createElement('li');
const deleteButton = document.createElement('button');

listItem.textContent = input.value;
deleteButton.textContent = '❌';
deleteButton.ariaLabel = `Delete ${input.value}`;

listItem.append(deleteButton)
list.append(listItem);*/

const button = document.querySelector('button');
const input = document.querySelector('#favchap');
const list = document.querySelector('#list');

button.addEventListener('click', function () {
    if (input.value.trim() !== '') {
        const listItem = document.createElement('li');
        const deleteButton = document.createElement('button');

        listItem.textContent = input.value;
        deleteButton.textContent = '❌';
        deleteButton.ariaLabel = `Delete ${input.value}`;
        deleteButton.addEventListener('click', function () {
            list.removeChild(listItem);
            input.focus();
        });

        listItem.append(deleteButton);
        list.append(listItem);

        input.value = '';
        input.focus();
    }
});

