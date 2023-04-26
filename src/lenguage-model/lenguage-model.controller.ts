import { Controller, Get } from '@nestjs/common';
import { LenguageModelService } from './lenguage-model.service';

@Controller('lenguage-model')
export class LenguageModelController {
  constructor(private readonly lenguageModelService: LenguageModelService) {}

  @Get()
  getHello(): string {
    return this.lenguageModelService.getHello();
  }
}
