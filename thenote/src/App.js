import logo from './logo.svg';
import './App.css';
import SignUpComponent from './components/SignUpComponent.tsx'
import { initializeApp } from 'firebase/app'

//This will initialize the entire authentication service for our app
//Reference to the authentication service.


function App() {
  return (
    <>
    <SignUpComponent/>
    </>
  );
}

export default App;
