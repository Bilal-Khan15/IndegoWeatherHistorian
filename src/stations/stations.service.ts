import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Station } from './station.entity';

@Injectable()
export class StationsService {
  constructor(
    @InjectRepository(Station)
    private readonly stationRepository: Repository<Station>,
  ) {}

  async fetchAndStoreIndegoData() {
    // implement fetching data from the Indego API and storing it in the database
  }

  async getStationsDataAtTime(timestamp: string) {
    // implement fetching stations data from the database at the given timestamp
  }

  async getStationDataAtTime(kioskId: string, timestamp: string) {
    // implement fetching specific station data from the database at the given timestamp
  }
}