import { Repository, getRepository } from 'typeorm';
import IAddressRepository from '@modules/candidate/address/repositories/IAddressRespository';
import Address from '../entities/Address';
import ICreateAddress from '@modules/candidate/address/dtos/ICreateAddress';

class AddressRepository implements IAddressRepository {
  private ormRepository: Repository<Address>;

  constructor() {
    this.ormRepository = getRepository(Address);
  }

  public async create(data: ICreateAddress): Promise<Address> {
    const responsible = this.ormRepository.create(data);
    await this.ormRepository.save(responsible);

    return responsible;
  }

  public async update(
    id: number,
    data: ICreateAddress,
  ): Promise<Address | undefined> {
    await this.ormRepository.update(id, data);
    const responsible = await this.ormRepository.findOne(id);
    return responsible;
  }

  public async findById(id: number): Promise<Address | undefined> {
    const findResponsible = await this.ormRepository.findOne(id);

    return findResponsible;
  }

  public async save(responsible: Address): Promise<Address> {
    return this.ormRepository.save(responsible);
  }

  public async listAll(): Promise<Address[]> {
    const address = await this.ormRepository.find();

    return address;
  }
}

export default AddressRepository;
