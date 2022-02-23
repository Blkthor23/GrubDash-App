function validateDishes(req, res, next) {
    const { data: { dishes } = [] } = req.body;
  
    if (!dishes) {
      return next({ status: 400, message: "Order must include a dish" });
    }
    if (!Array.isArray(dishes) || dishes.length === 0) {
      return next({
        status: 400,
        message: "Order must include at least one dish",
      });
    }
    next();
  }
  
  module.exports = validateDishes;