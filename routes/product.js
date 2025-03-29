const router = require('express').Router();
let Product = require('../models/Product.js');

// Create a new product
router.route('/add').post((req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    const price = Number(req.body.price);
    const category = req.body.category;
    const stockQuantity = Number(req.body.stockQuantity);

    const newProduct = new Product({
        name,
        description,
        price,
        category,
        stockQuantity
    });

    newProduct.save()
        .then(() => res.json('Product added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Get all products
router.route('/get').get((req, res) => {
    Product.find()
        .then(products => res.json(products))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Get a product by ID
router.route('/get/:id').get((req, res) => {
    Product.findById(req.params.id)
        .then(product => res.json(product))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;