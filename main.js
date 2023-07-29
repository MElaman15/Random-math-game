const methods = [
    {
        action: '+',
        func: 'plus'
    },
    {
        action: '-',
        func: 'minus'
    },
    {
        action: '*',
        func: 'multiply'
    },
    {
        action: '^',
        func: 'exponentiation'
    }
]

const methods_block = document.querySelector('.wrapper .choose .box');
const blured = document.querySelector('.wrapper .choose');

window.onload = () => blured.style.top = '0%'

function create_methods() {
    for (let i = 0; i < methods.length; i++) {
        let btn = document.createElement('button');
        btn.setAttribute('data-id', i);
        btn.setAttribute('onclick', methods[i].func + '()');
        btn.classList.add('item');
        btn.innerText = methods[i]['action']
        methods_block.append(btn);
    }
}

create_methods();

const btns = document.querySelectorAll('.wrapper .choose button');
const input = document.querySelector('input');
let id;
let task;
let tasks = []; // примеры тут
let res = 0; // result/ответ

function num_limit(len) {
    if (len == 1) return 10
    else if (len == 2) return 100
    else if (len == 3) return 1000
    else if (len == 4) return 10000
}

let time = 0
let t = document.querySelector('.time');


setInterval(() => {
    time++
    t.innerText = time + 's'
}, 1000)


function random_task(t1, t2) {
    tasks = [];
    tasks.push(t1)
    tasks.push(t2)
    task = `${t1} ${methods[id]["action"]} ${t2}`
}

function plus() {
    id = 0
    blured.style.left = '-100%'
    random_task(Math.floor(Math.random() * 150), Math.floor(Math.random() * 101))
    res = tasks[0] + tasks[1]
    document.querySelector('.wrapper .question').innerText = task
}

function minus() {
    id = 1
    blured.style.left = '-100%'
    random_task(Math.floor(Math.random() * 150), Math.floor(Math.random() * 101))
    res = tasks[0] - tasks[1]
    document.querySelector('.wrapper .question').innerText = task
}

function multiply() {
    id = 2
    blured.style.left = '-100%'
    random_task(Math.floor(Math.random() * 25), Math.floor(Math.random() * 11))
    res = tasks[0] * tasks[1]
    document.querySelector('.wrapper .question').innerText = task
}

function exponentiation() {
    id = 3
    blured.style.left = '-100%'
    random_task(Math.floor(Math.random() * 3), Math.floor(Math.random() * 11))
    res = tasks[0] ** tasks[1]
    document.querySelector('.wrapper .question').innerText = task
}

function refresh() {
    if (id == 0) {
        plus()
        input.value = ''
    }
    else if (id == 1) {
        minus()
        input.value = ''
    }
    else if (id == 2) {
        multiply()
        input.value = ''
    }
    else if (id == 3) {
        exponentiation()
        input.value = ''
    }
    else {
        console.log('Чё за фигня (*￣3￣)╭');
    }
}

function open_menu() {
    blured.style.left = '0%'
}

let correct_score = 0
let wrong_score = 0

let correct_answer = document.querySelector('.correct');
let wrong_answer = document.querySelector('.wrong');

input.onkeyup = () => {
    if (input.value == res) {
        correct_score++
        random_task()
        refresh()
        correct_answer.innerText = correct_score
    } else if (input.value.length >= res.toString().length) {
        wrong_score++
        wrong_answer.innerText = wrong_score
        document.querySelector('.wrapper .iAp').classList.add('incorrect-answer');
        input.value = ''

        setInterval(() => {
            document.querySelector('.wrapper .iAp').classList.remove('incorrect-answer');
        },250)
    }
};