// Activity 4: Module Pattern
// • Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.

function createLists(item) {
  let lists = [];
  function addItem(item) {
    lists.push(item);
    return lists;
  }
  function removeItem(item) {
    lists = lists.filter((element) => element !== item);
    return lists;
  }
  function listAllItems() {
    return lists.map((item) => console.log(item));
  }

  return { addItem, removeItem, listAllItems };
}

shoppingList = createLists();
console.log(shoppingList.addItem("apple"));
console.log(shoppingList.addItem("banana"));
console.log(shoppingList.addItem("milk"));
console.log(shoppingList.removeItem("milk"));
shoppingList.listAllItems();
