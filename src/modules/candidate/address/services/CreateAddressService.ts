import { injectable, inject } from 'tsyringe';
import AddressRepository from '../infra/typeorm/repositories/AddressRepository';
import Address from '../infra/typeorm/entities/Address';

interface IRequest {
  cep: number;
  address: string;
  number: number;
  district: string;
  complement: string;
  reference: string;
}

@injectable()
export default class CreateAddressService {
  constructor(
    @inject('AddressRepository')
    private addressRepository: AddressRepository,
  ) {}

  public async execute({
    address,
    cep,
    complement,
    district,
    number,
    reference,
  }: IRequest): Promise<Address> {
    const addressCreate = await this.addressRepository.create({
      address,
      cep,
      complement,
      district,
      number,
      reference,
    });

    return addressCreate;
  }
}
