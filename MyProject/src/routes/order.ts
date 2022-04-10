import express from "express";
import { Category } from "../entity/Category";
import { OrderProduct } from "../entity/OrderProduct";
import { Product } from "../entity/Product";

const router = express.Router();

router.post("/order/", async (req, res) => {
  try {
      const [orders]= req.body
        const orderProduct=async ()=> orders.forEach(product =>{
                OrderProduct.create({
                    product
                })
                await orderProduct.save();
            })
        
        // const orderProduct = ()=>{
        //     orders.map

        // }  
        return res.json(OrderProduct);
  }  
catch {
    return res.status(404);
  }
});
// async insertorderProduct(orders) {
    // const orderEntities = OrderProduct.create(orders);
//   await OrderProduct.insert(orderEntities);
  //return orderEntities;
//} 
    
    // const {orderProducts} = req.body;
    // const product = Product.create({
    //   category,
    //   name,
    //   description,
    //   image,
    //   price,
    //   isPopular,
    // });
    // await product.save();
    

// router.get("/products", async (req, res) => {
//   try {
//     const products = await Product.find({
//       relations: { category: true },
//     });
//     res.send(products);
//     return res.json(products);
//   } catch {
//     return res.status(404);
//   }
// });

// router.get("/product/:product_id", async (req, res) => {
//   try {
//     const { product_id } = req.params;
//     const product = await Product.find({
//       where: { id: +product_id },
//       relations: { category: true, orderProducts: true },
//     });
//     if (!product) {
//       return res.status(404).json({ msg: "product doesn't exist" });
//     }
//     return res.json(product);
//   } catch {
//     return res.status(404);
//   }
// });

export { router as orderRouter };
