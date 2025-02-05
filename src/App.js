import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login/Login';
import Navbar1 from './Navbar1/Navbar1';
import About from './About/About'
import Companies from './Companies/Companies';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import Tcs from './Tcs/Tcs';
import Accenture from './Accenture/Accenture';
import Logout from './Logout/Logout';
import Coding from './Coding/Coding'
import Ai from './Ai/Ai'
import AddNotePage from './Note/Note';
import HistoryPage from './History/History';
import EditNotePage from './Edit/Edit';
import Register1 from './Register1/Register1';
import Interview from './Interview/Interview';
import Mocktest from './Mocktest/Mocktest';
import Tcsverbal from './Tcsverbal/Tcsverbal';
import Tcsreasoning from './Tcsreasoning/Tcsreasoning';
import Wipro from './Wipro/Wipro';
import Acc from './Acc/Acc'
import Infosys from './Infosys/Infosys'
import Hcl from './Hcl/Hcl';
import Ibm from './Ibm/Ibm';
import Capgemini from './Capgemini/Capgemini';
import Synopsys from './Synopsys/Synopsys';
import Techmahindra from './Techmahindra/Techmahindra';


const App = () => {
  const [notes, setNotes] = useState([]);

  // Save a new note
  const saveNote = (note) => {
    setNotes([note, ...notes]);  // Add the new note at the beginning of the list
  };

  // Delete a note
  const deleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);  // Remove the note by index
    setNotes(updatedNotes);
  };

  // Update an existing note
  const updateNote = (index, updatedNote) => {
    const updatedNotes = [...notes];
    updatedNotes[index] = updatedNote;  // Update the note in the state
    setNotes(updatedNotes);
  };
  return (

    <>

      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Companies" element={<Companies />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Tcs" element={<Tcs/>}/>
          <Route path="/Acc" element={<Acc/>}/>
          
          <Route path="/Login" element={<Logout/>}/>
          <Route path="/Coding" element={<Coding/>}/>
          <Route path="/Interview" element={<Interview/>}/>
          <Route path="/Mocktest" element={<Mocktest/>}/>
          <Route path="/Tcsverbal" element={<Tcsverbal/>}/>
          <Route path="/Tcsreasoning" element={<Tcsreasoning/>}/>
          <Route path="/Wipro" element={<Wipro/>}/>
          <Route path="/Infosys" element={<Infosys/>}/>
          <Route path="/Hcl" element={<Hcl/>}/>
          <Route path="/Ibm" element={<Ibm/>}/>
          <Route path="/Capgemini" element={<Capgemini/>}/>
          <Route path="/Synopsys" element={<Synopsys/>}/>
          <Route path="/Techmahindra" element={<Techmahindra/>}/>


          <Route path="/https://www.google.com/search" element={<Ai/>}/>

          <Route path="/note" element={<AddNotePage saveNote={saveNote} />} />
          <Route
            path="/history"
            element={<HistoryPage notes={notes} deleteNote={deleteNote} editNote={saveNote} />}
          />
          <Route
            path="/edit/:id"
            element={<EditNotePage notes={notes} updateNote={updateNote} />}
          />
       
        </Routes>
      </Router>
    </>

  );
}

export default App;
