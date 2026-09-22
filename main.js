"use strict";

const API_URL = "https://jsonplaceholder.typicode.com/posts";
let current = 1;
const itemsPerPage = 10;

const getHTML = id => document.getElementById(id);
const apiSelector = getHTML("apiSelector");
const searchInput = getHTML("searchInput");
const fetchButton = getHTML("fetchButton");
const loadingElement = getHTML("loadingElement");
const errorElement = getHTML("errorElement");
const resultsContainer = getHTML("resultsContainer");
const paginationContainer = getHTML("paginationContainer");

fetchButton.addEventListener("click", fetchData);

// Funció per mostrar l'indicador de càrrega
function showLoading() {
  loadingElement.classList.remove("hidden");
}

// Funció per amagar l'indicador de càrrega
function hideLoading() {
  loadingElement.classList.add("hidden");
}

// Funció per mostrar missatges d'error
function showError(message) {
  errorElement.textContent = message;
  errorElement.classList.remove("hidden");
}

// Funció per amagar missatges d'error
function hideError() {
    errorElement.classList.add("hidden");
}


// Funció principal per obtenir dades (a implementar)
async function fetchData() {

  const searchTerm = searchInput.value.trim();
  const useAxios = apiSelector.value === "axios";
  
  showLoading();
  hideError();
  resultsContainer.innerHTML = "";
  paginationContainer.innerHTML = "";
  try {
    if (useAxios) {
      await fetchDataWithAxios(searchTerm);
    } else {
      await fetchDataWithFetch(searchTerm);
    }
  } catch (error) {
    showError(error.message);
  } finally {
    hideLoading();
  }
}



// Funció per a la visualització dels resultats i la paginació (a implementar)
function displayResults(items, totalItems) {
    // ... (Implementa la lògica per mostrar cada "ítem" com una targeta i per cridar setupPagination)
}



function setupPagination(totalItems) {
    // ... (Implementa la lògica per crear els botons de paginació)
}



// Funció per obtenir dades amb Fetch
async function fetchDataWithFetch(searchTerm) {
    // ... (Implementa la petició amb Fetch API)

  const url = `${API_URL}?_page=${current}&_limit${itemsPerPage}&q=${searchTerm}`;

  const response = await fetch(url);

  if (!response.ok) {

    throw new Error(`HTTP error: ${response.status}`);

  }

  const items = await response.json();

  const totalItems = Number(response.headers.get("X-Total-Count"));



}



// Funció per obtenir dades amb Axios                                                                                   
async function fetchDataWithAxios(searchTerm) {
    // ... (Implementa la petició amb Axios)

}