# s14arrayMethods
Metodos de Array con Java Script

Array

El objeto Array de JavaScript es un objeto global que es usado en la construcción de arrays, que son objetos tipo lista de alto nivel.

Descripción

Los arrays son objetos similares a una lista cuyo prototipo proporciona métodos para efectuar operaciones de recorrido y de mutación. Tanto la longitud como el tipo de los elementos de un array son variables. Dado que la longitud de un array puede cambiar en cualquier momento, y los datos se pueden almacenar en ubicaciones no contiguas, no hay garantía de que los arrays de JavaScript sean densos; esto depende de cómo el programador elija usarlos. En general estas características son cómodas, pero si, en su caso particular, no resultan deseables, puede considerar el uso de arrays con tipo.

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array

Metodos de Array

map() : Permite recorrer el array y modificar los elementos presentes en él, retornando un nuevo array con la misma longitud que el original.map
filter() : Recorre el array y retorna un nuevo array con aquellos elementos que pasen una determinada condición.filter
forEach() : Permite iterar el contenido de un array. Recibe un callback que toma como parámetro el elemento actual de la iteración y el indice del mismo.forEach
find() : Recorre el array y retorna la primera coincidencia del elemento que se busca.find
sort() : Ordena los elementos del array y retorna el arreglo ordenado. Los elementos se ordenarán en orden ascendente (de la A a la Z) por defecto.sort
some() : Itera el array y retorna un booleano si como mínimo uno de los elementos presentes en el array pasa una condición determinada. Recibe un callback que se encargara de preguntar aquello que queremos dentro del array.some
every() : Es similar al some(), ya que itera el array y retorna un booleano. Pero esta vez, para que dicho booleano sea true todos los elementos del array deberán pasar la condición dada.every
concat() : Se utiliza para unir dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array.concat
includes() : Determina si un array incluye un determinado elemento y retorna un booleano según corresponda.includes
join() : Une todos los elementos de un array en una cadena. Podemos pasarle como parámetro el carácter de separación que debe agregar entre los elementos.join
reduce() : Aplica una función a un acumulador y a cada valor de una array (de izquierda a derecha) para reducirlo a un único valor.reduce
indexOf() : Retorna el primer índice en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no esta presente.indexOf
findIndex() : Retorna el índice del primer elemento de un array que cumpla con la función de prueba proporcionada. En caso contrario devuelve -1.findIndex
fill() : Cambia todos los elementos de un array por un valor estático, desde el índice de inicio hasta el índice final. Retorna el array modificado.fill
push() : Añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
pop() : Elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array.
shift() : Elimina el primer elemento del array y lo retorna. Este método modifica la longitud del array.
unshift() : Agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array.
slice() : Devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará.
reverse() : Invierte el orden de los elementos de un array. El primer elemento pasa a ser el último y el último pasa a ser el primero.
splice() : Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
lastIndexOf() : Busca un elemento en un array y devuelve su posición. Comienza buscando por el final del array. Retorna -1 si el elemento no se encontrara.
flat() : Crea una nuevo array con todos los elementos de sub-array concatenados recursivamente hasta la profundidad especificada.
isArray() : Determina si el valor pasado es un Array.
from() : Crea una nueva instancia de Array a partir de un objeto iterable.

https://dev.to/gdcodev/25-metodos-de-arrays-en-javascript-que-todo-desarrollador-debe-conocer-4a2d
