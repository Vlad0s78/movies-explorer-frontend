const BASE_URL = "https://api.nomoreparties.co/beatfilm-movies";

function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`ОшибОЧКА: ${res.status}`);
}

export function getAllMovies() {
  return fetch(BASE_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => checkResponse(res));
}
