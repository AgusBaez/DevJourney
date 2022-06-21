const list = ["Hello", "GoodBye"];
let popUp = prompt("Enter a Command").toLowerCase();
while (popUp !== "quit") {
  if (popUp === "new") {
    let newTodo = prompt("Enter new Task To-Do List");
    list.push(newTodo);
    console.log(`${newTodo} add to list ${list}`);
  } else if (popUp === "list") {
    console.log("================");
    for (let listador of list) {
      console.log(listador);
    }
    console.log("================");
  } else if (popUp === "delete") {
    const focus = parseInt(prompt("Enter the Number of index task to Delet"));
    console.log(list);
    const deleted = list.splice(focus, 1);
    console.log(`You deleted this ${deleted[0]}`);
  }
  popUp = prompt("Enter a Command - onLoop").toLowerCase();
}
console.log("GoodBye");
