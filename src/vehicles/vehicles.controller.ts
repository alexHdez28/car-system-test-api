import { Controller, Get, Param, Patch, Body } from '@nestjs/common';
import { VehiclesService } from './vehicles.service';


@Controller('vehicle')
export class VehicleController {
    constructor (private vehiclesService: VehiclesService) {}

    @Get()
    getAllVehicles(){
        return this.vehiclesService.getVehicles();
    }

    @Patch(':id')
    async updateproduct(
        @Param('id') id: string,
        @Body('maintenance') maintenance: boolean
    ) {
        await this.vehiclesService.updateVehicleMaintanance(id, maintenance);
        return null;
    }


}