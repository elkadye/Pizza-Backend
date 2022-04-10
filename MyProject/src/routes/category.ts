import express from "express";
import { Category } from "../entity/Category";

const router = express.Router();

router.post("/category", async (req, res) => {
  try {
    const { name } = req.body;

    const category = Category.create({
      name,
    });

    await category.save();
    return res.json(category);
  } catch {
    return res.status(404);
  }
});

router.get("/categories", async (req, res) => {
  try {
    const categories = await Category.find({
      relations: { products: true },
    });
    res.send(categories);
    return res.json(categories);
  } catch {
    return res.status(404);
  }
});

router.get("/category/:category_id", async (req, res) => {
  try {
    const { category_id } = req.params;
    const category = await Category.find({
      where: { id: +category_id },
      relations: { products: true },
    });
    if (!category){
        return res.status(404).json({ msg: "category doesn't exist" });
    }
    return res.json(category);
  } catch {
    return res.status(404);
  }
});

export { router as categoryRouter };
