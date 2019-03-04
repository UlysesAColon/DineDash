import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from './../../actions/orderActions';
import PropTypes from 'prop-types';


class OrderedItems extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  onDeleteClick = id => {
    this.props.deleteItem(id);
  };

  render() {
    const { items } = this.props.item;
    return (
      <div>
      <Container>
        <ListGroup>
          <TransitionGroup className="shopping-list">
            {items.map(({ _id, order}) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <ListGroupItem font="strong">
                  {order} Ordered Items
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
      </div>
    );
  }
}

OrderedItems.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { getItems, deleteItem }
)(OrderedItems);