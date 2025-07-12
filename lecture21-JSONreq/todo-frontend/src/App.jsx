import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useState , useEffect} from "react";
import {addItemToServer,deleteItemFromServer,getItemsFromServer,markItemCompletedOnServer,} from "./services/itemsService";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    getItemsFromServer().then((initialItems) => {
      // Add completed property if it doesn't exist
      const itemsWithCompletedStatus = initialItems.map((item) => ({
        ...item,
        completed: item.completed || false,
      }));
      setTodoItems(itemsWithCompletedStatus);
    });
  }, []);

  const handleNewItem = async (itemName, itemDueDate) => {
    console.log(`New Item Added: ${itemName} Date:${itemDueDate}`);
    const item = await addItemToServer(itemName, itemDueDate);
    // Add completed property
    const newItem = { ...item, completed: false };
    const newTodoItems = [...todoItems, newItem];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = async (id) => {
    const deletedId = await deleteItemFromServer(id);
    const newTodoItems = todoItems.filter((item) => item.id !== deletedId);
    setTodoItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems
        todoItems={todoItems}
        onDeleteClick={handleDeleteItem}
      ></TodoItems>
    </center>
  );
}

export default App;
