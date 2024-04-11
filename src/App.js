import './App.css';

import SignIn from './components/SignIn';
import Line from './components/Line.jsx';
import Sidebar from './components/Sidebar.jsx';

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase.js";

function App() {
  const [user] = useAuthState(auth);//true || false

  return (
    <>
      <Sidebar />
      {user ? <Line /> : <SignIn/>}
    </>
  );
}

export default App;
