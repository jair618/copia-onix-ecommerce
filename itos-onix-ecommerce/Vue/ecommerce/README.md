# ecommerce

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

-----------Listo----------
Agregar en la pantalla donde se despliega la matriz para agregar las cantidades por color, 

agregar por cada referencia (cada color) dos columnas (una columna con el valor del campo de NetSuite (+inventario disponible (que no considera reservador) + lo que esta por entrar) y otra columna con el campo de NetSuite (el valor anterior - las ordenes de venta aprobadas por gerencia)

-----------Listo----------
Agregar un filtro de Saldo
Bajar la clase como filtro y crearlos en el siguiente orden:
Marca
Genero
Linea
Grupo
Subgrupo
Fit
Coleccion (Temporada)
saldo





4/10/2021
-Incrementar las cantidades de acuerdo al Pack del artículo (artículo Pack 6) cuando le de + en la venta sume de 6 + 6 + 6
-Campo de Filtro para poder permitir ajustar los valores diferentes a la base de cada artículo, si se marca lo permite, sino no lo
-Agregar en la pantalla donde se despliega la matriz para agregar las cantidades por color, agregar por cada referencia (cada color) dos columnas (una columna con el valor del campo de NetSuite (+inventario disponible (que no considera reservados) + lo que está por entrar) y otra columna con el campo de NetSuite (el valor anterior - las órdenes de venta aprobadas por gerencia)
-Ajuste de Precios según permisos (Limitarlo en los usuarios donde se dan los accesos). Agregar un check de permitir cambiar precio y porcentaje del precio 

-Poder en el Grid de la ventana de matrix, si se detalla un precio, replicarlo a todos los valores que marca en el pedido. (Video 31:00), puede escoger entre el pedido y ajustar los precios según la necesidad que posea de negociación y de acuerdo a los permisos
