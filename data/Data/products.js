import { v4 as uuidv4 } from "uuid";

let products = [
  {
    id: uuidv4(),
    name: "Laptop",
    description: "High-performance laptop",
    price: 1200,
    category: "Electronics",
    inStock: true,
  },
];

export default products;
