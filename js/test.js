// We follow a URL structure of https://api.noroff.dev/api/<version>/<endpoint>.

// The API base URL for v1 is https://api.noroff.dev/api/v1.

// Each endpoint should be prefixed with this base URL. For example, the full path for getting all jokes using v1 is https://api.noroff.dev/api/v1/jokes.

const mainContainer = document.querySelector("#main-container");
const listContainer = document.querySelector("#list-container");
// console.log({ mainContainer });
const baseUrl = "https://api.noroff.dev/api/v1";
const allEndpoint = "/rainy-days";
const specificEndpoint = "/rainy-days/<id>"; // splitting the url for future useage

async function fetchData() {
  // needs to be async since we can't wait for result before code moves on
  const response = await fetch(baseUrl + allEndpoint);
  const data = await response.json();
  console.log({ data }); // shows element ID's of API
  return data;
}

fetchData();

// we now need to await the fetchData() function and render the HTML
async function renderHTML() {
  const productList = await fetchData();
  console.log(productList); // logs the fetched data
  listContainer.innerHTML = ``; // clears the HTML before adding
  //
  // create .forEach to produce dynamic innerHTML as a function
  productList.forEach(function (element, index) {
    //search the API document for what the element names are to put in to the dynamic innerHTML underneath

    listContainer.innerHTML += `
    <li>
          <div>
            <h2>${element.title}</h2>
            <p>${element.description}</p>
            <img src="${element.image}" alt="#" />
          </div>
        </li>`;
    // console.log(element, index);
    // shows the elements and index of the data in the API
  });
}

renderHTML();
