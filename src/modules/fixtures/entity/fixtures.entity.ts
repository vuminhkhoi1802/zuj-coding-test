import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Fixtures {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'longtext', nullable: true })
  raw_json_data: string;

  @Column({ type: 'longtext' })
  url: string;

  @Column({ type: 'varchar', nullable: true })
  fixture_date: string;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
