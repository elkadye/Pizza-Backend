import express from "express";
import { Category } from "../entity/Category";
import { Product } from "../entity/Product";


const router = express.Router();

router.post("/product/:category_id", async (req, res) => {
  try {
      const {category_id} = req.params
       const category = await Category.findOneBy({ id: +category_id });
       if (!category) {
         return res.status(404);
       }
       const {name, description,image,price,isPopular} = req.body
       const product = Product.create({
         category,
         name,
         description,
         image,
         price,
         isPopular,
       });
    await product.save();
    return res.json(product);
  } catch {
    return res.status(404);
  }
});

router.get("/product", async (req, res) => {
  try {
    const products = await Product.find({
      relations: { category: true },
    });
    return res.json(products);
  } catch {
    return res.status(404);
  }
});

router.get("/product/:product_id", async (req, res) => {
  try {
    const { product_id } = req.params;
    const product = await Product.find({
      where: { id: +product_id },
      relations: { category: true, orderProducts: true },
    });
    if (!product) {
      return res.status(404).json({ msg: "product doesn't exist" });
    }
    return res.json(product);
  } catch {
    return res.status(404);
  }
});

export { router as productRouter };
