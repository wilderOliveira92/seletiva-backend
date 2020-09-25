import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('address')
class Address {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  cep: number;
  @Column()
  address: string;
  @Column()
  number: number;
  @Column()
  district: string;
  @Column()
  complement: string;
  @Column()
  reference: string;
  @CreateDateColumn()
  created_at: Date;
  @UpdateDateColumn()
  updated_at: Date;
}

export default Address;
