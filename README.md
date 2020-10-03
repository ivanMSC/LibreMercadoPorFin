# LibreMercadoPorFin
Extensión para Chrome que hace lo posible para aniquilar tiendas Chinas en el resultado de búsqueda de mercadolibre.cl

Cansado del spam de las tiendas chinas en mercado libre? A mi me tenian fastidiado, así que busqué como crear una extensión para Chrome y este es el resultado.
La extensión no filtra esas otras tiendas de mierda que no son internacionales pero actuan como importadores (buscalibre, 2ebox, etc). La extensión borra esos vendedores que son derechamente extranjeros. Peor es nada.

## Instalación
1. Descargar los dos archivos de la carpeta src y ponerlos en una carpeta en tu computador.
2. Abrir el administrador de extensiones en Chrome. 
3. Habilitar Modo de Desarrollador (boton arriba a la derecha)
4. Click en "Cargar descomprimida"
5. Seleccionar la carpeta donde bajaste los archivos del src.
6. Listo.

## Uso
Soy un amateur así que la cosa es bien simple:
1. Entras a mercadolibre y haces una búsqueda.
2. Esperar a que los resultados de la búsqueda carguen.
3. Hacer un click en cualquier parte inerte de la página.
4. Hacer lo mismo cada vez que hagas una búsqueda o pases de página en una misma búsqueda.

EL click activa el código que lo que hace es borrar del listado todos aquellos elementos que tienen una descripción "Internacional", como se ve en la imagen de aquí:

![Ejemplo](https://raw.githubusercontent.com/ivanMSC/LibreMercadoPorFin/main/Ejemplo.png)

Puede pasar que tu búsqueda entregue únicamente elementos "Internacionales" así que el resultado será una página vacía. En ese caso, pasa a la página 2 y sigue buscando.
