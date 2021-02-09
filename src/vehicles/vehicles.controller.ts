import { Controller, Get, Param, Patch } from '@nestjs/common';
import { VehiclesService } from './vehicles.service';


@Controller('vehicles')
export class VehicleController {
    constructor (private vehiclesService: VehiclesService) {}

    @Get()
    async getVehicles(){
        const vehicles = await this.vehiclesService.getVehicles();
        return vehicles;
    }

    @Patch(':id')
    updateproduct(
        @Param('id') id: string,
        @Param('maintenance') maintenance: Boolean
    ) {
        this.vehiclesService.updateVehicleMaintanance(id, maintenance);
        return null;
    }


}