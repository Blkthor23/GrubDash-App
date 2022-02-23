function validateDescription(req, res, next){
    const { data: {description} = {}} = req.body;
    
    if (description) {
      return next();
    } else {
      next({
        status: 400,
        message: "Dish must include a description"});
          }
      }

module.exports = validateDescription