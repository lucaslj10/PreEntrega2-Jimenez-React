const products = [
  {
    id: "1",
    name: "Camiseta Oversize Paris Moon al reves",
    price: 260,
    category: "balenciaga",
    img: "camisetaoversizeparismoonalreves.jpg",
    stock: 10,
    description: "Camiseta Oversize Paris Moon al reves",
  },
  {
    id: "2",
    name: "Purple Supreme Shirt",
    price: 130,
    category: "supreme",
    img: "purplesupremeshirt.jpg",
    stock: 5,
    description: "Purple Supreme Shirt",
  },
  {
    id: "3",
    name: "Amiri district silk shirt",
    price: 900,
    category: "amiri",
    img: "amiriremera.jpg",
    stock: 8,
    description: "Amiri district silk shirt",
  },
];
export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export function getProductByCategory(category) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((product) => category === product.category));
    }, 500);
  });
}
