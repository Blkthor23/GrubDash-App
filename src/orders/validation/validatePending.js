function validatePending(req, res, next) {
    const foundOrder = res.locals.foundOrder;
  
    if (foundOrder.status !== "pending") {
      return next({
        status: 400,
        message: "An order cannot be deleted unless it is pending",
      });
    }
    next();
  }
  
  module.exports = validatePending;