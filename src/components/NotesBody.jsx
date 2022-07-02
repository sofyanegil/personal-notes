import React from 'react';
import AddButton from './Buttons/AddButton';
import NotesInput from './NotesInput';
import NotesList from './NotesList';
import NotesSearch from './NotesSearch';

export default function NotesBody({
  notes, addNotes, onDelete, onArchive, onSearch, showForm, closeForm, search,
}) {
  // eslint-disable-next-line max-len
  const notesFilterd = notes.filter((note) => note.title.toLowerCase().includes(search.toLowerCase()));

  const notesArchived = notesFilterd.filter((note) => note.archived);
  const notesUnarchived = notesFilterd.filter((note) => !note.archived);

  return (
    <main>
      <NotesSearch searchNotes={onSearch} />
      <NotesInput closeForm={closeForm} onAddNotes={addNotes} />
      <AddButton showForm={showForm} />
      <NotesList title="Catatan Aktif" notes={notesUnarchived} onDelete={onDelete} onArchive={onArchive} />
      <NotesList title="Arsip" notes={notesArchived} onDelete={onDelete} onArchive={onArchive} />
    </main>
  );
}
