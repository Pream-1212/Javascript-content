const data = [
  { name: "Alice", age: 25, city: "Kampala" },
  { name: "Bob", age: 30, city: "Entebbe" },
  { name: "Carol", age: 22, city: "Jinja" },
  { name: "David", age: 28, city: "Mbarara" },
  { name: "Eve", age: 35, city: "Gulu" },
  { name: "Frank", age: 29, city: "Mbale" },
  { name: "Grace", age: 24, city: "Fort Portal" },
  { name: "Henry", age: 40, city: "Soroti" },
]; //this is an array of obects.Each object has a name, age, and city.

let currentPage = 1; //which page you're on(starts at 1)
const rowsPerPage = 3; //how many rows to show per page(3 in this case)

function renderTable(page, filteredData = data) {
  const tbody = document.querySelector("#myTable tbody"); //tbody is the part of your table where rows go.
  tbody.innerHTML = ""; //clears the old rows.

  let start = (page - 1) * rowsPerPage;
  let end = start + rowsPerPage; //caculate w/c rows to show for the given page.
  let paginatedData = filteredData.slice(start, end); //takes just that portion of the data.(for example,page 2,it takes rows4-6)

  paginatedData.forEach((row) => {
    let tr = `<tr>
      <td>${row.name}</td>
      <td>${row.age}</td>
      <td>${row.city}</td>
    </tr>`;
    tbody.innerHTML += tr;
  });

  renderPagination(filteredData);
}

function renderPagination(filteredData) {
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";

  let pageCount = Math.ceil(filteredData.length / rowsPerPage); //pagecount=total no of pages (round up with.ceil)
  for (let i = 1; i <= pageCount; i++) {
    let btn = document.createElement("button"); //mkes a btn for each page no.
    btn.innerText = i;
    btn.onclick = function () {
      currentPage = i;
      renderTable(currentPage, filteredData);
    };
    pagination.appendChild(btn);
  }
}

// Search feature
document.getElementById("searchInput").addEventListener("input", function () {
  //finds the element with the id(search input)your search box.
  let searchTerm = this.value.toLowerCase(); //is what's currently typed in the search box.
  let filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm) ||
      item.city.toLowerCase().includes(searchTerm) ||
      item.age.toString().includes(searchTerm)
  );
  currentPage = 1;
  renderTable(currentPage, filteredData); //the search results.calls your table-drawing function.
});

renderTable(currentPage); // calls the function for the first time so the table appears when the pages loads.

// Pagination controls
