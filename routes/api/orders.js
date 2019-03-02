const express = require('express');
const router = express.Router();

//  Item Model
const Order = require('../../models/Order');

//  @route  GET api/orders
// @desc    Get All Orders
// @access  Public
router.get('/', (req, res)=>{
    Order.find()
      .sort({ date: -1})
      .then(items => res.json(items))
});

//  @route  POST api/orders
// @desc    Create A Orders
// @access  Public
router.post('/', (req, res)=>{
    const newOrder = new Order({
      name: req.body.name,
      order: req.body.order
    });

    newOrder.save().then(order => res.json(item));
});

//  @route  DELETE api/orders/:id
// @desc    Delete A Orders
// @access  Public
router.delete('/:id', (req, res)=>{
 Order.findById(req.params.id)
  .then(order => order.remove().then(()=> res.json({success: true})))
  .catch(err => res.status(404).json({success: false}));
});


module.exports = router;