
import './App.css';
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import Homepage from './Components/Homepage';
import {Route, Routes} from 'react-router-dom'
import Chatpage from './Components/Chatpage';
import NotesRedirect from './Components/Notes/NotesRedirect/NotesRedirect';
import { Login } from '@mui/icons-material';
import Signup from './Components/Authentication/Signup';
import LandingPage from './Components/LandingPage';
import LoginPage from './Components/Authentication/LoginPage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<LandingPage/>} exact />
        <Route path="/chats" element={<Chatpage/>} exact/>
        <Route path="/notes" element={<Homepage/>} exact/>
        <Route path="/mynotes" element={<NotesRedirect/>} exact/>
        <Route path="/login" element={<LoginPage/>} exact/>
        <Route path="/signup" element={<Signup/> }exact/>
      </Routes>
    </div>
  );
}

export default App;
