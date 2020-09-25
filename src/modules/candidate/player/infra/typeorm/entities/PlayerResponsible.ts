import {
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm';

@Entity('player_responsible')
export default class PlayerResponsible {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  player_id: number;
  @Column()
  responsible: number;

  @CreateDateColumn()
  created_at: Date;
  @UpdateDateColumn()
  updated_at: Date;
}
