import logo from './logo.svg';
import './App.css';
import Country from './containers/Class/Country';
import City from './containers/Class/City';
import Country_Fac from './containers/Class/Function/Country_Fac';
import City_Fac from './containers/Class/Function/City_Fac';
import Rnw_Branch_Fun from './containers/Class/Function/Rnw_Branch_Fun';
import Time_CL from './containers/Class/Time_CL';
import TimeFun from './containers/Class/Function/TimeFun';
import { useEffect, useState } from 'react';
import Loading from './component/Load/Loading';
import Du_Home from './containers/Home/Du_Home';
import Counter from './containers/Class/Function/Counter';



const HomeWithLoading = Loading(Du_Home)

function App() {

    const [loading, setLoading]=useState(false);
    const [data, setData]=useState([]);

    let dumiData=[
      {id:241, name:"Jeck", age:24},
      {id:432, name:"Tom", age:27},
      {id:345, name:"Mayank", age:30}
    ]

    useEffect(
      ()=>{
        setLoading(true);
        setTimeout(()=>{setLoading(false); setData(dumiData)},3000);
      },
    [])
    // console.log(loading,data);

  return (
    <>
    {/* <HomeWithLoading
      TryLoading={loading}
      DimData={data}
    /> */}
    <Counter/>
    </>
  );
  
}



export default App;
