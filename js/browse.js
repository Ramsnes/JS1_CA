const mainContainer = document.querySelector(".jacket-block");
const jacketList = document.querySelector(".alljackets");

const baseUrl = "https://api.noroff.dev/api/v1";
const allEndpoints = "/rainy-days";
const specificEndpoint = "/rainy-days/<id>";

// Get detail om en
async function getDetails(id) {
  const response = await fetch(baseUrl + `/rainy-days/${id}`);
  const data = await response.json();
  console.log({ data });
  return data;
}

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
    // console.log hva et element inneholder. Ser for meg at den inneholder en id av noe slag som man kan hente informasjon om
    const myFunction = () => {
      window.location.href = `details/${element.id}`;
    };

    const lol = () => console.log("trykker på meg");

    // På li så må det legges på en id og en onClick. Så enten så kan man sette id på li til å være lik id på element
    // også må man lage en sånn document.getElementById("id på element").addEventListener("click", myFunction);
    // jeg er usikker på om man kan skrive <li onclick="myFunction()"> ? Det hadde vært det enkleste.
    jacketList.innerHTML += `
    <li id=${element.id} onclick="lol()">
          <div>
            <h2>${element.title}</h2>
            <img src="${element.image}" alt="#" />
            <p>${element.description}</p>
          </div>
        </li>`;

    document.title = "Jacket details"; // Endrer title på siden
    // const liElement = document.getElementById(element.id);

    // liElement.addEventListener("click", function () {
    //   window.location.href = `details/${element.id}`;
    // });
  });
}
renderHTML();

// const liElement = document.querySelector("li");

// liElement.addEventListener("click", function () {
//   window.location.href = `details/${element.id}`;
// });
