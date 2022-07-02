import React from 'react';
import NotesItem from './NotesItem';
import '../styles/noteslist.css';

export default function NotesList({
  title, notes, onDelete, onArchive,
}) {
  return (
    <div className="notes-list card">
      <h2>{title}</h2>
      <div className="notes-list__container">{notes.length === 0 ? <p className="no-notes">Tidak ada catatan</p> : notes.map((note) => <NotesItem key={note.id} id={note.id} note={note} onDelete={onDelete} onArchive={onArchive} />)}</div>
    </div>
  );
}
