import './App.css';
import image from './shopping.jpg';
import imageTwo from './man.jpg';
import { GroceryList } from './GroceryList';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <img src={image} width='200px' alt='shopping'/>
      </div>
        
      <div className='container'>
        <h1>Grocery List</h1>
      </div>

        <GroceryList/>
        <div className='container'>
          <img src={imageTwo} width='200px' alt='shoppingMan'/>
        </div>
        
    </div>
  );
}

export default App;
