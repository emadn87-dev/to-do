const html = document.querySelector('html');
const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const btn = document.getElementById('btn');
const transBtn = document.getElementById('trans-btn');
const h1 = document.querySelector('.title h1');

let addTask = () => {
    if (inputBox.value === '') {
        alert('لطفا متن را وارد کنید');
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
        saveTime();
    }
    inputBox.value = '';
};
listContainer.addEventListener(
    'click',
    function (e) {
        if (e.target.tagName === 'LI') {
            e.target.classList.toggle('checked');
            saveTime();
        } else if (e.target.tagName === 'SPAN') {
            e.target.parentElement.remove();
            saveTime();
        }
    },
    false
);

let saveTime = () => {
    localStorage.setItem('data', listContainer.innerHTML);
};
let showTask = () => {
    listContainer.innerHTML = localStorage.getItem('data');
};
showTask();
btn.addEventListener('click', addTask);

let translate = () => {
    if (h1.textContent === '📔 لیست وظایف') {
        h1.textContent = 'task list 📔';
        h1.style.direction = 'ltr';
        btn.textContent = 'add';
        inputBox.placeholder = 'write...';
    } else {
        h1.textContent = '📔 لیست وظایف';
        h1.style.direction = 'rtl';
        btn.textContent = 'افزودن';
        inputBox.placeholder = 'بنویس...';
    }
};

transBtn.addEventListener('click', translate);
