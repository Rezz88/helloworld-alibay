const peopleArray = [
    { id: 123, name: "dave", age: 23 },
    { id: 456, name: "chris", age: 23 },
    { id: 789, name: "bob", age: 23 },
    { id: 101, name: "tom", age: 23 },
    { id: 102, name: "tim", age: 23 }
  ]

let idToSelect = 789
let selectedPerson

for (let person of peopleArray) {
  if (person.id === idToSelect) {
    selectedPerson = person;
    break;
  }
}
console.log(selectedPerson)

johnRemoved = peopleArray.filter(function(el) {
    return el.name !== "bob";
});

peopleArray.remove(function(el) { return el.name === "bob"; });

//peopleArray = JSON.stringify(johnRemoved, null, ' ');

console.log('jsonned: ',peopleArray)
