import axios from 'axios';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './types';

export const getItems2 = () => dispatch => {
  dispatch(setItemsLoading());
  axios.get('/api/orders').then(res =>
    dispatch({
      type: GET_ITEMS,
      payload: res.data
    })
  );
};

export const addItem2 = item => dispatch => {
  axios.post('/api/orders', item).then(res =>
    dispatch({
      type: ADD_ITEM,
      payload: res.data
    })
  );
};

export const deleteItem2 = id => dispatch => {
  axios.delete(`/api/orders/${id}`).then(res =>
    dispatch({
      type: DELETE_ITEM,
      payload: id
    })
  );
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};