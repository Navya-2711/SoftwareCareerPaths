import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar1 from '../Navbar1/Navbar1';

const HistoryPage = ({ notes, deleteNote, editNote }) => {
  const navigate = useNavigate();

  const handleEdit = (index) => {
    navigate(`/edit/${index}`);  // Navigate to edit page
  };

  return (
    <>
    <Navbar1/>
    <div className="history-container">
      <h1>Notes History</h1>
      <div className="notes-grid">
        {notes.length === 0 ? (
          <p>No notes available</p>
        ) : (
          notes.map((note, index) => (
            <div className="note-card" key={index}>
              <pre>{note}</pre>
              <div className="actions">
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => deleteNote(index)}>Delete</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
    </>
  );
};

export default HistoryPage;
