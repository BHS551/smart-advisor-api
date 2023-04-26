import { Module } from '@nestjs/common';
import { LenguageModelController } from './lenguage-model.controller';
import { LenguageModelService } from './lenguage-model.service';

@Module({
  imports: [],
  controllers: [LenguageModelController],
  providers: [LenguageModelService],
})
export class LenguageModelModule {}
