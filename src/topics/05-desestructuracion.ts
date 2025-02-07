interface Audio{
    nivelVolumen: number;
    duracion: number;
    sonido: string;
    detalles: Detalles;
}

interface Detalles{
    autor: string;
    año: number;
}

const audio: Audio={
    nivelVolumen: 90,
    duracion: 36,
    sonido: "Mess",
    detalles: {
        autor: "Messi",
        año: 2022
    }
}
// Forma 1 de desestructuracion
// const{
//     nivelVolumen: volumen,
//     detalles: {autor}
// } = audio;


// Forma 2 de desestructuracion
const{nivelVolumen:volumen, detalles} = audio;
const{año, autor}=detalles;

console.log('--------Desestructuracion--------')

console.log('Volumen con desestructuracion ', volumen);
console.log('Sonido ', audio.sonido);
console.log('Duracion ', audio.duracion);
console.log('Autor', audio.detalles.autor);
console.log('Autor con desestructuracion', autor);
console.log('Año desestructuracion', año);


const arre1: string[]=['Froilan Aranzazu', 'Eleuterio Casimira', 'Zenobia Bartolome'];
console.log('Persona 3 ',arre1[3] || 'No hay personaje');

const [,,,ultimo='No existe']:string[]=['Pantaleon Orfelinda', 'Severiano Briseida', 'Procoro Filomena', 'Ludovico Ismelda'];
console.log('Personaje 3', ultimo);