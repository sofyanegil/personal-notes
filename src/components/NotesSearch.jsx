import React from 'react';
import '../styles/search.css';

export default function NotesSearch({ searchNotes }) {
  return (
    <div className="note-search">
      <input type="text" placeholder="Cari Catatan" onChange={searchNotes} />
    </div>
  );
}
