import React from 'react';

export default function DeleteButton({ id, onDelete }) {
  return (
    <button type="submit" className="btn btn-danger" onClick={() => onDelete(id)}>
      Hapus
    </button>
  );
}
