import test from "ava";
//imports
import {Product} from "./index";
import {User} from "./index";


test("Testeo la clase User", function (t){
const nuevoUsuario = new User ("gaston");
const nuevoProducto = new Product("Libro" , 5);
nuevoUsuario.addProduct(nuevoProducto);

t.is(nuevoUsuario.name , "gaston");
t.is(nuevoProducto.name , "Libro");
t.is(nuevoProducto.price , 5);
});


test("Testeo la clase Product y sus métodos",  function (t) {
    const nuevoProducto = new Product ("Libro", 5);
    t.is(nuevoProducto.name , "Libro");
    t.is(nuevoProducto.price , 5);
});
