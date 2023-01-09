# React JS eCommerce "Bad Karma"

### Sobre el tema:
Bad Karma es una marca de vestuario chilena de venta online.

### Estructura:
```
badkarma
└───NavBar
│   └───NavButton
│   └───CartWidget
└───ItemListContainer
│   └───ItemList
│       └───Item
└───ItemDetailContainer
│   └───ItemDetail
│       └───ItemCount
└───Cart
│   └───CartContent
└───Checkout
└───NotFound
```

### Funcionamiento:
#### Inicio:
- Al ingresar se muestra la ruta base "/" donde se visualizan los productos.
- En la sección del menú se muestra el carrito clickeable para ir a su respectiva vista.
- En el menú se muestran las categorías "Camisetas" y "Accesorios", las que al ser clickeadas llevan a la ruta "/category/:category", donde ":category" es el nombre de la categoría utilizado para filtrar los productos.
- El componente Navbar incluye el componente NavButton, siendo este un botón reutilizable que recibe su nombre como prop.
- Mientras se cargan los elementos desde la base de datos, se muestra el componente Spinner.

#### Productos:
- Al clickear un producto se lleva a la ruta "/item/:id", donde ":id" es el identificador que se utiliza para encontrar dicho producto.

#### Firebase:
- En la base de datos de Firebase se crean dos colecciones; "productos" donde se almacenan los datos de los items, y "ordenes" donde se guardan los datos ingresados por el usuario al finalizar una compra.

#### Carrito:
- En el widget de carrito se muestra la cantidad de productos en él, sumando el total de unidades por cada item.
- en la vista de Cart se muestra el resumen de los productos agregados, el valor total de la compra, un botón para borrar un item, otro botón para vaciar todo el carrito y luego el botón para finalizar la compra.
- Si no hay items en el carrito, se indica así.
- El componente Cart se separa en CartContent para que el renderizado condicional sea más legible.

#### Checkout:
- En la vista de Checkout se muestra un resumen de la compra, listando los productos mostrando la cantidad agregada entre paréntesis, antes del nombre. También se muestra el valor total del pedido.
- Se incluyen los inputs para ingresar nombre, teléfono y correo.
- Al finalizar la orden se muestra el mismo resumen de compra, junto con los datos ingresados y el código de pedido generado por Firebase. También se vacía el carrito.

#### 404:
- Al ingresar cualquier ruta no establecida, se muestra un mensaje y los productos disponibles.