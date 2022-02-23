function validateId(req, res, next) {
    const dishId = req.params.dishId;
    const { data: { id } = {} } = req.body;
  
    if (id) {
      if (id !== dishId)
        return next({
          status: 400,
          message: `Dish id does not match route id. Dish: ${id}, Route: ${dishId}`,
        });
    }
    next();
  }
  
  module.exports = validateId;