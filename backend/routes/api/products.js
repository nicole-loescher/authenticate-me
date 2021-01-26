const express = require('express')
const asyncHandler = require('express-async-handler');
const ProductRepo = require('../../db/products-repository')
const router = express.Router();
const { Product } = require('../../db/models');


router.get('/', asyncHandler(async(req, res)=> {
    const products = await ProductRepo.list();
    console.group(products)
    return res.json(products)

}));

router.get('/:id', asyncHandler(async(req, res)=>{
    const product = await ProductRepo.one(req.params.id)
    return res.json(product)
}))

module.exports = router;