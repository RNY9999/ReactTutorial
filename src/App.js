import './App.css';
import SignIn from './components/SignIn';
import Line from './components/Line.jsx';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase.js";

function App() {
  const [user] = useAuthState(auth);//true || false

  return (
    <div className="App">
      {user ? <Line /> : <SignIn/>}
    </div>
  );
}

export default App;
