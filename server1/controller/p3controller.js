const Page1 = require('../models/p1Models');

exports.updateProduct = async (req, res) => {
    console.log(req.FormData)
    const { id } = req.params;
    const { name, price, description, image } = req.body;

    try {
        const updatedProduct = await Page1.findOneAndUpdate(
            { '_id': id },
            { name: name, price: price, description: description, image: image },
            { new: true }
        );
        console.log(updatedProduct)
        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json(updatedProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


exports.deleteProduct = async (req, res) => {
    const { id } = req.params;

    try {
        await Page1.findByIdAndRemove(id);
        res.sendStatus(204); // Success, no content
    } catch (error) {
        console.error(error);
        res.sendStatus(500); // Internal server error
    }
};
