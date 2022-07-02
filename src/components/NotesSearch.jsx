import React from 'react';

export default function NotesSearch({ searchNotes }) {
  return (
    <div className="note-search">
      <input type="text" placeholder="Cari Catatan" onChange={searchNotes} />
    </div>
  );
}
