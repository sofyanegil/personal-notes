/* eslint-disable class-methods-use-this */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
/* eslint-disable consistent-return */
/* eslint-disable max-len */
import React, { Component } from 'react';
import Swal from 'sweetalert2';
import { getInitialData } from './utils/index';
import { NotesHeader, NotesBody } from './components/index';

import './App.css';

export default class NotesApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      search: '',
    };

    this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.showForm = this.showForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
  }

  onAddNotesHandler({ title, body }) {
    this.setState((prevState) => ({
      notes: [
        ...prevState.notes,
        {
          id: +new Date(),
          title,
          body,
          createdAt: new Date().toISOString(),
          archived: false,
        },
      ],
    }));
  }

  onDeleteHandler(id) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: 'Yakin, Hapus?',
        text: 'Catatan yang dihapus tidak bisa dikembalikan',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Hapus!',
        cancelButtonText: 'Batal',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire('Terhapus!', 'Catatan Anda dihapus', 'success');
          return this.setState((prevState) => ({
            ...prevState,
            notes: prevState.notes.filter((note) => note.id !== id),
          }));
        }
        if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire('Batal Hapus', 'Catatan Anda masih ada', 'error');
        }
      });
  }

  onArchiveHandler(id) {
    this.setState((prevState) => ({
      ...prevState,
      notes: prevState.notes.map((note) => (note.id === id ? { ...note, archived: !note.archived } : note)),
    }));

    Swal.fire({
      icon: 'success',
      title: 'Catatan dipindahkan',
      showConfirmButton: false,
      timer: 2000,
    });
  }

  onSearchHandler(event) {
    const keyword = event.target.value;
    this.setState((prevState) => ({
      ...prevState,
      search: keyword,
    }));
  }

  showForm() {
    const form = document.getElementById('notes-modal');
    form.classList.remove('hide');
  }

  closeForm() {
    const form = document.getElementById('notes-modal');
    form.classList.add('hide');
  }

  render() {
    return (
      <>
        <NotesHeader />
        <NotesBody
          notes={this.state.notes}
          addNotes={this.onAddNotesHandler}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
          showForm={this.showForm}
          closeForm={this.closeForm}
          onSearch={this.onSearchHandler}
          search={this.state.search}
        />
      </>
    );
  }
}
