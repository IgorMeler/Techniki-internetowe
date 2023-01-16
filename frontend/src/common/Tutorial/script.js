const cat_btn = document.getElementById("cat_btn");
const dog_btn = document.getElementById("dog_btn");
const cat_result = document.getElementById("cat_result");
const dog_result = document.getElementById("dog_result");

cat_btn.addEventListener("click", getRandomCat);
dog_btn.addEventListener("click", getRandomDog);

var output = document.getElementById("demo");

function getRandomCat() {
  // const a = (document.getElementById('a').value == "" ? 0 : document.getElementById('a').value)
  const a = 20;
  const b =
    document.getElementById("b").value == ""
      ? 0
      : document.getElementById("b").value;
  const c =
    document.getElementById("c").value == ""
      ? 0
      : document.getElementById("c").value;
  const d =
    document.getElementById("d").value == ""
      ? 0
      : document.getElementById("d").value;
  const f =
    document.getElementById("f").value == ""
      ? 0
      : document.getElementById("f").value;
  // const h = (document.getElementById('h').value == "" ? 0 : document.getElementById('h').value)

  const imageUrl = `http://127.0.0.1:8000/api/signal/one?a=${a}&b=${b}&c=${c}&d=${d}&f=${f}`;
  fetch(imageUrl)
    .then((res) => res.blob())
    .then((imageBlob) => {
      cat_result.innerHTML = `<img src=${URL.createObjectURL(
        imageBlob
      )} alt="cat" />`;
    });
  console.log(imageUrl);
}


var slider = (document.getElementById("a").oninput = function () {
  var value = ((this.value - this.min) / (this.max - this.min)) * 100;

  document.getElementById("demo").innerHTML = this.value;
});
