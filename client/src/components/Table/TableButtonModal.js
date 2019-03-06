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
import { addItem, updateOrder } from '../../actions/itemActions';


class TableButtonModal extends Component {

  state = {
    modal: false,
    name: "",
    order: "",
    number: "0",
    number2: "0",
    number3: "0",
    note: "",
    note2: "",
    note3: ""
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  updateNumber(event){
    this.setState({number:event.target.value})
  };

  updateNumber2(event){
    this.setState({number2:event.target.value})
  };

  updateNumber3(event){
    this.setState({number3:event.target.value})
  };

  updateNote (event){
    this.setState({note:event.target.value});
  };

  updateNote2 (event){
    this.setState({note2:event.target.value});
  };
  updateNote3 (event){
    this.setState({note3:event.target.value});
  };


  onChange = e => {
    this.setState({ [e.target.order]: e.target.value });
    console.log([e.target.value]);
    console.log( [e.target.name]);
  };

  onSubmit = e => {
    e.preventDefault();

    const newItem = {
      name: e.target.value,
      order: e.target.name,
      orderamount: e.target.value,
      orderamount2: e.target.value,
      orderamount3: e.target.value,
      note: e.target.value,
      note2: e.target.value,
      note3: e.target.value
    };

    // Add item via addItem action
    this.props.addItem(newItem);
    this.props.updateOrder(newItem);

    console.log(newItem);
    // Close modal
    this.toggle();
  };
  
  render() {
    const { items } = this.props.item;
    return (
      <div>
        <Button
          color="dark"
          style={{ marginBottom: '2rem' }}
          onClick={this.toggle}
        >
          Place Order
        </Button>
              {items.map(({ _id, name, order}) => ( 

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Current Order</ModalHeader>
          <ModalBody>
          <Container>
            <div>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
            <div className="radio">
            <label>
            <Input type="radio" name="Chicken Wings" value={name} onChange={this.onSubmit}/>
            Chicken Wings
{/* 
            <Input type="number" name="name" value="89" onChange={this.updateNumber.bind(this)} onSubmit={this.onSubmit} />  
            
            <Input type="text" name="name" value={this.state.note} onChange={this.updateNote.bind(this)}  onSubmit={this.onSubmit}/>
            
             */}
            </label>
            </div>
            <div className="radio">
            <label>
            <Input type="radio" name="French Fries" value={name} onChange={this.onSubmit}/>
            French Fries

            {/* <Input type="number" name="name" value={this.state.number2} onChange={this.updateNumber2.bind(this)} />
            <Input type="text" name="name" value={this.state.note2} onChange={this.updateNote2.bind(this)} />
             */}
            </label>
            </div>
            <div className="radio">
            <label>
            <Input type="radio" name="Cheeseburger" value={name} onChange={this.onSubmit}  />
            Cheeseburger
{/* 
            <Input type="number" name="name" value={this.state.number3} onChange={this.updateNumber3.bind(this)} />
            <Input type="text" name="name" value={this.state.note3} onChange={this.updateNote3.bind(this)} /> */}
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
                ))}    
      </div>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { addItem, updateOrder }
)(TableButtonModal);
