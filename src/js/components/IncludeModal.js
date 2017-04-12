import { Modal, PageHeader, Grid, Col, Row, Button } from 'react-bootstrap'
import React from "react"
import { addNotes } from "../actions/notesActions"
export default class IncludeModal extends React.Component {

  addnotes() {
    let notesTitle = this.refs.title.value;
    let notesMessage = this.refs.note.value;
    let tags = this.refs.tags.value.length ? this.refs.tags.value.split(',').map((tag) => tag.trim()) : [];
    this.props.dispatch(addNotes(notesTitle, notesMessage, tags));
    this.props.close();
  }

  render () {
    return (
      <Modal show={this.props.showModal} onHide={this.props.close}>
        <Modal.Header closeButton>
          <Modal.Title>Add a Note</Modal.Title>
        </Modal.Header>
        <Modal.Header>
          <Col md={12}>
            <input className="col-md-12" placeholder="Enter Title" type="text" ref="title" />
          </Col>
          <Col md={12}>
            <textarea className="col-md-12" placeholder="Enter notes" ref="note"/>
          </Col>
          <Col md={12}>
            <input className="col-md-12" placeholder="Enter Tags by comma-separated values" type="text" ref="tags" />
          </Col>
        </Modal.Header>
        <Modal.Footer>
          <button onClick={this.addnotes.bind(this)}>Add</button>
        </Modal.Footer>
      </Modal>
    )
  }
}
