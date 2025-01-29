function addnumeros(a:number, b:number):number {
    return a+b;
}

const result:number=addnumeros(1,2)
console.log({result})

const addnumerosA=(a:number, b:number):string =>{
    return `${a+b}` ;
}

const re:string=addnumerosA(4,5)
console.log({re})

function masDatos(n1:number, n2?:number, base:number=2){
    return n1*base;
}


interface datosymasDatos{
    nombre: string;
    edad: number;
    mostrarDatos: () => void;
}

const misDatos =(dato: datosymasDatos, masEdad:number)=>{
    dato.edad += masEdad; /*otra forma es  */
}

const persona: datosymasDatos={
    nombre:'ANGEL',
    edad:20,
    mostrarDatos(){
        console.log(`la edad es ${this.edad}`)
    }
}


misDatos(persona,10);
misDatos(persona,30);
persona.mostrarDatos();

const resultado: number=addnumeros(1,2);
const result2: string=addnumerosA(1,2);
const result3: number=masDatos(8);
console.log(resultado, result2,result3);