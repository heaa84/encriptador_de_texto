# ENCRIPTADOR DE TEXTO.
`VERCION 1.2`

# Este proyecto es un reto de programacio de ALURA LATAM se trata de lo siguiente;

**explicacion del proyecto**

**Las "llaves" de encriptación que utilizaremos son las siguientes:**

```h
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
```

# Temas implementados del curso 

**Uso de de CSS**
**Uso de de JS**
**Uso de de HTML**

# Temas nuevos o no vistos aun en el curso:

## Funciones **FLECHAS**

Las funciones flecha son una sintaxis concisa para escribir expresiones de funciones en JavaScript. Fueron introducidas en ES6 y ofrecen una forma más sucinta de definir funciones en comparación con las expresiones de funciones tradicionales.

## Sintaxis
La sintaxis básica de una función flecha es:

```javascript
const nombreFuncion = (parámetro1, parámetro2, ...) => {
  // cuerpo de la función
};
```

## Ejemplos
1. **Función Flecha Simple**
```javascript
Copiar código
const sumar = (a, b) => {
  return a + b;
};

// Uso
console.log(sumar(2, 3)); // Salida: 5
```
2. ***Función Flecha con Retorno Implícito**
Si el cuerpo de la función tiene solo una expresión, puedes omitir las llaves y la palabra clave `return`. La expresión se retornará implícitamente.

```javascript
Copiar código
const multiplicar = (a, b) => a * b;

// Uso
console.log(multiplicar(2, 3)); // Salida: 6
```
3.**Función Flecha con un Solo Parámetro**
Cuando hay solo un parámetro, puedes omitir los paréntesis alrededor del parámetro.

```javascript
Copiar código
const cuadrado = x => x * x;

// Uso
console.log(cuadrado(4)); // Salida: 16
```
4. **Función Flecha sin Parámetros**
Si no hay parámetros, debes usar paréntesis vacíos.

```javascript
Copiar código
const saludar = () => '¡Hola, Mundo!';

// Uso
console.log(saludar()); // Salida: ¡Hola, Mundo!
```
## Diferencias con las Funciones Tradicionales
1. **Contexto `this`**: Las funciones flecha no tienen su propio contexto `this`. En cambio, heredan `this` del ámbito padre en el momento de su definición.

```javascript
Copiar código
function Persona() {
  this.edad = 0;

  setInterval(() => {
    this.edad++;
    console.log(this.edad);
  }, 1000);
}

const persona = new Persona();
// Esto imprimirá el valor de edad incrementado cada segundo porque `this` se refiere a la instancia de Persona.
```

2. **Sin Objeto `arguments`**: Las funciones flecha no tienen un objeto `arguments`. Si necesitas acceder a los argumentos pasados a una función flecha, utiliza la sintaxis de parámetros restantes (...args).

```javascript
Copiar código
const suma = (...args) => args.reduce((acc, val) => acc + val, 0);

// Uso
console.log(suma(1, 2, 3, 4)); // Salida: 10
```

## Conclusión
Las funciones flecha proporcionan una manera más concisa y ligada léxicamente de escribir funciones en JavaScript. Son especialmente útiles en situaciones donde necesitas preservar el contexto de `this` o escribir expresiones de funciones cortas.

## vercion v2.0 Cambio de colores cambio de nombre de variables  asignacion de elementos codigo JS mas limpio, cambio de app a main del archivo del codigo JS se agregaron algunos iconos y se trabajo en la parte responsiba