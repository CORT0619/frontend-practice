// ms: number of milliseconds
const messageEl = document.querySelector('#message');

function delay(ms) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('Hi there!');
		}, ms);
	});
}

delay(2000)
	.then((msg) => {
		messageEl.innerHTML = msg;
	})
	.catch((err) => {
		console.error('an error occurred: ', err);
	});








// el: element node object
const redBox = document.querySelector('#box'); // grabbing the red box

// setting the position to absolute, getting the current position and adding 100px to the current position
function animateRight(el) {
	el.style.position = 'relative';
	const currentPos = el.getBoundingClientRect().left;
	el.style.left = currentPos + 100 + 'px';
}

// call the animate function with 250 ms intervals
const int = setInterval(() => {
	animateRight(redBox);
}, 250);

// end animation after 1 second
setTimeout(() => {
	clearInterval(int);
}, 1000);







// xs: array
const obj = {};
const arr = [
	'green',
	'purple',
	'blue',
	'pink',
	'blue',
	'red',
	'brown',
	'brown',
	'green',
	'red'
];
function removeDuplicates(xs) {
	for (let i = xs.length - 1; i >= 0; i--) {
		if (obj[xs[i]]) {
			xs.splice(i, 1);
			continue;
		}
		obj[xs[i]] = i;
	}
	return xs;
}

const returnedArr = removeDuplicates(arr);





// Bigger Coding Exercise
const image = document.querySelector('img');
const linkList = document.querySelector('.linkList');

async function retrieveImage() {
	const randoImage = await (
		await fetch(`https://dog.ceo/api/breeds/image/random`)
	).json();

	if (randoImage && randoImage.message) {
		image.src = randoImage.message;
	}
}

async function retrieveDogLinks() {
	const links = await (
		await fetch('https://dog.ceo/api/breeds/image/random/10')
	).json();

	if (links && links.message && links.message.length > 0) {
		links.message.forEach((elem) => {
			const link = elem;

			// get the breed name from the url
			let breed = elem.split('/')[4];

			// remove the dash from the breed name
			if (breed.indexOf('-') > -1) {
				breed = breed.replace('-', ' ');
			}
			// create a link for the image
			const randoLink = document.createElement('a');
			randoLink.href = link;
			randoLink.innerText = breed;

			// attach the image to the dom
			const listItem = document.createElement('li');
			listItem.appendChild(randoLink);
			linkList.appendChild(listItem);
		});
	}
}

retrieveImage();
retrieveDogLinks();
