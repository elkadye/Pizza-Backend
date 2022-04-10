import express from "express";
import { Order } from "../entity/Order";
import { OrderProduct } from "../entity/OrderProduct";
import { Product } from "../entity/Product";

const router = express.Router();

router.post("/order/", async (req, res) => {
  try {
    const { orderItems, name, address, mobile, city } = req.body;
    const order = Order.create({
      name,
      address,
      mobile,
      city,
    });
    await order.save();
    for (let i = 0; i < orderItems.length; i++) {
        const item=orderItems[i]
      const product = await Product.findOneBy({ id: +item.product});
      if (!product) {
        return res.status(404).json({ msg: "product doesn't exist" });
      }
      const orderProduct= OrderProduct.create({
          product,
          order,
          qty: +item.qty
      })
      await orderProduct.save();
    }
    return res.json(order);
  } catch {
    return res.status(404);
  }
});
export { router as orderRouter };
