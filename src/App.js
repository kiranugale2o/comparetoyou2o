import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import { initializeApp } from 'firebase/app';
import Compare from './Compare';
const firebaseConfig = {
  apiKey: "AIzaSyBSOza1llrMEaEcNLeyUGHlUgIpeiEApi4",
  authDomain: "devtech-b5946.firebaseapp.com",
  databaseURL: "https://devtech-b5946-default-rtdb.firebaseio.com",
  projectId: "devtech-b5946",
  storageBucket: "devtech-b5946.appspot.com",
  messagingSenderId: "75622780740",
  appId: "1:75622780740:web:53fae44ee2563304b25111"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
function App() {
  return (
    <div className="App">
      
    <Navbar></Navbar>
    <br></br>
    <Compare></Compare>
    <div className='text-center  ' style={{color:"black",bottom:"0px",margin:"70px 0px"}}>Developed By- Hackjack Developers</div>
    </div>

  );
}

export default App;
