function validateName(req, res, next){
    const { data: {name} = {}} = req.body;
    
    if (name) {
      return next();
    } else {
      next({
        status: 400,
        message: `Dish must include a name`});
          }
      }

module.exports = validateName