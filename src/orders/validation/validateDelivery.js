function validateDelivery(req, res, next) {
    const { data: { deliverTo } = {} } = req.body;
  
    if (deliverTo) {
      return next();
    }
    next({ status: 400, message: "Order must include a deliverTo" });
  }
  
  module.exports = validateDelivery;