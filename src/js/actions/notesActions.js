let notesId = 1;
export function addNotes(title, message, tags) {
  return {
    type: 'ADD_NOTE',
    payload: {
      title,
      message,
      tags,
      id: notesId++
    },
  }
}

export function filterNotes(filterValue) {
  return {
    type: 'FILTER_NOTE',
    payload: {
      filterValue
    }
  }
}

export function deleteNotes(noteId) {
  return {
    type: 'DELETE_NOTE',
    payload: {
      noteId
    }
  }
}
