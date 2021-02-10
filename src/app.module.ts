import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VehicleModule} from './vehicles/vehicle.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    VehicleModule, 
    MongooseModule.forRoot(
    'mongodb+srv://car-api:tCkcLaV8sqa6dNr7@cluster0.v4avq.mongodb.net/car-system-db?retryWrites=true&w=majority'
    ),
    ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
