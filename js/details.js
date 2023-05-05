const baseUrl = "https://api.noroff.dev/api/v1";

function getUrl() {
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
  const id = getUrl();

  const product = await fetchProduct(id);

  console.log(product);
}

renderHTML();
