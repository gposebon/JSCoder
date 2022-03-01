'use strict'

let lechugaStock = 3;

const restaStock = (stockDisponibleDeProducto, cantidad) => {
    stockDisponibleDeProducto -= cantidad
    return stockDisponibleDeProducto
}

const comprobarStock = (stock, cantidad) => {
    if(stock < cantidad) {
        return false
    } else {
        return true
    }
}

const calculeTotalPrecio = (cantidad, precio) => {
    return cantidad * precio
}

const agregaProductoAlCarrito = (producto, precio, stockDisponibleDeProducto, cantidad) => {
    let stock = restaStock(stockDisponibleDeProducto, cantidad)
    let stockDisponible = comprobarStock(stock, cantidad)
    let precioTotal = calculeTotalPrecio(cantidad, precio)


    if(stockDisponible > 0 ) {
        document.write(`<h3>Usted eligio ${cantidad} de ${stock} ${producto} por un total de ${precioTotal}</h3>`)
    } else {
        document.write(`<h2>No queda mas ${producto} en stock</h2>`)
    }
}

agregaProductoAlCarrito("lechuga", 80, lechugaStock, 1)
agregaProductoAlCarrito("lechuga", 80, lechugaStock, 1)
agregaProductoAlCarrito("lechuga", 80, lechugaStock, 1)
agregaProductoAlCarrito("lechuga", 80, lechugaStock, 1)