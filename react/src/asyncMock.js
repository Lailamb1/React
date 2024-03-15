
const products = [
    {
    id: 1,
    title: 'Ciencia',
    price: '10U$D',
    category: 'cursos',
    description: 'Curso de ciencia',
    image:'../public/images/Ciencia.jpg',
    },
    {
    id: 2,
    title: 'Desarrollo personal',
    price: '10U$D',
    category: 'cursos',
    description: 'Curso de Desarrollo personal',
    image:'../public/images/Desarrollo-personal.jpg',
    },
    {
    id: 3,
    title: 'Diseño arte y creatividad',
    price: '10U$D',
    category: 'cursos',
    description: 'Curso de Diseño arte y creatividad',
    image:'../public/images/Diseno-arte-y-creatividad.jpg',
    },
    {
    id: 4,
    title: 'Diseño arte y creatividad',
    price: '10U$D',
    category: 'cursos',
    description: 'Curso de Diseño arte y creatividad',
    image:'../public/images/Educacion-y-ensenanza.jpg',
    },
    {
    id: 5,
    title: 'Ingeniería',
    price: '10U$D',
    category: 'cursos',
    description: 'Curso de Ingeniería',
    image:'../public/images/Ingenieria.jpg',
    },
    {
    id: 6,
    title: 'Negocios',
    price: '10U$D',
    category: 'cursos',
    description: 'Curso de Negocios',
    image:'../public/images/Negocios.jpg',
    },
    {
    id: 7,
    title: 'Programación',
    price: '10U$D',
    category: 'cursos',
    description: 'Curso de Programación',
    image:'../public/images/Programacion.jpg',
    },
    {
    id: 8,
    title: 'Salud y medicina',
    price: '10U$D',
    category: 'cursos',
    description: 'Curso de Salud y medicina',
    image:'../public/images/Salud-y-Medicina.jpg',
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
