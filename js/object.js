const customers = [
  {
    name: "Kristof",
    id: 1,
    favoriteProducts: [
      {
        category: "tv",
        color: "black",
      },
    ],
  },
  {
    name: "Ferenc",
    id: 2,
    favoriteProducts: [
      {
        category: "headphone",
        color: "gray",
      },
      {
        category: "camera",
        color: "black",
      },
    ],
  },
];

const products = [
  {
    category: "camera",
    color: "white",
    id: 1,
  },
  {
    category: "camera",
    color: "black",
    id: 2,
  },
  {
    category: "tv",
    color: "black",
    id: 3,
  },
  {
    category: "tv",
    color: "white",
    id: 4,
  },
  {
    category: "headphone",
    color: "white",
    id: 5,
  },
  {
    category: "headphone",
    color: "gray",
    id: 6,
  },
];

const findFavoriteProductsId = (prods, custs) => {
  const result = [];
  for (const prod of prods) {
    for (const cust of custs) {
      for (const favProd of cust.favoriteProducts) {
        if (prod.category === favProd.category && prod.color === favProd.color) {
          result.push({
            customerName: cust.name,
            productId: prod.id,
          });
        }
      }
    }
  }
  return result;
};

console.log(findFavoriteProductsId(products, customers));
