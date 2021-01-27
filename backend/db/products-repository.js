// const { delete } = require('../routes/api/products');
const { Product, Category } = require('./models');

async function list() {
    return await Product.findAll()
}

async function one(id) {
    return await Product.findByPk(id);
}

async function add(details) {
    const product = await Product.create(details);
    return product.id
}
async function update(details) {
    const id = details.id;
    delete details.id;
    await Product.update(
        details,
        {
            where: { id },
            returning: true,
        }
    );
    return id;
}

module.exports = {
    list, 
    one,
    add,
    update
}
