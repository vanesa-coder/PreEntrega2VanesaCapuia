class Menu{
    constructor(categoria, producto, precio){
        this.categoria= categoria,
        this.producto= producto,
        this.precio= precio
    }
}

const menu=[
    {
        categoria: "cafeteria",
        producto: "cafe",
        precio: 500,
    },
    {
        categoria: "cafeteria",
        producto: "cortado",
        precio: 550,
    },
    {
        categoria: "cafeteria",
        producto: "te",
        precio: 500,
    },
    {
        categoria: "cafeteria",
        producto: "tostados",
        precio: 1000,
    },
    {
        categoria: "cafeteria",
        producto: "medialunas",
        precio: 200,
    },
    {
        categoria: "almuerzo",
        producto: "hamburguesa simple",
        precio: 1200,
    },
    {
        categoria: "almuerzo",
        producto: "hamburguesa completa",
        precio: 1700,
    },
    {
        categoria: "almuerzo",
        producto: "sandwich milanesa simple",
        precio: 1300,
    },
    {
        categoria: "almuerzo",
        producto: "sandwich milanesa completo",
        precio: 1900,
    },
    {
        categoria: "almuerzo",
        producto: "sandwich vegan",
        precio: 1500,
    },
    {
        categoria: "bebidas",
        producto: "agua mineral",
        precio: 500,
    },
    {
        categoria: "bebidas",
        producto: "gaseosas",
        precio: 800,
    },
    {
        categoria: "bebidas",
        producto: "cerveza Andes",
        precio: 900,
    },
    {
        categoria: "bebidas",
        producto: "cerveza artesanal",
        precio: 1100,
    },
]

alert("bienvenid@ a El Bar")
// Muestro por consola el menu completo
console.log("Menu completo");
menu.forEach(item =>{
    console.log(`${item.categoria} - ${item.producto} - ${item.precio}`)
})
// El usuario elige la categoría y muestro los productos
tomarPedido()
function tomarPedido(){
let cliente = prompt("Si desea consumir algo de:\n Cafetería ingrese 1,\n Almuerzo ingrese 2,\n Bebidas ingrese 3");
if(cliente == 1){
    const mostrarcategoria = menu.filter(item => item.categoria === 'cafeteria');
    console.log(mostrarcategoria);

    mostrarcategoria.forEach(item =>{
        alert(`Productos de cafetería:\n - ${item.producto}\n - $${item.precio}`);
    })
    
}else if(cliente == 2){
    const mostrarcategoria = menu.filter(item => item.categoria === 'almuerzo');
    console.log(mostrarcategoria);

    mostrarcategoria.forEach(item =>{
        alert(`Productos de Almuerzos:\n - ${item.producto}\n - $${item.precio}`);
    })
    
}else if(cliente == 3){
    const mostrarcategoria = menu.filter(item => item.categoria === 'bebidas');
    console.log(mostrarcategoria);

    mostrarcategoria.forEach(item =>{
        alert(`Nuestras bebidas:\n - ${item.producto}\n - $${item.precio}`);
    })
}
else{
    alert("Dato inválido");
    tomarPedido();
}
// Elección del producto dentro de la categoría seleccionada
elegir()
function elegir(){
    eleccion1 = prompt("Que producto desea?");   
    encontrarProducto=menu.find(item => item.producto === eleccion1);
if(encontrarProducto){
    console.log(encontrarProducto);
    let seleccion= `${encontrarProducto.producto} $${encontrarProducto.precio}`;
    alert("Usted seleccionó: " + seleccion);
    }else{
        alert("dato invalido");
        elegir()
    }
}
// Elección de la cantidad del producto seleccionado
contar()
function contar(){
    let cuantosProductos= prompt(`Cuant@s ${encontrarProducto.producto} desea?`)
    const cantidad= (cuantosProductos * `${encontrarProducto.precio}`);
    if(cuantosProductos > 0 && cuantosProductos != ""){
        alert(`Su pedido:\n Cantidad: ${cuantosProductos}\n Producto: ${encontrarProducto.producto} $${encontrarProducto.precio}\n total: $${cantidad}`)
    }else{
        alert("Dato inválido");
        contar()
    }
}
// Confirmación o cancelacion del pedido
confirmar()
function confirmar(){
    let confirma= prompt("Confirma su pedido? Si/No");
    if(confirma == "si"){
    alert("Su pedido ya está registrado. Muchas gracias!!")
    }else{
        alert("Su pedido fue cancelado")
    }
}
}





//Agrego mas productos al Menu
const combos= []
combos.push=(new Menu("cafeteria", "cafe + medialunas", 600));
console.log(combos)
combos.push=(new Menu("almuerzo", "hamburguesa completa + gaseosa", 2300));
console.log(combos)


