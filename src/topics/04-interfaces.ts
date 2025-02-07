// Forma 1

interface SuperHero{
    nombre: string;
    edad: number;
    adress:{
        calle: string,
        pais: string,
        ciudad: string
    };
    showAdress():string;
}
// Forma 2
interface SuperHero{
    nombre: string;
    edad: number;
    adress:{
        calle: string,
        pais: string,
        ciudad: string
    };
    showAdress:()=>string;
}

// Forma 3
interface SuperHero{
    nombre: string;
    edad: number;
    adress: Adress;
    showAdress: () => string;
}
interface Adress{
    calle: string,
    pais: string,
    ciudad: string
}


const superHeroe: SuperHero={
    nombre: 'spiderman',
    edad: 30,
    adress:{
        calle:'2 sur',
        pais:'USA',
        ciudad: 'Nueva York'
    },
    showAdress(){
        return this.nombre + ', ' + this.adress.ciudad + ', ' + this.adress.pais
    }
}

const adress = superHeroe.showAdress();

console.log('--------interfaces--------')
console.log(adress);