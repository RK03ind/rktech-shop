import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Processor",
    icon: "https://res.cloudinary.com/rk03/image/upload/v1684664240/rktech/cpu-120x120_nkmac0.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Motherboard",
    icon: "https://res.cloudinary.com/rk03/image/upload/v1684664240/rktech/motherboard-120x120_w7bokg.jpg",
  },
  {
    _id: uuid(),
    categoryName: "RAM",
    icon: "https://res.cloudinary.com/rk03/image/upload/v1684664240/rktech/memory-ram-120x120_t3gvov.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Graphics Unit",
    icon: "https://res.cloudinary.com/rk03/image/upload/v1684664240/rktech/gpu-120x120_xnzhnh.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Cooling",
    icon: "https://res.cloudinary.com/rk03/image/upload/v1684664241/rktech/fans-cooling-120x120_dvzs41.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Storage",
    icon: "https://res.cloudinary.com/rk03/image/upload/v1684664241/rktech/storage-3-120x120_ntkbpc.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Cabinet",
    icon: "https://res.cloudinary.com/rk03/image/upload/v1684664241/rktech/cabinet-case-120x120_ce7jjw.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Others",
    icon: "https://res.cloudinary.com/rk03/image/upload/v1684664241/rktech/gaming-accesories-1-120x120_ktqlvy.jpg",
  },
];
