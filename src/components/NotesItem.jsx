import React from 'react';
import { showFormattedDate } from '../utils';
import ArchiveButton from './Buttons/ArchiveButton';
import DeleteButton from './Buttons/DeleteButton';

export default function NotesItem({ note, onDelete, onArchive }) {
  const {
    id, title, body, createdAt, archived,
  } = note;

  return (
    <div className="notes-item card">
      <div className="notes-item__body">
        <p className="notes-item__date">{showFormattedDate(createdAt)}</p>
        <h3 className="notes-item__title">{title}</h3>
        <p className="notes-item__text">{body}</p>
      </div>
      <div className="notes-item__button">
        <ArchiveButton id={id} onArchive={onArchive} archived={archived} />
        <DeleteButton id={id} onDelete={onDelete} />
      </div>
    </div>
  );
}
