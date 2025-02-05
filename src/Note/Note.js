import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar1 from '../Navbar1/Navbar1';

const AddNotePage = ({ saveNote }) => {
  const [note, setNote] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  const handleSaveNote = () => {
    if (note.trim()) {
      saveNote(note); // Save the note to the state
      setNote('');
      setError('');
      navigate('/history');  // Navigate to history page after saving
    } else {
      setError('Note cannot be empty!');
    }
  };

  return (
    <>
    <Navbar1/>
   
    
    <div className="add-note-container">
      <h1>Add a Note</h1>
      <textarea
        value={note}
        onChange={handleNoteChange}
        placeholder="Enter your note here..."
        rows="10"
        cols="50"
      />
      {error && <p className="error">{error}</p>}
      <div className="buttons">
        <button onClick={handleSaveNote}>Save Note</button>
        <button onClick={() => navigate('/history')}>History</button>
      </div>
    </div>
    </>
    
  );
};

export default AddNotePage;
