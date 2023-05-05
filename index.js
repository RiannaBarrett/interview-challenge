/*  Challenge 2: JavaScript DOM Manipulation (20 minutes)
    Task: Add interactivity to the webpage created in Challenge 1. Implement a search bar that filters the list of items based on the user's input.
    Requirements:
        TODO: Create a search bar using HTML and CSS. (will be in index.html and index.css, make sure to link files!)
        TODO: Use JavaScript to listen for the 'input' event on the search bar.
        TODO: Filter the list of items based on the user's input, hiding the items that don't match the search query.
        TODO: Display a message if no items match the search query. */



/* Challenge 3: Fetching and Rendering Data using JavaScript (25 minutes)
    Task: Modify the webpage from Challenge 1 & 2 to fetch data about your favorite books/movies from a provided API endpoint and render the list dynamically.
    Requirements:
        TODO: Use the Fetch API to retrieve data from https://alouderback.github.io/Data/db.json
        TODO: Process the received JSON data and create an HTML structure dynamically using JavaScript.
        TODO: Render the list of items on the page, replacing the static content from Challenge 1.
        TODO: Ensure that the search functionality from Challenge 2 still works with the dynamically generated content. */

        function search() {
            let input = document.getElementById("searchbar").value.toLowerCase();
            let items = document.querySelectorAll(".mylist li");
          
            items.forEach(function (item) {
              if (item.innerHTML.toLowerCase().indexOf(input) > -1) {
                item.style.display = "";
              } else {
                item.style.display = "none";
              }
            });
          }
          
          //fetch api to retrieve data
          fetch("https://alouderback.github.io/Data/db.json")
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
            function renderList(books, movies) {
              const booksList = document.querySelector("#books-list");
              const moviesList = document.querySelector("#movies-list");
            
              // Clear previous content
              booksList.innerHTML = "";
              moviesList.innerHTML = "";
            
              // Render books list
              books.forEach((book) => {
                const li = document.createElement("li");
                li.textContent = book.title;
                booksList.appendChild(li);
              });
            
              // Render movies list
              movies.forEach((movie) => {
                const li = document.createElement("li");
                li.textContent = movie.title;
                moviesList.appendChild(li);
              });
            }
            
            