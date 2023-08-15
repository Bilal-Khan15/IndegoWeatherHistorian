import { Controller, Get, Param, Query } from '@nestjs/common';
import { StationsService } from './stations.service';

@Controller('api/v1/stations')
export class StationsController {
  constructor(private readonly stationsService: StationsService) {}

  @Get()
  async getAllStationsData(@Query('at') timestamp: string) {
    // implement fetching and returning all stations data at the given timestamp
  }

  @Get(':kioskId')
  async getStationData(
    @Param('kioskId') kioskId: string,
    @Query('at') timestamp: string,
  ) {
    // implement fetching and returning data for the specific station at the given timestamp
  }
}