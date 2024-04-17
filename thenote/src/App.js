import './App.css';
import SignUpComponent from './components/SignUpComponent.tsx'
import {SignInComponent} from './components/SignInComponent.tsx'
import {currentUser, addNote, getNotes} from './firebase/firebaseActions.js'
//This will initialize the entire authentication service for our app
//Reference to the authentication service.


function App() {
  currentUser().then(user => {
    if(user){
      console.log(user)
      //addNote('testing', 'test'); // confirmed working
      getNotes()
    }else{
      console.log("No user")
    }
  })

  return (
    <>
    <SignInComponent/>
    <br/>
    <SignUpComponent/>
    </>
  );
}

export default App;
