const products = [
  {
    id: 1,
    stock: 3,
    description:
      "Royal Canin Alimento Seco para Perro Adulto Raza Grande, 13.6 kg",
    img: "https://i.ibb.co/ZmRRk2w/royal.png",
    price: 22100,
    suggested: true,
    brand: "Royal Canin",
    discountRate: 15,
    category: "perros",
  },
  {
    id: 2,
    stock: 5,
    description:
      "Pro Plan Alimento Seco para Perro Receta Pollo y Arroz, 13 kg",
    img: "https://i.ibb.co/mRBCQjq/purina.png",
    price: 17640,
    suggested: false,
    brand: "pro plan purina",
    discountRate: 0,
    category: "perros",
  },
  {
    id: 3,
    stock: 8,
    description: "Versele NutriBird P15 Alimento para Loros y Psitácidos, 1 kg",
    img: "https://i.ibb.co/H420rGH/nutribird.png",
    price: 4550,
    suggested: false,
    brand: "NutriBird",
    discountRate: 0,
    category: "aves",
  },
  {
    id: 4,
    stock: 0,
    description:
      "Hill's Science Alimento Seco para Gato Adulto Receta Pollo, 7.3 kg",
    img: "https://i.ibb.co/L6dVBVF/hills.png",
    price: 10462,
    suggested: true,
    brand: "hills",
    discountRate: 15,
    category: "gatos",
  },
  {
    id: 5,
    stock: 6,
    description:
      "Pro Plan Alimento Seco para Gato Adulto Receta Pollo y Arroz, 3 kg",
    img: "https://i.ibb.co/M1pKg8q/purina-cat.png",
    price: 8620,
    suggested: false,
    brand: "purina",
    discountRate: 0,
    category: "gatos",
  },
  {
    id: 6,
    stock: 3,
    description: "Azooplus Alimento para Tortuga Acuática, 380 g",
    img: "https://i.ibb.co/GFJYRjb/azoo.png",
    price: 4750,
    suggested: false,
    brand: "azoo",
    discountRate: 0,
    category: "reptiles",
  },
  {
    id: 7,
    stock: 2,
    description: "Imagitarium Sand Black Arena Nega para Acuario, 9.07 kg",
    img: "https://i.ibb.co/bXvV4jK/imagitarium.png",
    price: 3780,
    suggested: false,
    brand: "imagitarium",
    discountRate: 0,
    category: "peces",
  },
]

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products)
    }, 2000)
  })
}

export const getProductByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        products.filter((prod) =>
          prod.category
            .toLocaleLowerCase()
            .includes(categoryId.toLocaleLowerCase())
        )
      )
    }, 2000)
  })
}

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id == productId))
    }, 2000)
  })
}
