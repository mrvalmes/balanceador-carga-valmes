import { Controller, Get } from '@nestjs/common';

@Controller('api')
export class AppController {
  @Get('load-test')
  loadTest(): string {
    // Simulación de carga con una operación
    let sum = 0;
    for (let i = 0; i < 10000; i++) {
      sum += i * 3 / 500;
    }
    return `Resultado Es: ${sum} 🔥`;
  }
}