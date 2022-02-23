function validateId(req, res, next) {
    const orderId = req.params.orderId;
    const { data: {id} = {} } = req.body;
  
    if (id) {
      if (orderId !== id) {
        return next({
          status: 400,
          message: `Order id does not match route id. Order ${id}, Route: ${orderId}`,
        });
      }
    }
    next();
  }
  
  module.exports = validateId;