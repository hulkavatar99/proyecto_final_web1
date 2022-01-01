
class todo{
    #persona
    #direccion
    #telefono
    #edad
    #altura
    constructor(pers,dir,tel,edad,altura){
        this.#persona=pers
        this.#direccion=dir
        this.#telefono=tel
        this.#edad=edad
        this.#altura=altura
    }
    setpersona(pers) {
        this.#persona = pers
    }
    getpersona() {
        return this.#persona
    }
    setdireccion(dir) {
        this.#direccion = dir
    }
    getdireccion() {
        return this.#direccion
    }
    settelefono(tel) {
        this.#telefono = tel
    }
    gettelefono() {
        return this.#telefono
    }
    setEdad(edad) {
        this.#edad = edad
    }
    getEdad() {
        return this.#edad
    }
    setAltura(altura){
        this.#altura=altura
    }
    getAltura(){
        return this.#altura
    }
    

}
function onClic(){
    var sinletras=/^([0-9])*$/;
    var alturaLimit=/^[0-8][.][0-9][0-9]$/;
    us.setpersona(document.contenedor.personap.value);
    us.setdireccion(document.contenedor.direccionp.value);
    us.settelefono(document.contenedor.telefonop.value);
    us.setEdad(document.contenedor.edadp.value);
    us.setAltura(document.contenedor.alturap.value);
    if(sinletras.test(document.contenedor.edadp.value) && alturaLimit.test(document.contenedor.alturap.value)){
        document.getElementById("todo").innerHTML ="{ <br>persona: "+us.getpersona()+" <br>direccion: "+us.getdireccion()+" <br>telefono: "+us.gettelefono()+" <br>edad:"+us.getEdad()+" <br>altura: "+us.getAltura()+"<br>}";
       var all=document.getElementById("todo");
       var usepoo=document.getElementById("poo");
       var aviso=document.getElementById("aviso");
       all.style.color="red" 
       usepoo.style.color="green"
       aviso.style.color="blue"    
    }else{
        alert("Escribir correctamento los datos: "+us.getEdad()+" "+us.getAltura())
        document.getElementById("all").innerHTML ="";
    }
    }
function nextPage(){
    var sinletras=/^([0-9])*$/;
    var alturaLimit=/^[0-8][.][0-9][0-9]$/;
    us.setpersona(document.contenedor.personap.value);
    us.setdireccion(document.contenedor.direccionp.value);
    us.settelefono(document.contenedor.telefonop.value);
    us.setEdad(document.contenedor.edadp.value);
    us.setAltura(document.contenedor.alturap.value);
    if(sinletras.test(document.contenedor.edadp.value) && alturaLimit.test(document.contenedor.alturap.value)){
        let person={
            nombre: us.getpersona(),
            direccion: us.getdireccion(),
            telefono: us.gettelefono(),
            edad: document.contenedor.edadp.value,
            altura: document.contenedor.alturap.value
        }
        localStorage.setItem("Person",JSON.stringify(person))
        document.pooform.submit();
    }else{
        alert("Escribir correctamente los datos: "+us.getEdad()+" "+us.getAltura())
        document.getElementById("all").innerHTML ="";
    }
    
}

let persona=localStorage.getItem("persona")
let direccion=localStorage.getItem("direccion")
let telefono=localStorage.getItem("telefono")
const us = new todo(persona,direccion,telefono,document.contenedor.edadp.value,document.contenedor.alturap.value);
document.getElementById("pe").innerHTML = "Bienvenido "+persona+" "+direccion+" "+telefono;

document.contenedor.personap.value=persona;
document.contenedor.direccionp.value=direccion;
document.contenedor.telefonop.value=telefono;




