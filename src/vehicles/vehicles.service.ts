import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import {Vehicle} from './vehicle.model';

@Injectable()
export class VehiclesService {
    private vehicle: Vehicle[] = [];

    constructor (@InjectModel('vehicle') private readonly vehicleModel: Model<Vehicle> ) {}
    
    async getVehicles() {
        const vehicles = await this.vehicleModel.find();
        return vehicles;
    }

    async updateVehicleMaintanance (id:string, maintenance:boolean) {
        let vehicle;
        try {
            vehicle = await this.vehicleModel.findById(id);
            vehicle.maintenance = maintenance;
            vehicle.save();
        } catch (error) {
            throw new InternalServerErrorException(error);
        }
    }

}