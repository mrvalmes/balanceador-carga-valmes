import { Controller, Get } from '@nestjs/common';

@Controller('api')
export class AppController {
  @Get('load-test')
  loadTest(): string {
    // Simulación de carga con una pequeña operación
    let counter = 1;

    const interval = setInterval(() => {
      console.log(counter);
      counter++;

      if (counter > 100) {
        clearInterval(interval);
        console.log('Conteo finalizado.');
      }
    }, 1000); // 1000 ms = 1 segundo

    return `Conteo de segundos iniciado: ${counter}`;
  }
}