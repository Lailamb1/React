
const products = [
    {
    id: 1,
    title: 'Alimento de gato',
    price: '20 U$D',
    category: 'Alimento',
    description: 'Alimento de gato',
    image:'../public/images/alimento gato.webp',
    stock: 5,
    },
    {
    id: 2,
    title: 'Alimento de perro',
    price: '20 U$D',
    category: 'Alimento',
    description: 'Alimento de perro',
    image:'../public/images/alimento perro.webp',
    stock: 5,
    },
    {
    id: 3,
    title: 'Cama',
    price: '15 U$D',
    category: 'Cama',
    description: 'Cama para perros y gatos',
    image:'../public/images/cama.webp',
    stock: 8,
    },
    {
    id: 4,
    title: 'Collar para perro',
    price: '5 U$D',
    category: 'Collar',
    description: 'Collar para perro',
    image:'../public/images/collar.webp',
    stock: 15,
    },
    {
    id: 5,
    title: 'Correa para perro',
    price: '5 U$D',
    category: 'Correa',
    description: 'Correa para perro',
    image:'../public/images/correa.webp',
    stock: 15,
    },
    {
    id: 6,
    title: 'Comedero para perros y gatos',
    price: '7 U$D',
    category: 'Comedero',
    description: 'Comedero para perros y gatos',
    image:'../public/images/comedero.jpeg',
    stock: 10,
    },
    {
    id: 7,
    title: 'Juguete masticable para perro',
    price: '10 U$D',
    category: 'Juguete',
    description: 'Juguete masticable para perro',
    image:'../public/images/juguete.webp',
    stock: 7,
    },
    {
    id: 8,
    title: 'Piedritas para gato',
    price: '10 U$D',
    category: 'Piedritas',
    description: 'Piedritas para gato',
    image:'../public/images/piedras gato.png',
    stock: 9,
    },
];

export const getProducts = new Promise((resolve) => {
    setTimeout(() => {
    resolve(products);
    console.log('Enviando datos!!!');
    }, 2000);
});

export const getProduct = (id) => {
    return products.find((prod) => prod.id == id);
};
