interface Producto{
    descripcion: string;
    precio: number;
}

const telefono: Producto={
    descripcion: "Nokia A1",
    precio: 150.0
}

const tableta: Producto={
    descripcion: "Ipad Pair",
    precio: 250.0
}

interface ICalcularCompra{
    impuesto: number;
    productos: Producto[];
}

function calcularCompra(options: ICalcularCompra): number[] {
    let total=0;
    options.productos.forEach(productito=>{
        total+=productito.precio;
    });
    return [total];
}

// Ejemplo de uso:
const compra: ICalcularCompra = {
    impuesto: 0.16, // 16% de impuesto
    productos: [telefono, tableta]
};

console.log(calcularCompra(compra)); // Resultado: 464
