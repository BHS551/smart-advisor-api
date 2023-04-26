import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LenguageModelModule } from './lenguage-model/lenguage-model.module';

@Module({
  imports: [ LenguageModelModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
