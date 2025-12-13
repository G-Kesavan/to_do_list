import Main from "./Components/Main/Main";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import AddItem from "./Components/AddItem/AddItem";
import "./App.css";
import { useState } from "react";
import SearchItem from "./Components/SearchItem/SearchItem";

const App = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      cheacked: false,
      text: "Add Your New List",
    },
  ]);

  const boxCheck = (id) => {
    const newItems = items.map((item) =>
      item.id === id
        ? {
            ...item,
            cheacked: !item.cheacked,
          }
        : item
    );
    setItems(newItems);
  };
  const addItem = (text) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const newItem = { id, text, cheacked: false };
    const newItems = [...items, newItem];
    setItems(newItems);
  };

  const deleteItem = (id) => {
    const newItems = items.filter((items) => items.id !== id);
    setItems(newItems);
  };

  const searchItem = (text) => {
    const searchText = text.toUpperCase();
    const item = document.querySelectorAll(".item");
    for (let index = 0; index < item.length; index++) {
      const itemText = item[index]
        .querySelector(".itemText")
        .textContent.toUpperCase();
      if (itemText.indexOf(searchText) > -1) {
        item[index].style.display = "flex";
      } else {
        item[index].style.display = "none";
      }
    }
  };
  return (
    <div className="app">
      <Header title="To Do List" />
      <AddItem addItem={addItem} />
      <SearchItem searchItem={searchItem} />
      <Main items={items} boxCheck={boxCheck} deleteItem={deleteItem} />
      <Footer length={items.length} />
    </div>
  );
};

export default App;
