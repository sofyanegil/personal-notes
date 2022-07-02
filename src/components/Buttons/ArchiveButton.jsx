import React from 'react';

export default function ArchiveButton({ id, archived, onArchive }) {
  return (
    <button type="submit" className="btn btn-primary" onClick={() => onArchive(id)}>
      {archived ? 'Pindahkan' : 'Arsipkan'}
    </button>
  );
}
