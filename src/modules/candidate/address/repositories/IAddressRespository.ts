import Address from '../infra/typeorm/entities/Address';
import ICreateAddress from '../dtos/ICreateAddress';

export default interface IAddressRepository {
  save(address: Address): Promise<Address>;
  create(data: ICreateAddress): Promise<Address>;
  update(id: number, data: ICreateAddress): Promise<Address | undefined>;
  findById(id: number): Promise<Address | undefined>;
  listAll(): Promise<Address[]>;
}
