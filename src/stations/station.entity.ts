import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Station {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  kioskId: string;

  @Column()
  bikesAvailable: number;

  @Column()
  docksAvailable: number;

  @Column()
  totalDocks: number;

  @Column({ type: 'timestamp' })
  timestamp: string;
}