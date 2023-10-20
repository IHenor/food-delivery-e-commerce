import "./App.css";
import Button from "components/button/Button";
import FoodBlock from "components/food-block/FoodBlock";
import FoodItemBlock from "components/food-item-block/FoodItemBlock";
import FoodType from "components/food-type/FoodType";
import InputName from "components/input-field/InputName";
import Order from "components/order/Order";
import OrderItem from "components/order/OrderItem";

function App() {
  const yell = () => {
    alert("maoa");
  };

  return (
    <div className="App">
      <header className="App-header">
        <OrderItem />
      </header>
    </div>
  );
}

export default App;
