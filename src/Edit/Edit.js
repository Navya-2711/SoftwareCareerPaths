import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditNotePage = ({ notes, updateNote }) => {
  const { id } = useParams();
  const [note, setNote] = useState(notes[id] || '');
  const navigate = useNavigate();

  useEffect(() => {
    setNote(notes[id] || '');  // Set the note content for editing
  }, [id, notes]);

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  const handleSaveChanges = () => {
    if (note.trim()) {
      updateNote(id, note);
      navigate('/history');
    } else {
      alert('Note cannot be empty!');
    }
  };

  return (
    <div className="edit-note-container">
      <h1>Edit Note</h1>
      <textarea
        value={note}
        onChange={handleNoteChange}
        placeholder="Edit your note here..."
        rows="10"
        cols="50"
      />
      <button onClick={handleSaveChanges}>Save Changes</button>
    </div>
  );
};

export default EditNotePage;
