import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button, Row, Col } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem} from '../actions/itemActions';
import { getItems2, deleteItem2 } from '../actions/orderActions';
import PropTypes from 'prop-types';
import TableButtonModal from './Table/TableButtonModal';

class ShoppingList extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  onDeleteClick = id => {
    console.log(id);
    console.log(this);  
    this.props.deleteItem(id);
  };

  onDeleteClick2 = id => {
    console.log(id);
    console.log(this);  
    this.props.deleteItem2(id);
  };

  render() {
    const { items } = this.props.item;
    return (
      <div>
      <Container className="container-body">
        <ListGroup>
        <Container>
          <Row>
          <Col xs="6">
          <TransitionGroup className="shopping-list">
            {items.map(({ _id, name, order, number }) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <ListGroupItem class="list-group" font="strong">
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={this.onDeleteClick.bind(this, _id)}
                  >
                   Remove Table
                  </Button>
                  <div>
                  <br></br>
                  <p>{name} Person Table </p>
                  </div>
           
             <Col xs="6">
            <TableButtonModal></TableButtonModal>
              </Col> 
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
          </Col>    
        </Row>
        </Container>
        </ListGroup>
      </Container>
      </div>
    );
  }
}

ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { getItems, deleteItem, getItems2, deleteItem2 }
)(ShoppingList);