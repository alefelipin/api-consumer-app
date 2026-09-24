"use strict";

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

function cleanSelect() {
  apiSelector.value = "";
}

function cleanInput() {
  searchInput.value = "";
}

function displayResults(items, totalItems) {

  resultsContainer.textContent = "";

  if(items.length === 0) {
    resultsContainer.textContent = "No results found";
    return;
  }

  items.forEach((element) => {

    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = 
    `
      <p>User ID: ${element.userId}</p>
      <p>ID: ${element.id}</p>
      <h2>${element.title}</h2>
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