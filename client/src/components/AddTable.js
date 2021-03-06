import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';

class ItemModal extends Component {
  state = {
    modal: false,
    name: ''
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    // and here
    this.setState({ [e.target.name]: e.target.value });
    console.log([e.target.value]);
    console.log( [e.target.name]);
  };

  onSubmit = e => {
    e.preventDefault();
// occurs right here

    const newItem = {
      name: this.state.name,
      order: this.state.order,
      number: this.state.number,
      orderamount2: this.state.number2,
      orderamount3: this.state.number3,
      note: this.state.note,
      note2: this.state.note2,
      note3: this.state.note3,
      tablenumber: 0
    };

    // Add item via addItem action
    this.props.addItem(newItem);

    console.log(newItem);
    // Close modal
    this.toggle();
  };

  render() {
    return (
      <div>
        <Button
          color="dark"
          style={{ marginBottom: '2rem' }}
          onClick={this.toggle}
        >
         Add Table
        </Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add Table</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="item">Table Size</Label>
                <Input
                  type="text"
                  name="name"
                  id="item"
                  placeholder="Add new table"
                  onChange={this.onChange}
                />
                <Button class="tbl-btn" color="dark" style={{ marginTop: '2rem' }} block>
                  Add new table
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item

});

export default connect(
  mapStateToProps,
  { addItem }
)(ItemModal);