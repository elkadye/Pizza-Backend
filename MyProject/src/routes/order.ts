import express from "express";
import { AppDataSource } from "../data-source";
import { Order } from "../entity/Order";
import { OrderProduct } from "../entity/OrderProduct";
import { Product } from "../entity/Product";

const router = express.Router();

// Create Order
router.post("/order", async (req, res) => {
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
      //should move if !product to the beginning  as to avoid creating an empty order
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
    const createdOrder = await Order.find({
      where: { id: +order.id },
      relations: { orderProducts: true },
    });
    return res.json(createdOrder);
  } catch {
    return res.status(404);
  }
});

// Fetch all orders and their products
router.get("/orders", async (req, res) => {
  try {
    const orders = await Order.find({
      relations: { orderProducts: {product:true}  },
    });
    return res.json(orders);
  } catch {
    return res.status(404);
  }
});


//Fetch order by id
router.get("/order/:order_id", async (req, res) => {
  try {
    const { order_id } = req.params;
    const order = await Order.find({
      where: { id: +order_id },
      relations: { orderProducts: { product: true } },
    });
    if (order.length === 0) {
      return res.status(404).json({ msg: "order doesn't exist" });
    }
    return res.json(order);
  } catch {
    return res.status(404);
  }
});

// FETCH COMPLETED order
router.get("/orders/completed", async (req, res) => {
  try {
    const orders = await Order.find({
      where: { completed:true },
      relations: { orderProducts: true },
    });
    if (orders.length === 0) {
      return res.status(404).json({ msg: "no completed orders" });
    }
    return res.json(orders);
  } catch {
    return res.status(404);
  }
});

// UPDATE order status to completed
router.get("/order/:order_id/completed", async (req, res) => {
  try {
    const { order_id } = req.params;
    const order = await Order.findOneBy({ id: +order_id });
    if (!order) {
      return res.status(404).json({ msg: "order doesn't exist" });
    }
    order.completed=true
    await  order.save();

    return res.json(order);
  } catch {
    return res.status(404);
  }
});


export { router as orderRouter };
