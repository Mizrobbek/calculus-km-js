let $elform = document.querySelector(".form");
let $elCard = document.querySelector(".card");

let $elLevel = document.querySelector(".info_input");

$elform.addEventListener("submit", function (evt) {
  evt.preventDefault();

  let level = $elLevel.value.trim();

  let walkScore = 3.6;
  let bikeScore = 20.1;
  let carScore = 70;
  let planeScore = 800;

  let walk = Math.round($elLevel.value / walkScore);
  let bike = Math.round($elLevel.value / bikeScore);
  let car = Math.round($elLevel.value / carScore);
  let plane = Math.round($elLevel.value / planeScore);

  $elCard.innerHTML += `
    <li class="card_item">
          <img class="card_img" src="./IMG/person.png" alt="Person img" />
          <p class="card_title">Piyoda</p>
          <p class="card_text">${walk} soat</p>
        </li>

        <li class="card_item">
          <img class="card_img bike" src="./IMG/bike.png" alt="Bike img" />
          <p class="card_title">Velosiped</p>
          <p class="card_text">${bike} soat</p>
        </li>

        <li class="card_item">
          <img class="card_img car" src="./IMG/car.png" alt="Car img" />
          <p class="card_title">Mashinada</p>
          <p class="card_text">${car} soat</p>
        </li>

        <li class="card_item">
          <img class="card_img car" src="./IMG/plane.png" alt="Plane img" />
          <p class="card_title">Samalyotda</p>
          <p class="card_text">${plane} soat</p>
        </li>
    `;

  $elLevel.value = null;
});
