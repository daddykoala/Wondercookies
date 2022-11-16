
import './App.css';
//COMPONENT//
import Header from './components/header/Header';
import Menu from './components/menu/menu';
import CookiesList from './components/cookiesList/cookiesList';
// import BACKGROUND from '../src/assets/background.jpg';

function App() {
  return (
    <div className="App">
      {/* <img alt='rayure' src={BACKGROUND}/> */}
      <Header/>
      <Menu/>
      <CookiesList/>

     
      
    </div>
  );
}

export default App;
