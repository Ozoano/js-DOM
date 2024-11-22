// delete item
var list = document.querySelector("#book-list ul");

list.addEventListener("click", (e) => {
  if (e.target.className === "delete") {
    const li = e.target.parentNode;
    list.removeChild(li);
  }
});

// add item via form

const addForm = document.forms["add-book"];

addForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // get input value from the form field
  const value = addForm.querySelector("input[type='text']").value;

  // create doc element
  const li = document.createElement("li");
  const bookName = document.createElement("span");
  const deleteBtn = document.createElement("span");

  bookName.textContent = value;
  deleteBtn.textContent = "delete";

  // add classes
  bookName.classList.add("name");
  deleteBtn.classList.add("delete");

  // append span to li
  li.appendChild(bookName);
  li.appendChild(deleteBtn);

  // append li to ul
  list.appendChild(li);
});

// hide books
const hideBox = document.querySelector("#hide");

hideBox.addEventListener("change", (e) => {
  if (hideBox.checked) {
    // hide the ul books
    list.style.display = "none";
  } else {
    list.style.display = "initial";
  }
});

// search (filter) books
const searchBar = document.forms["search-books"].querySelector("input");

searchBar.addEventListener("keyup", (e) => {
  // targets the input feild and turn the value to lower case
  const term = e.target.value.toLowerCase();

  // gets all li tags in the unordered list
  const books = list.getElementsByTagName("li");

  // circle thru the li tags and perform some kinda evaluation
  // to figure out if the search TERMS is contained in each of the books name

  // convert the li tag to array to be able to loop thru it
  Array.from(books).forEach((book) => {
    // get the title of each book --> by getting the first child of the li
    const title = book.firstElementChild.textContent;
    if (title.toLowerCase().indexOf(term) !== -1) {
      book.style.display = "block";
    } else {
      book.style.display = "none";
    }
  });
});

// tabbed-content

const tabs = document.querySelector(".tabs");
const panels = document.querySelectorAll(".panel");

tabs.addEventListener("click", (e) => {
  // check if we clicked on li tag
  if (e.target.tagName == "LI") {
    const targetPanel = document.querySelector(e.target.dataset.target);

    // loop thru the panels
    panels.forEach((panel) => {
      if (panel === targetPanel) {
        panel.classList.add("active");
      } else {
        panel.classList.remove("active");
      }
    });
  }
});
