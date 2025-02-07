console.log('--------Interfaces--------')

let datos: string[]=['nombre', 'apellidoP', 'apellidoM'];
const masDatos: string[]=['nombre', 'apellidoP', 'apellidoM'];

interface Iperfil{
    nombre: string;
    edad: number;
    sexo?: string|undefined;
    puesto: string[];
}

const perfil:Iperfil={
    nombre: 'Messi',
    edad: 22,
    sexo: "H",
    puesto: ['Analista', 'Programador', 'Diseñador']
};

perfil.nombre= 'Jair'

console.log(perfil)
console.table(perfil)