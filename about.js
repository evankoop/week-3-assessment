console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form Submitted Successfully!')
}

function giveCompliment(evt) {
	evt.preventDefault();

	alert('Great Job!')
}

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let compliment = document.querySelector('img')

compliment.addEventListener('mouseover', giveCompliment)