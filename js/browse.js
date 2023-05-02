const mainContainer = document.querySelector(".jacket-block");
const jacketList = document.querySelector(".alljackets");

const baseUrl = "https://api.noroff.dev/api/v1";
const allEndpoints = "/rainy-days";
const specificEndpoint = "/rainy-days/<id>";

async function fetchData() {
  const response = await fetch(baseUrl + allEndpoints);
  const data = await response.json();
  console.log({ data });
  return data;
}

fetchData();

async function renderHTML() {
  const productlist = await fetchData();
  console.log(productlist);
  jacketList.innerHTML = ``;
  //
  productlist.forEach(function (element) {
    jacketList.innerHTML += `
    <li>
          <div>
            <h2>${element.title}</h2>
            <img src="${element.image}" alt="#" />
            <p>${element.description}</p>
          </div>
        </li>`;
  });
}
renderHTML();
