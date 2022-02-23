const path = require("path");
const orders = require(path.resolve("src/data/orders-data"));

function validateOrder(req, res, next) {
  const orderId = req.params.orderId;
  const foundOrder = orders.find((order) => (order.id = orderId));
  if (foundOrder) {
    res.locals.foundOrder = foundOrder;
    return next();
  }
  next({ status: 404, message: `Order does not exist ${orderId}` });
}

module.exports = validateOrder;