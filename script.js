//Якось так:)


//Завдання 1. forEach.!

//(Знайти суму чисел)!

let arr = [5, 6, 7, 8, 9];
let sum1 = 0;

arr.forEach(function (num) {
	sum1 += num;
})
console.log(`Сума чисел = ${sum1}`);

	//-----------------------------

//Метод (reduce)!
	let sum2 = arr.reduce(function (a, b) {
		return a + b;
	}, 0);
	console.log(sum2);

	//---------------------------

//Метод (for)!
	let sum3 = 0;
	for (let i = 0; i < arr.length; i++) {
		sum3 += arr[i];
	}
console.log(sum3);

//---------------------------------------------

//Завдання 2. Map.!!

//Заданий масив з числами. Створити новий масив, що складається з квадратів цих чисел.

let arr2 = [5, 6, 7, 8, 9];
let newArray = arr2.map(number => number ** 2);

console.log(newArray);


//---------------------------------------------

//Завдання 3. Every!!!

//Заданий масив об’єктів. Перевірити, чи всі ключі country мають значення 'Ukraine'.

let arr3 = [
	{name: 'Ivan', country: 'Ukraine'},
	{name: 'Petro', country: 'Ukraine'},
	{name: 'Miguel', country: 'Cuba'}
];

const newArr3 = arr3.every(arr => arr.country.toLowerCase() === 'ukraine');

newArr3
	? console.log('Всі ключі country мають значення "Ukraine".')
	:	console.log('Не всі ключі country мають значення "Ukraine".');


//---------------------------------------------

//Завдання 4. Some!!!!

//Заданий масив об’єктів. Перевіити, чи всі хоч один ключ country має значення 'Cuba'.

let arr4 = [
	{name: 'Ivan', country: 'Ukraine'},
	{name: 'Petro', country: 'Ukraine'},
	{name: 'Miguel', country: 'Cuba'}
]

const newArr4 = arr4.some(obj => obj.country.toLowerCase() !== 'cuba');

newArr3
	? console.log(`Ні один ключ "country" не має значення "Cuba".`)
	: console.log(`Хоча б один ключ "country" має значення "Cuba".`)

console.log(newArr4);


//---------------------------------------------

//Завдання 5. Filter!!!!!

//Заданий масив значень, в ньому є звичайні елементи і підмасиви. Потрібно в ньому залишите тільки підмасиви.

let arr5 = [1, 'string', [3,4], 5, [6, 7]];

const newArr5 = arr5.filter(arr => Array.isArray(arr));
console.log(newArr5);


//---------------------------------------------

//Завдання 6. Reduce!!!!!!

//Заданий масив з числами. Потрібно знайдіти суму перших N елементів до першого нуля.

let arr6 = [1, 2, 3, 0, 4, 5, 6];
const indexOfZero = arr6.indexOf(0);

const sum = arr6.reduce((accum, numeric, index) => {

	if (index < indexOfZero) {
		return accum + numeric;
	}
	return accum;
}, 0);

console.log(`Сума перших N елементів до першого нуля = ${sum}`);

//--

let sumNumeric = 0;
let count = 0;

for (let i = 0; i < arr6.length; i++) {
	sumNumeric += arr6[i];
	count++;

	if (sumNumeric === 10) {
		break;
	}
}

console.log(`Кількість чисел = ${count}`);


//---------------------------------------------

//Завдання 7. Любим методом!!!!!!!

// Заданий масив з числами. Потрібно залишти в ньому тільки позитивні числа. Потім вийняти квадратний корінь із цих чисел.

arr7 = [1, -2, 3, 0, 4, -5, 6, -11];
const wholeNumbers = arr7.filter(num => num > 0);

for (let i = 0; i < wholeNumbers.length; i++) {
	let squareRoot = Math.sqrt(wholeNumbers[i]);

	console.log(`Квадратний корінь: ${squareRoot}`);
}
console.log(`Цілі числа: ${wholeNumbers}`);
