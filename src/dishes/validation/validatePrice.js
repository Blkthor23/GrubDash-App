function validatePrice(req, res, next){
    const { data: {price} = {}} = req.body;
    
    if (typeof price !== "number" || price <= 0) {
        next({
            status: 400,
            message: `Dish must have a price that is an integer greater than 0`});
    }
    
    if(price){
        return next();
    }

    next({status:400, message: "Dish must include a price"})
}

module.exports = validatePrice