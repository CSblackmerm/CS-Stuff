# one function gets name and a location, For asserts I mainly went off the example. So it checks the title and makes sure it includes the ul html (Happy). Second it checks for the length of the list and makes sure it's 3 (Happy). Third it turns the list into a string and makes sure the program didn't change the list (Non-mutation). Finally It renders a list in which the title changes to empty and and the catagories doesn't have anything and returns matching info (Edge).


# second function gets name, whether or not "I" find you valid, and a number. So it checks the title and makes sure that's working (Happy). Second, it should stringify the item in the one postion of the list and returns the correct info (Non-mutation). Finally it checks the length of the list and makes sure it's 2 (Happy).

# Ai stuff: 
## Input: “Draft renderList(data) that returns an HTML string. Do not mutate input. Add three console.assert lines. Explain how each assert proves correctness.”
```javascript
function renderList(data) { 
  // Read only from input; do not mutate
  const items = data.map(item => `<li>${item}</li>`).join("");
  return `<ul>${items}</ul>`;
}

/* ===== Assertions ===== */

// 1. Correct HTML structure
console.assert(
  renderList(["a", "b", "c"]) === "<ul><li>a</li><li>b</li><li>c</li></ul>",
  "Should render list items inside a <ul>"
);

// 2. Handles empty arrays correctly
console.assert(
  renderList([]) === "<ul></ul>",
  "Empty array should produce an empty <ul>"
);

// 3. Input is not mutated
const original = ["x", "y"];
const before = JSON.stringify(original);
renderList(original);
console.assert(
  JSON.stringify(original) === before,
  "Function must not mutate the input array"
);

// 4. Edge case: single element array
console.assert(
  renderList(["only"]) === "<ul><li>only</li></ul>",
  "Single item should still render correctly inside <ul>"
);
```
