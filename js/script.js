// DEFINIZIONE DELLE VARIABILI, DELLE FUNZIONI E/O RECUPERO DEGLI ELEMENTI DEL DOM
// RECUPERO GLI ELEMENTI DEL DOM CHE MI SERVONO
const form = document.getElementById(`answers-form`);
const inputFields = document.querySelectorAll(`input`);
const countdown = document.getElementById(`countdown`);
const numberList = document.getElementById(`numbers-list`);
const message = document.getElementById(`message`);
const instruction = document.getElementById(`instruction`);
const button = document.querySelector(`button`);

// DEFINIZIONE DELLE VARIABILI
const min = 1;
const max = 50;
const totalNumbers = 5;
let time = 30;
let numbers;
let li = ``;

// DEFINIZIONE DELLE FUNZIONI UTILI
const generateRandomNumbers = (min, max, tot) => {
    // DEFINISCO L'ARRAY VUOTO CHE CONTIENE I NUMERI CASUALI
    const numbers = [];
    // GENERO I 5 NUMERI CASUALi
    for(let i=0; i<tot; i++){
        const num = Math.floor(Math.random() * (max - min +1 )) + min;
        numbers.push(num);
    }

    // RESTITUISCO L'ARRAY
    return numbers;
}

// CORPO DEL PROGRAMMA
// GENERAZIONE NUMERI CASUALI INVOCANDO LA FUNZIONE

numbers = generateRandomNumbers(min, max, totalNumbers);
console.log(numbers);

// GENERO I LIST ITEM DA APPENDERE ALL'ELEMENTO DEL DOM
for(let i=0; i<numbers.length; i++){
    li += `<li>${numbers[i]}</li>`
}

// INSERIMENTO LIST ITEM GENERATI NEL DOM
numberList.innerHTML = li;

// MOSTRO NEL DOM IL TIMER
countdown.innerText = time;

// FACCIO PARTIRE IL COUNTDOWN
const timer = setInterval(() => {
    time --;
    countdown.innerText = time;
    if(time === 0){
        clearInterval(timer);
        form.classList.remove(`d-none`);
        numberList.classList.add(`d-none`);
        instructions.innnerText = `Inserisci i valori che ricordi. Non è importante l\`ordine.`;
    }
}, 1000);








