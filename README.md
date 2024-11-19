# LibreMercadoPorFin
## [Link a la Chromestore](https://chrome.google.com/webstore/detail/libre-mercado-por-fin/gkpmkhmeehedhppgjodpjdjbjiaoiphe?hl=es)
Extensión para Chrome que hace lo posible para aniquilar tiendas Chinas en el resultado de búsqueda de mercadolibre.cl

Cansado del spam de las tiendas chinas en mercado libre? A mi me tenian fastidiado, así que busqué como crear una extensión para Chrome y este es el resultado.
La extensión no filtra esas otras tiendas de mierda que no son internacionales pero actuan como importadores (buscalibre, 2ebox, etc). La extensión borra esos vendedores que son derechamente extranjeros. Peor es nada.

Version 1.2.2 actualizada el 23-01-2023: Ahora borra resultados de búsqueda que muestran el típico mensaje "Disponible X días después de tu compra". Cambié el manifest a version 3 (ni puta idea que significa, pero Chrome me manda a la mierda el manifest v2. A lo choro, le mandé un 3 en el manifest y era. A ver si pasa.) 

Version 1.2.3 actualizada el 01-03-2023: Se arregla bug que eliminaba resultados del "supermercado" de mercadolibre. Ahora elimina solo los que tienen el svg azul de "Compra internacional" (lo cual antes colisionaba con "supermercado").

Version 1.2.4 actualizada el 13-11-2024: Recién hoy me di cuenta que la extensión ya no funcionaba. Mercado Libre hizo mil modificaciones en su sitio así que tuve que cambiar los parámetros de búsqueda en el script. Ahora ha vuelto a funcionar.

Version 1.2.5 Algo no le gusto a la chromestore, a ver si esta si la aprueban.

## Instalación

### Chrome
1. Instalar de [aquí](https://chrome.google.com/webstore/detail/libre-mercado-por-fin/gkpmkhmeehedhppgjodpjdjbjiaoiphe?hl=es).

### Otros navegadoes (Userscript)
Instala una extensión de Userscripts (como por ejemplo, [Tampermonkey](https://www.tampermonkey.net/)) y luego entra [aquí](https://github.com/ivanMSC/LibreMercadoPorFin/raw/main/src/script.user.js).

### Chrome (instalación manual)
1. Descargar la extensión en zip de [acá](https://github.com/ivanMSC/LibreMercadoPorFin/blob/main/LibreMercadoPorFin.zip) y descopmrimirlo en alguna carpeta de tu computador. O bien, descargar los archivos de la carpeta src de este repositorio.
2. Abrir el administrador de extensiones en Chrome.
3. Habilitar Modo de Desarrollador (boton arriba a la derecha)
4. Click en "Cargar descomprimida"
5. Seleccionar la carpeta donde esten los archivos del paso 1.
6. Listo.



## Uso
La cosa es bien simple:
1. Entras a mercadolibre y haces una búsqueda.
2. Esperar a que los resultados de la búsqueda carguen.
3. Los artículos de tipo "Internacional" ya no estarán:

Puede pasar que tu búsqueda entregue únicamente elementos "Internacionales" así que el resultado será una página vacía. En ese caso, pasa a la página 2 y sigue buscando. Suerte!

![Ejemplo](https://raw.githubusercontent.com/ivanMSC/LibreMercadoPorFin/main/Ejemplo.png)



## [Cómprame un café](https://linktr.ee/ivanMSC)
