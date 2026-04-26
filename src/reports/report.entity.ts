import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('reports')
export class Report {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  location_id: number;

  @Column()
  user_id: number;

  @Column()
  status: string;

  @Column({ nullable: true })
  comment: string;
}