export default function reducer(state={
  notes: [
    {
      id: 100,
      title: 'First title',
      message: 'First description',
      tags: ['one', 'two']
    },
    {
      id: 101,
      title: 'Second title',
      message: 'Second description',
      tags: ['xxx', 'yyy']
    }
  ],
  filterValue: null,
  filteredNotes: []
}, action) {
  switch (action.type) {
    case 'ADD_NOTE':
      return {...state, notes: [...state.notes, action.payload]}
    break;
    case 'FILTER_NOTE':
      return {
        ...state,
        filteredNotes: [...state.notes.filter((note) => note.title.toLowerCase().includes(action.payload.filterValue))],
        filterValue: action.payload.filterValue
      }
    break;
    case 'DELETE_NOTE':
      let index = state.notes.findIndex(note => note.id == action.payload.noteId)
      return {
        ...state,
        notes: [
          ...state.notes.slice(0, index),
          ...state.notes.slice(index+1)
        ]
      }
    break;
    default:
    return state;
  }
}
