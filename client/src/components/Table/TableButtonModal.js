import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Container
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../../actions/itemActions';


class TableButtonModal extends Component {
  state = {
    modal: false,
    name: "",
    order: "",
    number: "0",
    note: ""
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  updateNumber(event){
    this.setState({number:event.target.value})
  };

  updateNote (event){
    this.setState({note:event.target.value});
  };

  onChange = e => {
    this.setState({ [e.target.order]: e.target.value });
    console.log([e.target.value]);
    console.log( [e.target.name]);
  };

  onSubmit = e => {
    e.preventDefault();

    const newItem = {
      name: e.target.name,
      order: e.target.value,
      orderamount: e.target.value,
      note: e.target.note
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
          Place Order
        </Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Current Order</ModalHeader>
          <ModalBody>
          <Container>
            <div>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
            <div className="radio">
            <label>
            <Input type="radio" name="Chicken Wings" value="Chicken Wings" onChange={this.onSubmit}/>
            Chicken Wings
           
            <Input type="number" name="name" value={this.state.number} onChange={this.updateNumber.bind(this)} />
            
            <Input type="text" name="name" value={this.state.note} onChange={this.updateNote.bind(this)}  onSubmit={this.onSubmit}/>
            </label>
            </div>
            <div className="radio">
            <label>
            <Input type="radio" name="name" value="French_fries" onChange={this.onSubmit}/>
            French Fries

            <Input type="number" name="name" value={this.state.number} onChange={this.updateNumber.bind(this)} />
            <Input type="text" name="name" value={this.state.note} onChange={this.updateNote.bind(this)} />
            </label>
            </div>
            <div className="radio">
            <label>
            <Input type="radio" name="name" value="Cheeseburger" onChange={this.onChange}  />
            Cheeseburger
            
            <Input type="number" name="name" value={this.state.number} onChange={this.updateNumber.bind(this)} />
            <Input type="text" name="name" value={this.state.note} onChange={this.updateNote.bind(this)} />
            </label>
            </div>
                <Button color="dark" style={{ marginTop: '2rem' }} block>
                 Place Order
                </Button>
              </FormGroup>
            </Form>
            </div>
            </Container>
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
)(TableButtonModal);
