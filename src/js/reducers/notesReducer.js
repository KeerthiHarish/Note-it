export default function reducer(state={
  notes: [
    {
      id: 100,
      title: 'Dummy title',
      message: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...',
      tags: ['one', 'two']
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
    let filteredNotes = [];
    let filterValue = action.payload.filterValue;
    state.notes.map((note) => {
      if(note.title.toLowerCase().includes(filterValue)) {
        filteredNotes.push(note)
      } else {
        note.tags.map((tag) => {
          if(tag.toLowerCase().includes(filterValue)) {
            (filteredNotes.indexOf(note) == -1) && filteredNotes.push(note)
          }
        })
      }
    })
      return {
        ...state,
        filteredNotes: [...filteredNotes],
        filterValue: action.payload.filterValue
      }
      // return {
      //   ...state,
      //   filteredNotes: [...state.notes.filter((note) => note.title.toLowerCase().includes(action.payload.filterValue))],
      //   filterValue: action.payload.filterValue
      // }
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
