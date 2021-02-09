import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import {Vehicle} from './vehicle.model';

@Injectable()
export class VehiclesService {
    private vehicles: Vehicle[] = [];

    constructor (@InjectModel('Vehicle') private readonly vehicleModel: Model <Vehicle>) {}
    
    async getVehicles() {
        const vehicles = await this.vehicleModel.find().exec();
        return vehicles as Vehicle[];
    }

    updateVehicleMaintanance (id:string, maintenance:Boolean) {
        const vehicle = this.vehicles.find(veh => veh.id === id);
        const vehicleIndex = this.vehicles.findIndex(veh => veh.id === id);
        if (!vehicle) {
            throw new NotFoundException('No se encontró el vehículo');
        }
        this.vehicles[vehicleIndex].maintenance = maintenance;
    }

}