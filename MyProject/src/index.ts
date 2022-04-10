import { AppDataSource } from "./data-source";
import express, { application } from "express";
import { categoryRouter } from "./routes/category";
import { productRouter } from "./routes/product";
import { orderRouter } from "./routes/order";


const app = express();

const main = async () => {
  try {
      await AppDataSource.initialize();
      console.log("connected to DB")
      app.use(express.json());
      app.use(categoryRouter, productRouter, orderRouter);


      app.listen(8080,()=>{
          console.log("App running on port 8080")
      })
  } catch (error) {
    console.log(error);
  }
};

main();

