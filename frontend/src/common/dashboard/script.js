const myForm = document.getElementById("myForm");
const inpFile = document.getElementById("inpFile");
const cat_btn = document.getElementById('cat_btn');
const cat_result = document.getElementById('cat_result');
const dog_result = document.getElementById('dog_result');

myForm.addEventListener("submit", e => {
	e.preventDefault();
	dog_result.innerHTML = `<img src=${URL.createObjectURL(inpFile.files[0])} alt="raw_img" />`
	const endpont = 'http://127.0.0.1:8000/api/signal/test'
	const formData = new FormData();

	console.log(inpFile.files)

	formData.append("inpFile", inpFile.files[0]);

	fetch(endpont, {
		method: "post",
		body: formData
	}).catch(console.error);
})




cat_btn.addEventListener('click', getRandomCat);
// dog_btn.addEventListener('click', getRandomDog);

function getRandomCat() {	
    const imageUrl = `http://127.0.0.1:8000/api/signal/test`
	fetch(imageUrl)
		.then(res => res.blob())
		.then(imageBlob => {
			cat_result.innerHTML = `<img src=${URL.createObjectURL(imageBlob)} alt="predicted" />`
		});
	console.log(imageUrl)
}

var output = document.getElementById("demo");

var slider = document.getElementById("a").oninput = function(){
	var value = (this.value-this.min)/(this.max-this.min) *100

	document.getElementById("demo").innerHTML = this.value;
}

// function getRandomDog() {
// 	fetch('https://random.dog/woof.json')
// 		.then(res => res.json())
// 		.then(data => {
// 			if(data.url.includes('.mp4')) {
// 				getRandomDog();
// 			}
// 			else {
// 				dog_result.innerHTML = `<img src=${data.url} alt="dog" />`;
// 			}
// 		});
// }



