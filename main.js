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

function showLoading() {
  loadingElement.classList.remove("hidden");
}

function hideLoading() {
  loadingElement.classList.add("hidden");
}

function showError(message) {
  errorElement.textContent = message;
  errorElement.classList.remove("hidden");
}

function hideError() {
  errorElement.classList.add("hidden");
}

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


function displayResults(items, totalItems) {

  if(items.length === 0) {
    resultsContainer.textContent = "No results found";
    return;
  }

  items.forEach((element) => {

    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = 
    `
      <p>${`userId: ${element.userId}`}</p>
      <p>${element.id}</p>
      <p>${element.title}</p>
      <p>${element.body}</p>
    `;
  
    resultsContainer.appendChild(card);
  });

  setupPagination(totalItems);
}

function setupPagination(totalItems) {
  
  paginationContainer.textContent = "";
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  for (let i = 1; i <= totalPages; i++) {

    const button = document.createElement("button");
    button.classList.add("button");
    button.textContent = i;

    if (i === current) {
      button.disabled = true;
    }

    button.addEventListener("click", () => {
      current = i;
      fetchData();
    });

    paginationContainer.appendChild(button);
  }
}

async function fetchDataWithFetch(searchTerm) {

  hideLoading()

  const url = `${API_URL}?_page=${current}&_limit=${itemsPerPage}&q=${searchTerm}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  const items = await response.json();
  const totalItems = Number(response.headers.get("X-Total-Count"));

  displayResults(items, totalItems);
}
                                                                                 
async function fetchDataWithAxios(searchTerm) {

  hideLoading()

  try {
    const response = await axios.get(`${API_URL}?_page=${current}&_limit=${itemsPerPage}&q=${searchTerm}`);
    const items = response.data;
    const totalItems = Number(response.headers["x-total-count"]);
    displayResults(items, totalItems);
  
  } catch (error) {

    if (error.response) {
      throw new Error(`HTTP error: ${error.response.status}`);
    } else {
      throw new Error(error.message);
    } 
  }
}