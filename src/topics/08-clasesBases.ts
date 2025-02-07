class Persona{
    /* public nombre: string;
     public direccion: string;
     
     
     constructor(nombre1: string, direccion1: string){
         this.nombre=nombre1;
         this.direccion=direccion1;
     }*/

     constructor(public nombre1:string,public direccion1:string, publicpeso:number)
     {

     }
 }

 /*const ObjPersona= new Persona('emir', 'Puebla', 21)
 console.log(ObjPersona)

 export class SuperHero extends Persona{

     constructor(public sobrenombre:string, publicedad:number, publicnombre:string )
     {
         super(nombre,'Puebla', 50);
     }
 }*/

 export class SuperHero {

     constructor(public sobrenombre:string, public edad:number, public nombre:string, public person:Persona)
     {

         this.person=new Persona(nombre,'bbbb',70);

     }
 }

 const ObjPer=new Persona('anita', ' CDMX', 13);
 const ana2=new SuperHero('An',23,'Anita',ObjPer);

 console.log(ana2);