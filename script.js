document.addEventListener("DOMContentLoaded", () => {
  // Button to submit a new task:
  let addButton = document.querySelector("#add");
  // Input field for users to write new tasks:
  let addInput = document.querySelector("#item");

  //If the user clicks the submit button
  addButton.addEventListener("click", function () {
    // grab the value of the input tag
    let newItem = document.getElementById("item").value;
    // Runs the function if the user input field is not empty
    if (newItem) {
      // Adds a new item to the list if the submit button is clicked
      addItemTodo(newItem);
      // Resets the input field to an empty box after user presses submit
      document.getElementById("item").value = "";
    }
  });

  // If the user press enter
  addInput.addEventListener("keypress", function (event) {
    // For if the user presses enter on the keyboard
    if (13 === event.keyCode) {
      // Grab the value of the input tag
      let newItem = document.getElementById("item").value;
      // If the input tag is not empty then run our function to add an item
      if (newItem) {
        // Adds a new item to the list if Enter key is pressed
        addItemTodo(newItem);
        // Resets the input field to an empty box after user submits with Enter key
        document.getElementById("item").value = "";
      }
    }
  });

  function addItemTodo(text) {
    // Grabs the "ul" html element
    let list = document.getElementById("todo");
    // Creates an "li" html element
    let item = document.createElement("li");
    // Set the inside of the "li"  to the same as the parameter that we passed in the function, which is going to be the value set by the user in the input field
    item.innerText = text;

    //Creates a container for our buttons remove and complete
    let buttons = document.createElement("div");
    buttons.classList.add("buttons");

    // create the two buttons

    //Remove button
    let remove = document.createElement("button");
    remove.classList.add("remove");
    //Adds EventListener to the remove button
    remove.addEventListener("click", removeItem);

    //Complete button
    let complete = document.createElement("button");
    complete.classList.add("complete");
    //Adds EventListener to the complete button
    complete.addEventListener("click", completeItem);

    // Append the buttons to the div
    buttons.appendChild(remove);
    buttons.appendChild(complete);

    // Append the whole div to the li
    item.appendChild(buttons);

    // Prepend the `li` to the `ul`. Prepend makes the items go to the top of the list when submited and not on the bottom of the list
    list.insertBefore(item, list.childNodes[0]);
  }

  function completeItem() {
    // Grab the `li` by targeting the parent of the parent of the button (button -> div -> li)
    let item = this.parentNode.parentNode;
    // Grab the `ul` (li -> ul)
    let parent = item.parentNode;
    // Grab the parent id
    let id = parent.id;

    // Checks if the item should go in the completed or if it should be re-added to todo by using a ternary operator
    let target =
      id === "todo"
        ? document.getElementById("completed")
        : document.getElementById("todo");
    // Removes the item to its current `ul`
    parent.removeChild(item);
    // Adds the item to the new `ul`
    target.insertBefore(item, target.childNodes[0]);
  }

  function removeItem() {
    // Grabs the `li` by targeting the parent of the parent of the button (button -> div -> li)
    let item = this.parentNode.parentNode;
    // Grabs the `ul` (li -> ul)
    let parent = item.parentNode;
    // Removes `li` from `ul`
    parent.removeChild(item);
  }
});
