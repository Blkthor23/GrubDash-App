function validateDishQuantity(req, res, next) {
    const { data: { dishes } = {} } = req.body;
  
    for (let i = 0; i < dishes.length; i++) {
      const dish = dishes[i];
      if (
        !dish.quantity ||
        typeof dish.quantity !== "number" ||
        dish.quantity < 0
      ) {
        return next({
          status: 400,
          message: `Dish ${i} must have a quantity that is an integer greater than 0`,
        });
      }
    }
    next();
  }
  
  module.exports = validateDishQuantity;