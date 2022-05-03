import logo from './logo.svg';
import './App.css';

function App() {

//   // 1. isArry Function
//   const fruits = ["Banana", "Orange", "Apple", "Mango"];
//   let result =  Array.isArray(fruits);
//   console.log(fruits);

//   // 2. concat Function
//   let text1 = "sea";
//   let text2 = "food";
//   let result1 = text1.concat(text2);
//   console.log(result1);

//   // 3. some Function
//   const ages = [3, 10, 18, 20];
//   function checkAdult(age) {
//     return age < 18;
//   }
//   console.log(ages);

//   // 4. tostring Function
//   let text = "Hello World!";
//   let result2 = text.toString(); 
//   console.log(result2);

//   // 5. shift Function
//   const cars = ["VOLVO","SHIFT","BMW","DUSTER"];
//   cars.shift();
//   console.log(cars);

//   // 6. Unshift Function
//   const vegetable = ["Cabbage", "Leek", "Potato", "Bell peper"];
//   vegetable.unshift("Tomato", "Corn");
//   console.log(vegetable);

//   // 7. find Function
//   const inventory = [
//     {name: 'apples', quantity: 2},
//     {name: 'cherries', quantity: 8},
//     {name: 'bananas', quantity: 0},
//     {name: 'cherries', quantity: 5},
//     {name: 'cherries', quantity: 15}
    
//   ];
  
//   const result3 = inventory.find( ({ name }) => name === 'apples' );
  
//   console.log(result3) 

//   // 8. splice Function
//   const bikes = ["Zeus", "Raven", "Pegasus", "Bumblebee", "Bucephalus"];
//   bikes.splice(2, 2);
//   console.log(bikes);

//   // 9. Push Function
//   function func() { 
//     let arr = ['GFG', 'gfg', 'g4g']; 
  
//     // Pushing the element into the array 
//     arr.push('Good'); 
//             console.log(arr);;
// } 
// func();  

const data = [
  {
    id: 101,
    name: 'Abacavir',
    quantity: 25,
    price: 150,
    expiry: 2022,
    status: true 
  },
  {
    id: 102,
    name: 'Eltrombopag',
    quantity: 90,
    price: 550,
    expiry: 2021,
    status: true 
  },
  {
    id: 103,
    name: 'Meloxicam',
    quantity: 85,
    price: 450,
    expiry: 2025,
    status: false 
  },
  {
    id: 104,
    name: 'Allopurinol',
    quantity: 50,
    price: 600,
    expiry: 2023,
    status: true 
  },
  {
    id: 105,
    name: 'Phenytoin',
    quantity: 63,
    price: 250,
    expiry: 2021,
    status: false 
  }
];
console.log(data.map((i) => {return i})); 
// data.map((d,i) => console.log(d.id,d.name));

// console.log(data.filter((f) => {return f.expiry >= 2022}));

let med = data.filter((f) => {return f.expiry >= 2022});
console.log(med);

let ans = med.reduce((acc, d, i) => acc + d.price, 0);
console.log(ans);

let ans1 = data.reduce((acc, d, i) => acc + d.price, 0);
console.log(ans1);
const emp =[
  {
    name: 'amit',
    age: 35,
    salary: 40000,
    bonus:1000,
    status: true
  },
  {
    name: 'ajay',
    age: 25,
    salary: 38000,
    bonus: 2000,
    status: false
  },
  {
    name: 'mayur',
    age: 23,
    salary: 50000,
    bonus: 500,
    status: true
  },
  {
    name: 'jay',
    age: 29,
    salary: 35000,
    bonus: 600,
    status: true
  },
  {
    name: 'raj',
    age: 33,
    salary: 22000,
    bonus: 2000,
    status: true
  }
];

console.log(emp.map((i) => {return i})); 
// emp.map((d,i) => console.log(d.id,d.name));

// console.log(emp.filter((f) => {return f.expiry >= 2022}));

let em = emp.filter((e) => {return e.status >= true});
console.log(em);

let emans = em.reduce((acc, emp, i) => acc + emp.bonus + emp.salary, 0);
console.log(emans);

let eman = emp.reduce((acc, emp, i) => acc + emp.bonus + emp.salary, 0);
console.log(eman);


 
  return (
    <>
    <h4>Medicine Data</h4>
    <table border = "1">
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Expiry</th>
        <th>Total-Price</th>
      </tr>
      <tbody>
        {
          data.map((data,index) => {
            return(
              <tr>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.quantity}</td>
                <td>{data.price}</td>
                <td>{data.expiry}</td>
                {index === 0 ? <td rowspan = {data.length = "5"} > {ans1} </td> : null}  
              </tr>
            )
          })
        }
      </tbody>
    </table>

    <br></br>
    <h4>Medicine Data-1</h4>
    <table border = "1">
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Expiry</th>
        <th>Total-Price</th>
      </tr>
      <tbody>
        {
          med.map((data,index) => {
            return(
              <tr>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.quantity}</td>
                <td>{data.price}</td>
                <td>{data.expiry}</td>
                {index === 0 ? <td rowspan = {data.length = "5"} > {ans} </td> : null}  
              </tr>
            )
          })
        }
      </tbody>
    </table>

        <br></br>
        <h4>Employee Data</h4>
    <table border = "1">
        <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Salary</th>
        <th>Bonus</th>
        <th>Total</th>
        </tr>
        <tbody>
          {
            emp.map((emp,index) => {
              return(
                <tr>
                  <td>{emp.name}</td>
                  <td>{emp.age}</td>
                  <td>{emp.salary}</td>
                  <td>{emp.bonus}</td>
                  {index === 0 ? <td rowspan = {data.length = "5"} > {eman} </td> : null} 
                </tr>
              )
            })
          }
        </tbody>
    </table>

    <br></br>
        <h4>Employee Data-1</h4>
    <table border = "1">
        <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Salary</th>
        <th>Bonus</th>
        <th>Total</th>
        </tr>
        <tbody>
          {
            em.map((emp,index) => {
              return(
                <tr>
                  <td>{emp.name}</td>
                  <td>{emp.age}</td>
                  <td>{emp.salary}</td>
                  <td>{emp.bonus}</td>
                  {index === 0 ? <td rowspan = {data.length = "5"} > {emans} </td> : null} 
                </tr>
              )
            })
          }
        </tbody>
    </table>
    </>
  );
}

export default App;
