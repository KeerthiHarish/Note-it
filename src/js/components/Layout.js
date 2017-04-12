import React from "react"
import { connect } from "react-redux"

import { filterNotes } from "../actions/notesActions"

import { Modal, PageHeader, Grid, Col, Row, Button, Panel } from 'react-bootstrap'

import styles from '../../client.css';

import IncludeModal from './IncludeModal';
import NotesCard from './NotesCard';

@connect((store) => {
  return {
    notes: store.notes.notes,
    filteredNotes: store.notes.filteredNotes,
    filterValue: store.notes.filterValue
  };
})
export default class Layout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
  }

  close = () => {
    this.setState({ showModal: false });
  }

  open = () =>{
    this.setState({ showModal: true });
  }

  filterNotes = (event) => {
    let filterValue = event.target.value.toLowerCase();
    this.props.dispatch(filterNotes(filterValue));
  }

  render() {
    let notes = this.props.filterValue ? this.props.filteredNotes: this.props.notes;
    let notesContainer = notes.length? (
      notes.map((note, index) => {
        return (
          <NotesCard key={note.id} note={note} {...this.props}/>
        )
      })): (<p class="text-center">No notes found</p>)

    return (
      <div>
        <Row>
          <Col md={2} />
          <Col md={8}>
            <PageHeader className="text-center"><small>Note it - Making notes made easy</small></PageHeader>
            <Row >
              <Col md={7}><input class="col-md-6" onChange={this.filterNotes} placeholder="Search notes or tags" style={{float: 'right'}} type="text" /></Col>
              <Col md={5}><Button onClick={this.open} bsStyle="success">Add New</Button></Col>
            </Row>
            {notesContainer}
          </Col>
          <Col md={2} />
        </Row>
        <IncludeModal showModal={this.state.showModal} {...this.props} close={this.close}/>
      </div>
    )
  }
}
