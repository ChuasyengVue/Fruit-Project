const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
const keyType = document.querySelector('#fruit');
// An array that has variety of fruits
const allFruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];


// A function where it takes a user input in the search bar
function search(inputVal) {
	// filter over the array iterating a new array,
	const results = allFruit.filter(fruit => fruit.toLowerCase()
	.includes(inputVal.toLowerCase())
	
	);
	console.log(`This is an ${results}`);
	// returns the filter methods that matches the user criteria.
	return results;
	
}



function searchHandler(e) {
	// stores user input into a variable
	const inputVal =e.target.value;
	// returns the allFruit array to match the user input
	const results = search(inputVal);
	
	showSuggestions(results,inputVal);
}

function showSuggestions(results, inputVal) {
	// setting the UL Li to be an empty string
	suggestions.innerHTML = '';
	// loop to iterate each item in the fruit array
	results.forEach(result => {
		// create a new LI
		const listItem = document.createElement('li');
		// sets text content of the list to the current suggestion
		listItem.textContent = result;
		// a click event on the listItem and pass the event to useSuggestion
		listItem.addEventListener('click',(e) => useSuggestion(e));
		// add list item to the suggestion list
		suggestions.appendChild(listItem);
	});
	// display or hide suggestion ("block" or "none")
	suggestions.style.display = results.length > 0 ? 'block' : 'none';
}



function useSuggestion(e) {
	// sets value of input to the textContent based on click
	input.value = e.target.textContent;
	// ensures the suggestion list to be empty string after a selection
	suggestions.innerHTML = '';
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
keyType.addEventListener('keyup',search);


