import { Module } from '@nestjs/common';
import { NerobookController } from './nerobook.controller';
import { NerobookService } from './nerobook.service';
import { MongooseModule } from '@nestjs/mongoose';
import { NerobookSchema } from './schemas/nerobook.schema';

@Module({
  imports: [MongooseModule.forFeature ([{ name: 'Nerobook', schema: NerobookSchema }])],
  controllers: [NerobookController],
  providers: [NerobookService]
})
export class NerobookModule {}
