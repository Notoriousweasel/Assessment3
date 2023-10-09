console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form Submit');
}

let mouseOverEvent = () => alert("I see you can't resist trying to poke the mighty Trump Duck! You are wise to see what would happen!");  //I'm not very creative, for that I apologize

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);


let img = document.querySelector("img").addEventListener('mouseover', mouseOverEvent);