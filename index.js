// Importamos la librería chalk
import chalk from 'chalk';

// Mensajes iniciales
console.log(chalk.blue('👋 ¡Bienvenido a la Terminal Parlante!'));
console.info(chalk.red('ℹ️ Esta terminal está viva... y tiene estilo.'));
console.warn(chalk.yellow('⚠️ Atención: Esto puede ponerse colorido.'));
console.error(chalk.red('❌ Error simulado: algo salió demasiado bien.'));
console.log(chalk.magenta('💡 Recuerda: la práctica hace al programador.'));

// BONUS: función básica
function saludar(nombre) {
  console.log(chalk.cyan(`Hola ${nombre}, ¡bienvenido al mundo JavaScript! 🌍`));
}

//funcion que muestra mensaje
function mensaje(){
    console.log(chalk.yellow('Hola, estoy aprendiendo'));
}

// Prueba de función
saludar('Equipo capa8');
mensaje();
console.log('\n');
// Funcion que muestra estado.

function mostrarEstado(nombre) {

console.log('\n'); // Agrega espacios.
// inicio del programa.

console.log(chalk.yellow('🚀 Iniciando el programa...'));

console.log('\n');
//  proceso en ejecución.

console.info(chalk.blue('⏩ Proceso en ejecución...'));

console.log('\n');
// finalización exitosa.

console.log(chalk.green('😁 Proceso finalizado correctamente 😎'));

}

function simularError(){
    console.warn(chalk.yellow('⚠️ Advertencia: Algo no va bien...'));
}

// Prueba de función
saludar("Equipo JS");
mostrarEstado();
simularError();


