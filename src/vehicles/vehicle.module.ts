import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { VehicleController } from './vehicles.controller';
import { VehiclesService } from './vehicles.service';
import { VehicleSchema } from './vehicle.model';

@Module({
    imports:[
        MongooseModule.forFeature([{name:'Vehicle', schema: VehicleSchema}
    ])],
    controllers:[VehicleController],
    providers:[VehiclesService]
})

export class VehicleModule {}