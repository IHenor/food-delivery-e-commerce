import './App.css';
import Button from 'components/ui/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
      <Button className={"open"} name={"Open"}/>
      <Button className={"delete"} name={"Delete"}/>
      <Button className={"shop"} name={"Shop now"}/>
      <Button className={"pay"} name={"Pay now"}/>
      

      </header>
    </div>
  );
}

export default App;
