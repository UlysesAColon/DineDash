import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  Container
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../../actions/itemActions';


class TableButtonModal extends Component {
  state = {
    modal: false,
    name: "",
    order: "order",
    orderamount: "Amount"
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({ [e.target.order]: e.target.value });
    console.log([e.target.value]);
  };

  onSubmit = e => {
    e.preventDefault();

    const newItem = {
      name: this.state.name,
      order: this.state.order,
      orderamount: this.state.orderamount
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
            <Input type="radio" value="chicken_wings" onChange={this.onChange}/>
            Chicken Wings
            <Input type="number" name="name" id="itemamount" onChange={this.onChange} />
            <Input type="text" name="note" id="noteid" onChange={this.onChange} />
            </label>
            </div>
            <div className="radio">
            <label>
            <Input type="radio" value="french_fries" onChange={this.onChange}/>
            French Fries
            <Input type="number" name="amount" id="itemamount" onChange={this.onChange} />
            <Input type="text" name="note" id="noteid" onChange={this.onChange} />
            </label>
            </div>
            <div className="radio">
            <label>
            <Input type="radio" value="Cheeseburger" onChange={this.onChange}  />
            Cheeseburger
            <Input type="number" name="amount" id="itemamount" onChange={this.onChange}/>
            <Input type="text" name="note" id="noteid" onChange={this.onChange}/>
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
