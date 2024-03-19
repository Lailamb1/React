
const products = [
    {
    id: 1,
    title: 'Ciencia',
    price: '10 U$D',
    category: 'cursos',
    description: 'Curso de ciencia',
    image:'../public/images/Ciencia.jpg',
    stock: 10,
    },
    {
    id: 2,
    title: 'Desarrollo personal',
    price: '20 U$D',
    category: 'cursos',
    description: 'Curso de Desarrollo personal',
    image:'../public/images/Desarrollo-personal.jpg',
    stock: 20,
    },
    {
    id: 3,
    title: 'Diseño arte y creatividad',
    price: '30 U$D',
    category: 'cursos',
    description: 'Curso de Diseño arte y creatividad',
    image:'../public/images/Diseno-arte-y-creatividad.jpg',
    stock: 30,
    },
    {
    id: 4,
    title: 'Diseño arte y creatividad',
    price: '40 U$D',
    category: 'cursos',
    description: 'Curso de Diseño arte y creatividad',
    image:'../public/images/Educacion-y-ensenanza.jpg',
    stock: 40,
    },
    {
    id: 5,
    title: 'Ingeniería',
    price: '50 U$D',
    category: 'cursos',
    description: 'Curso de Ingeniería',
    image:'../public/images/Ingenieria.jpg',
    stock: 50,
    },
    {
    id: 6,
    title: 'Negocios',
    price: '60 U$D',
    category: 'cursos',
    description: 'Curso de Negocios',
    image:'../public/images/Negocios.jpg',
    stock: 60,
    },
    {
    id: 7,
    title: 'Programación',
    price: '70 U$D',
    category: 'cursos',
    description: 'Curso de Programación',
    image:'../public/images/Programacion.jpg',
    stock: 70,
    },
    {
    id: 8,
    title: 'Salud y medicina',
    price: '80 U$D',
    category: 'cursos',
    description: 'Curso de Salud y medicina',
    image:'../public/images/Salud-y-Medicina.jpg',
    stock: 80,
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
