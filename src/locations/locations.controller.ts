import { Controller, Get } from '@nestjs/common';
import { LocationsService } from './locations.service';

@Controller('locations')
export class LocationsController {
  constructor(private service: LocationsService) {}

  @Get()
  getAll() {
    return this.service.findAll();
  }
}