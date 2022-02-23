const path = require("path");

// Use the existing dishes data
const dishes = require(path.resolve("src/data/dishes-data"));

// Use this function to assign ID's when necessary
const nextId = require("../utils/nextId");

// Validation imports
const validateDescription = require("./validation/validateDescription");
const validateDish = require("./validation/validateDish");
const validateId = require("./validation/validateId");
const validateImage = require("./validation/validateImage");
const validateName = require("./validation/validateName");
const validatePrice = require("./validation/validatePrice");

// TODO: Implement the /dishes handlers needed to make the tests pass
function list(req, res) {
  res.status(200).json({ data: dishes });
}

function read(req, res) {
  const foundDish = res.locals.foundDish;
  res.status(200).json({ data: foundDish });
}

function create(req, res) {
  const {
    data: { name, description, price, image_url },
  } = req.body;
  const newPost = {
    id: nextId(),
    name,
    description,
    price,
    image_url,
  };
  dishes.push(newPost);
  res.status(201).json({ data: newPost });
}

function update(req, res) {
  const foundDish = res.locals.foundDish;

  const {
    data: { name, description, price, image_url },
  } = req.body;

  foundDish.name = name;
  foundDish.description = description;
  foundDish.price = price;
  foundDish.image_url = image_url;

  res.status(200).json({ data: foundDish });
}

module.exports = {
  list,
  create: [
    validateName, 
    validateDescription, 
    validatePrice, 
    validateImage, 
    create
  ],
  read: [validateDish, read],
  update: [
    validateDish,
    validateName,
    validateDescription,
    validatePrice,
    validateImage,
    validateId,
    update,
  ],
};
