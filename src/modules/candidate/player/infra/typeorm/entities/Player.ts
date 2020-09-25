import {
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import Address from '@modules/candidate/address/infra/typeorm/entities/Address';

@Entity('player')
class Player {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  name: string;
  @Column()
  date: Date;
  @Column()
  phone: number;
  @Column()
  email: string;
  @Column()
  position_primary: string;
  @Column()
  position_secondary: string;
  @Column()
  team: string;
  @Column()
  player_reference: string;
  @Column()
  project: string;
  @Column()
  category: string;

  @Column()
  address_id: number;
  @OneToOne(() => Address)
  @JoinColumn({ name: 'address_id' })
  address: Address;

  @CreateDateColumn()
  created_at: Date;
  @UpdateDateColumn()
  updated_at: Date;
}

export default Player;
