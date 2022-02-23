function validateStatus(req, res, next) {
    const { data: {status} = {} } = req.body;
  
    if (!status || status === "invalid") {
      return next({
        status: 400,
        message:
          "Order must have a status of pending, preparing, out-for-delivery, delivered",
      });
    } else if(status === "delivered") {
      return next({status: 400, message: "A delivered order cannot be changed"})
    }else
    next();
  }
  
  module.exports = validateStatus;