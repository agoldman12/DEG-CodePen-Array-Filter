/* 
Below we have an array of objects. Each object represents a person.

Goal: Learn to use the Array.filter method

Task: Create a new array that contains only people who have alligance to "House Stark" 

Hint: You will need to define a custom filter function

For reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
*/

const people = [
	{name: 'Robb Stark', allegiance: 'House Stark'},
	{name: 'Danerys Targaryen', allegiance: 'House Targaryen'},
	{name: 'Cersei Lannister', allegiance: 'House Lannister'},
	{name: 'Jon Snow', allegiance: 'House Stark'},
	{name: 'Lysa Aryn', allegiance: 'House Baelish'},
	{name: 'Arya Stark', allegiance: 'House Stark'}
];

// filter people array here
/*const houseStark = people.filter(function(person){
		
		return person.allegiance == 'House Stark';
});
*/

const houseStark = people.filter(person => person.allegiance == 'House Stark');


function displayNames(people) {
	return people.map(person => person.name)
		.join('<br/>');
}

document.querySelector('div').innerHTML = `${displayNames(houseStark)}`


/*
1. Why does the displayNames function have 'people.map'? Is it because 'filter' does not create 
a new array, and we wanted a new array so we filter 'people' and then map it?
*/
