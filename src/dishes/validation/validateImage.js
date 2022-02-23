function validateImage(req, res, next){
    const { data: {image_url} = {}} = req.body;
    
    if (image_url) {
      return next();
    } else {
      next({
        status: 400,
        message: `Dish must include a image_url`});
          }
      }

module.exports = validateImage