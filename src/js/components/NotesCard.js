import React from 'react';
import { Modal, PageHeader, Grid, Col, Row, Button, Panel } from 'react-bootstrap'
import { deleteNotes } from "../actions/notesActions"
export default class NotesCard extends React.Component {

  deleteNote = () => {
    this.props.dispatch(deleteNotes(this.props.note.id))
  }
  render() {
    const note = this.props.note
    return (
      <div className="panel panel-default">
        <div class="panel-heading">
          {note.title}<Button onClick={this.deleteNote.bind(this)} style={{float: 'right', margin: -7}}>X</Button>
        </div>
        <div className="panel-body">
          {note.message}
        </div>
        <div class="panel-footer">
          {note.tags}
        </div>
      </div>
    )
  }
}
