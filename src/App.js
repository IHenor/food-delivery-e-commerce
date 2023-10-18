import "./App.css";
import Button from "components/button/Button";
import FoodBlock from "components/food-block/FoodBlock";
import FoodItemBlock from "components/food-item-block/FoodItemBlock";
import InputName from "components/input-field/InputName";

function App() {
  const yell = () => {
    alert("maoa");
  };

  return (
    <div className="App">
      <header className="App-header">
        <FoodItemBlock />
      </header>
    </div>
  );
}

export default App;
