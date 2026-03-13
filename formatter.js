const data = { title: "What", catagories: [{ name: "yellow", location: "tree" }, 
    { name: "red", location: "water" }, { name: "green", location: "house" }] };
const out = renderList(data);

console.assert(out.startsWith("<h1>What</h1><ul>"), "includes title + UL");
console.assert((out.match(/<li>/g) || []).length === 3, "renders three <li> items");
console.assert(JSON.stringify(data) === '{ name: "yellow", location: "tree" }, { name: "red", location: "water" }, { name: "green", location: "house" }]}', "does not mutate input");

console.assert(renderList({ title: "Empty", catagories: [] }) === "<h2>Empty</h2><ul></ul>", "empty list renders an empty UL");

const umm = {title: "people", valid: [{name: "Asher", valid: "yes", number: 1}, 
    {name: "Luke", valid: "No", number: 2}]};
const prints = renderList(umm); 


console.assert(prints.startsWith("<h1>people</h1><ul>"), "includes title + UL");
console.assert(prints[1].stringify === '{name: "Luke", valid: "No", number: 2}', "the second position has correct info");
console.assert((prints.match(/<li>/g) || []).length === 2, "renders two <li> items");
