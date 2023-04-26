import { Injectable } from '@nestjs/common';

@Injectable()
export class LenguageModelService {
  getHello(): string {
    return 'Hello World LM!';
  }
}
