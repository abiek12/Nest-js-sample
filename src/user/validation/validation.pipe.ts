import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { ZodSchema } from 'zod';

@Injectable()
export class UserPipe implements PipeTransform {
  constructor(private schema: ZodSchema) {}
  transform(value: any, metadata: ArgumentMetadata) {
    try {
      const parsedValue = this.schema.parse(value);
      return parsedValue;
    } catch (error) {
      console.error(error);
      throw new BadRequestException('User Validation Failed!');
    }
  }
}
