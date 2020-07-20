class Personita{

nombre= "";
constructor(nombre, apeliidos){
    this.nombre = nombre;
}


getNombre(){
    return this.nombre;
}
setNombre(nombre){
    this.nombre = nombre;
}

}
module.exports = Personita;