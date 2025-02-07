import { calcularCompra,Producto } from "./06-desArgumentos";

const comprarProd: Producto[]=[
    {
        descripcion:'Nokia',
        precio:100
    },
    {
        descripcion:'iPad',
        precio: 200
    }
];

const[total,imptotal ]= calcularCompra({
    productos:comprarProd,
    impuesto:0.15
});

console.log('--------Import Export---------')
console.log('Total', total);
console.log('Impuesto', imptotal)