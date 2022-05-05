import logo from './logo.svg';
import './App.css';
import Country from './containers/Class/Country';
import City from './containers/Class/City';
import Country_Fac from './containers/Class/Function/Country_Fac';
import City_Fac from './containers/Class/Function/City_Fac';

function App() {

  return (
    <>
    <Country/>
    <City/>
    <Country_Fac/>
    <City_Fac/>
    </>
  );
}

export default App;
