import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  // CPU
  {
    _id: uuid(),
    name: "AMD RYZEN 7 5800X",
    price: "22889",
    rating: "3.5",
    category: "Processor",
    imageLink:
      "https://res.cloudinary.com/rk03/image/upload/v1684792014/rktech/100-100000063wof_1-1000x1000_djhujf.jpg",
  },
  {
    _id: uuid(),
    name: "INTEL CORE I9-12900KS",
    price: "58189",
    rating: "5",
    category: "Processor",
    model: "BX8071512900KS",
    imageLink:
      "https://www.vedantcomputers.com/image/cache/catalog/assets/product/intel/processor/i9-12900ks/bx8071512900ks_1-550x550.jpg",
  },
  {
    _id: uuid(),
    name: "AMD RYZEN 5 7600",
    price: "19525",
    rating: "4.5",
    category: "Processor",
    model: "100-100001015BOX",
    imageLink:
      "https://www.vedantcomputers.com/image/cache/catalog/assets/product/amd/cpu/100-000001015box/100-000001015box-1-550x550.jpg",
  },
  // Motherboard
  {
    _id: uuid(),
    name: "ASROCK B560 STEEL LEGEND",
    price: "12160",
    rating: "3.9",
    category: "Motherboard",
    model: "B560SteelLegend",
    imageLink:
      "https://www.vedantcomputers.com/image/cache/catalog/assets/product/asrock/motherboard/b560-steel-legend/b560-steel-legend-1-550x550.jpg",
  },
  {
    _id: uuid(),
    name: "ROG MAXIMUS Z690 HERO",
    price: "57715",
    rating: "4.2",
    category: "Motherboard",
    model: "ROGMAXIMUSZ690",
    imageLink:
      "https://www.vedantcomputers.com/image/cache/catalog/assets/product/asus/motherboard/rog-maximus-z690-hero/rog-maximus-z690-hero-1-550x550.jpg",
  },
  // RAM
  {
    _id: uuid(),
    name: "CORSAIR VENGEANCE RGB PRO 16GB (8GBX2) DDR4 3200MHZ",
    price: "6150",
    rating: "3.4",
    category: "RAM",
    model: "CMW16GX4M2E3200C16-TUF",
    imageLink:
      "https://www.vedantcomputers.com/image/cache/catalog/assets/product/corsair/ram/cmw16gx4m2e3200c16-tuf/cmw16gx4m2e3200c16-tuf-1-550x550.JPG",
  },
  {
    _id: uuid(),
    name: "G.SKILL RIPJAWS SO-DIMM 16GB 4800MHZ DDR5 LAPTOP",
    price: "6735",
    rating: "4.2",
    category: "RAM",
    model: "F5-4800S4039A16GX1-RS",
    imageLink:
      "https://www.vedantcomputers.com/image/cache/catalog/assets/product/g-skill/ram/f5-4800s4039a16gx1-rs/f5-4800s4039a16gx1-rs-1-550x550.jpg",
  },
  // Graphics
  {
    _id: uuid(),
    name: "ASROCK AMD RADEON RX 7900 24GB OC",
    price: "99999",
    rating: "4.9",
    category: "Graphics Unit",
    model: "RX7900XTX",
    imageLink:
      "https://www.vedantcomputers.com/image/cache/catalog/assets/product/asrock/graphics-card/rx7900xtx-pg-24go/rx7900xtx-pg-24go-1-550x550.JPG",
  },
  {
    _id: uuid(),
    name: "ASUS DUAL GEFORCE GTX 1650 4GB OC",
    price: "14170",
    rating: "4.1",
    category: "Graphics Unit",
    model: "DUAL-GTX1650-O4GD6-P-V2",
    imageLink:
      "https://www.vedantcomputers.com/image/cache/catalog/assets/product/asus/graphics-card/dual-gtx1650-o4gd6-p-v2/dual-gtx1650-o4gd6-p-v2-1-550x550.jpg",
  },
  {
    _id: uuid(),
    name: "RTX 3090TI Suprim",
    price: "1522229",
    rating: "5",
    category: "Graphics Unit",
    model: "SPRMRTX3090TI",
    imageLink:
      "https://res.cloudinary.com/rk03/image/upload/v1684792155/rktech/geforce-rtx-3090-ti-suprim-x-24g-1-550x550_wmywv5.jpg",
  },
  {
    _id: uuid(),
    name: "ASUS ROG STRIX GEFORCE RTX 4090 OC EDITION 24GB GDDR6X",
    rating: "5",
    category: "Graphics Unit",
    model: "ROG-STRIX-RTX4090-O24G-GAMING",
    price: "208949",
    imageLink:
      "https://www.vedantcomputers.com/image/cache/catalog/assets/product/asus/graphics-card/rog-strix-rtx4090-o24g-gaming/rog-strix-rtx4090-o24g-gaming-1-550x550.jpg",
  },
  // Cooling
  {
    _id: uuid(),
    name: "ANT ESPORTS NC120 LAPTOP COOLER",
    price: "1100",
    rating: "4",
    category: "Cooling",
    model: "NC120",
    imageLink:
      "https://www.vedantcomputers.com/image/cache/catalog/assets/product/ant-esports/accessories/nc120/nc120-1-550x550.jpg",
  },
  {
    _id: uuid(),
    name: "CORSAIR ML140 - TWIN FAN PACK",
    price: "5365",
    category: "Cooling",
    rating: "1.5",
    model: "CO-9050078-WW",
    imageLink:
      "https://www.vedantcomputers.com/image/cache/catalog/assets/product/corsair/cabinet-fan/co-9050078-ww/co-9050078-ww-4-550x550.jpg",
  },
  {
    _id: uuid(),
    name: "COOLER MASTER HYPER 620S",
    price: "3680",
    rating: "4.98",
    category: "Cooling",
    model: "RR-D6NA-17PA-R1",
    imageLink:
      "https://www.vedantcomputers.com/image/cache/catalog/assets/product/cooler-master/cpu-cooler/rr-d6na-17pa-r1/rr-d6na-17pa-r1-1-550x550.jpg",
  },
  // Cabinet
  {
    _id: uuid(),
    name: "COOLER MASTER HAF 700 EVO",
    price: "44189",
    category: "Cabinet",
    rating: "4.7",
    model: "H700E-IGNN-S00",
    imageLink:
      "https://www.vedantcomputers.com/image/cache/catalog/assets/product/cooler-master/cabinet/h700e-ignn-s00/h700e-ignn-s00_1-550x550.jpg",
  },
  {
    _id: uuid(),
    name: "ANTEC DF600 FLUX GAMING",
    price: "6190",
    category: "Cabinet",
    rating: "3.2",
    model: "DF600",
    imageLink:
      "https://www.vedantcomputers.com/image/cache/catalog/assets/product/antec/cabinet/df600-flux/df600-flux_1-550x550.jpg",
  },
  // Storage
  {
    _id: uuid(),
    name: "SEAGATE EXTERNAL PORTABLE HDD - 5TB",
    price: "9414",
    rating: "3",
    category: "Storage",
    model: "STKZ5000400",
    imageLink:
      "https://www.vedantcomputers.com/image/cache/catalog/assets/product/seagate/ssd/stkz5000400/STKZ5000400-1-550x550.jpg",
  },
  {
    _id: uuid(),
    name: "ADATA 3.1 PCIE GEN3 1TB",
    price: "5200",
    rating: "2",
    category: "Storage",
    model: "ADATA1TBSSD",
    imageLink:
      "https://res.cloudinary.com/rk03/image/upload/v1684792252/rktech/aleg-700-1tcs-1-550x550_vj7oyi.jpg",
  },
  {
    _id: uuid(),
    name: "ADATA XPG SX6000 512GB",
    price: "2389",
    rating: "4.1",
    category: "Storage",
    model: "ASX6000PNP-512GT-C",
    imageLink:
      "https://www.vedantcomputers.com/image/cache/catalog/assets/product/adata/ssd/asx6000pnp-512gt-c/asx6000pnp-512gt-c-2-550x550.jpg",
  },
  // Others
  {
    _id: uuid(),
    name: "SONY PLAYSTATION 5 DISK EDITION",
    price: "54990",
    rating: "4.5",
    category: "Others",
    model: "PS5-DISK",
    imageLink:
      "https://www.vedantcomputers.com/image/cache/catalog/assets/product/sony/ps5-disk/ps5-disk-1-550x550.jpg",
  },
  {
    _id: uuid(),
    name: "COOLER MASTER ORACLE AIR NVME SSD ENCLOSURE",
    price: "3640",
    rating: "4",
    category: "Others",
    model: "SOA010-ME-00",
    imageLink:
      "https://www.vedantcomputers.com/image/cache/catalog/assets/product/cooler-master/accessories/soa010-me-00/soa010-me-00-1-550x550.jpg",
  },
];
