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
const time = 30;

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

console.log(generateRandomNumbers(1,50,5));




