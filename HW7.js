const list = document.querySelector('#todo');
const input = document.querySelector('#new-item');
const addBtn = document.querySelector('#add-btn');
const deleteBtn = document.querySelector('#delete-btn')

addBtn.addEventListener('click', () => {
  // create li
  const li = document.createElement('li');

  // set text
  li.textContent = input.value;

  // append to ul
  list.appendChild(li);

  // clear input
  input.value = '';
});

deleteBtn.addEventListener('click', () => {
  // create li
  const li = document.createElement('li');

  // set text
  li.textContent = input.value;

  // delete
  list.lastElementChild.remove(li);  

});


/* -----------------------
   AUTOMATED TESTS
----------------------- */

function runTests() {
  console.log("Running tests...");

  // reset list
  list.innerHTML = '';

  // Test 1: clicking Add creates a new li
  input.value = "Milk";
  addBtn.click();
  console.assert(list.children.length === 1, "Test 1 Failed: item was not added");


  // Test 2: li text equals input value
  input.value = "Eggs";
  addBtn.click();
  const lastItem = list.lastElementChild;
  console.assert(lastItem.textContent === "Eggs", "Test 2 Failed: text not set correctly");


  // Test 3: input clears after adding
  input.value = "Bread";
  addBtn.click();
  console.assert(input.value === "", "Test 3 Failed: input was not cleared");
  
  // Test 4: Delete one item
  deleteBtn.click();
  console.assert(lastItem.textContent === "Eggs", "Test 4 failed: Third item wasn't removed")

  // Test 5 Delete another but check for length
  deleteBtn.click();
  console.assert(list.children.length === 1, "Test 1 Failed: item was not deleted");  

  // Test 6 Add then Delete, check new length
  input.value = "Custard";
  addBtn.click();
  input.value = "Lotus";
  addBtn.click();
  input.value = "Abalone";
  addBtn.click();
  console.assert(list.children.length === 4, "Test 6 pt1 Failed: items were not added");
  deleteBtn.click();
  console.assert(list.children.length === 3, "Test 6 pt2 Failed: item was not deleted");
  
  console.log("Tests finished.");
}

// run tests when page loads
window.addEventListener('load', runTests);
