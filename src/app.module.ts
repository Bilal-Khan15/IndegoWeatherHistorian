import { Module } from '@nestjs/common';
import { StationsModule } from './stations/stations.module';
import { WeatherModule } from './weather/weather.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Station } from './stations/station.entity';
import { WeatherData } from './weather/weather.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      // configure your PostgreSQL connection details here
      // using process.env.DATABASE_URL or hardcode it
    }),
    StationsModule,
    WeatherModule,
  ],
})
export class AppModule {}