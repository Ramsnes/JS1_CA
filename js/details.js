const baseUrl = "https://api.noroff.dev/api/v1";

function getProductId() {
  // given this url: localhost:3000/details.html?id=MY_ID

  // Get the search params from the URL
  const searchParams = new URLSearchParams(window.location.search);

  // Get the value of the "id" parameter
  const id = searchParams.get("id");

  return id;
}

async function fetchProduct(id) {
  // needs to be async since we can't wait for result before code moves on
  const response = await fetch(baseUrl + `/rainy-days/${id}`);
  const data = await response.json();

  return data;
}

async function renderHTML() {
  const id = getProductId();

  // try catch starts here
  const product = await fetchProduct(id);
  const whatever = document.getElementById("mainJacketWrapper");
  whatever.removeAttribute("class");
  const loading = document.getElementById("loading");
  loading.remove();

  const description = document.getElementById("description");
  description.innerHTML = product.description;
  const image = document.getElementById("jacketImg");
  image.src = product.image;
  const jacketPrice = document.getElementById("jacketPrice");
  jacketPrice.innerHTML = product.price;

  console.log(product);

  // catch here I think
}

renderHTML();
