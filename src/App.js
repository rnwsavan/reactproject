import logo from './logo.svg';
import './App.css';

function App() {

  // 1. isArry Function
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  let result =  Array.isArray(fruits);
  console.log(fruits);

  // 2. concat Function
  let text1 = "sea";
  let text2 = "food";
  let result1 = text1.concat(text2);
  console.log(result1);

  // 3. some Function
  const ages = [3, 10, 18, 20];
  function checkAdult(age) {
    return age < 18;
  }
  console.log(ages);

  // 4. tostring Function
  let text = "Hello World!";
  let result2 = text.toString(); 
  console.log(result2);

  // 5. shift Function
  const cars = ["VOLVO","SHIFT","BMW","DUSTER"];
  cars.shift();
  console.log(cars);

  // 6. Unshift Function
  const vegetable = ["Cabbage", "Leek", "Potato", "Bell peper"];
  vegetable.unshift("Tomato", "Corn");
  console.log(vegetable);

  // 7. find Function
  const inventory = [
    {name: 'apples', quantity: 2},
    {name: 'cherries', quantity: 8},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5},
    {name: 'cherries', quantity: 15}
    
  ];
  
  const result3 = inventory.find( ({ name }) => name === 'apples' );
  
  console.log(result3) 

  // 8. splice Function
  const bikes = ["Zeus", "Raven", "Pegasus", "Bumblebee", "Bucephalus"];
  bikes.splice(2, 2);
  console.log(bikes);

  // 9. Push Function
  function func() { 
    let arr = ['GFG', 'gfg', 'g4g']; 
  
    // Pushing the element into the array 
    arr.push('Good'); 
            console.log(arr);;
} 
func();  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
