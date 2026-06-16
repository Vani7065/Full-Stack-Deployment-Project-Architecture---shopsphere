const express =
require("express");

const router =
express.Router();

const Product =
require("../models/Product");

/* GET ALL PRODUCTS */

router.get(
  "/",
  async (req, res) => {

    try {

      const products =
      await Product.find();

      res.json(products);

    } catch (err) {

      res.status(500).json({
        msg: "Error fetching products"
      });

    }

  }
);

/* ADD PRODUCT */

router.post(
  "/",
  async (req, res) => {

    try {

      const product =
      new Product(req.body);

      await product.save();

      res.status(201)
      .json(product);

    } catch (err) {

      res.status(500).json({
        msg: "Error adding product"
      });

    }

  }
);

/* UPDATE PRODUCT */

router.put(
  "/:id",
  async (req, res) => {

    try {

      const updatedProduct =
      await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true
        }
      );

      if (!updatedProduct) {

        return res.status(404).json({
          msg: "Product not found"
        });

      }

      res.json(updatedProduct);

    } catch (err) {

      res.status(500).json({
        msg: "Update failed"
      });

    }

  }
);

/* DELETE PRODUCT */

router.delete(
  "/:id",
  async (req, res) => {

    try {

      const deletedProduct =
      await Product.findByIdAndDelete(
        req.params.id
      );

      if (!deletedProduct) {

        return res.status(404).json({
          msg: "Product not found"
        });

      }

      res.json({
        msg: "Product deleted successfully"
      });

    } catch (err) {

      res.status(500).json({
        msg: "Delete failed"
      });

    }

  }
);

module.exports =
router;