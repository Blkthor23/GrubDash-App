const path = require("path");

// Use the existing order data
const orders = require(path.resolve("src/data/orders-data"));

// Use this function to assigh ID's when necessary
const nextId = require("../utils/nextId");

// Validation Imports
const validateDelivery = require("./validation/validateDelivery");
const validateDishQuantity = require("./validation/validateDishQuantity");
const validateDishes = require("./validation/validateDishes");
const validateMobile = require("./validation/validateMobile");
const validateOrder = require("./validation/validateOrder");
const validateId = require("./validation/validateId");
const validateStatus = require("./validation/validateStatus");
const validatePending = require("./validation/validatePending");

// TODO: Implement the /orders handlers needed to make the tests pass
function list(req, res) {
  res.status(200).json({ data: orders });
}

function create(req, res) {
  const {
    data: { deliverTo, mobileNumber, status, dishes },
  } = req.body;
  const newOrder = {
    id: nextId(),
    deliverTo,
    mobileNumber,
    status,
    dishes,
  };
  orders.push(newOrder);
  res.status(201).json({ data: newOrder });
}

function read(req, res) {
  const foundOrder = res.locals.foundOrder;
  res.status(200).json({ data: foundOrder });
}

function update(req, res) {
  const foundOrder = res.locals.foundOrder;
  const {
    data: { deliverTo, mobileNumber, status, dishes },
  } = req.body;

  foundOrder.deliverTo = deliverTo;
  foundOrder.mobileNumber = mobileNumber;
  foundOrder.status = status;
  foundOrder.dishes = dishes;

  res.status(200).json({ data: foundOrder });
}

function destroy(req, res) {
  const { orderId } = req.params;
  const index = orders.findIndex((order) => order.id === orderId);
  if (index > -1) {
    orders.splice(index, 1);
  }
  res.sendStatus(204);
}

module.exports = {
  list,
  create: [
    validateDelivery,
    validateMobile,
    validateDishes,
    validateDishQuantity,
    create,
  ],
  read: [validateOrder, read],
  update: [
    validateOrder,
    validateDelivery,
    validateMobile,
    validateDishes,
    validateDishQuantity,
    validateId,
    validateStatus,
    update,
  ],
  destroy: [validateOrder, validatePending, validateId, destroy],
};