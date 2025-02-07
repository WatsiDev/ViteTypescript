

export interface Producto{
    descripcion: string;
    precio: number;}


     export const telefono: Producto={
        descripcion: 'Nokia A1' ,
        precio: 150.0
   }

   export  const tableta: Producto={
    descripcion: 'iPad Air',
    precio: 250.0 }

     export interface ICalcularCompra{
        impuesto:number;
        productos:Producto[];
    }
        
   export function calcularCompra(options: ICalcularCompra): number[]
    {
        let total=0;
        options.productos.forEach(productito=>{
            total+=productito.precio;
        });
        return [total];
    }
    

   const compra: ICalcularCompra = {
    impuesto: 0.15,
    productos: [telefono, tableta]
   }
   
   console.log('--------DesArgumentos--------')
   console.log(calcularCompra(compra));