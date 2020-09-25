import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/appError';
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
export default class UpdateAddressService {
  constructor(
    @inject('AddressRepository')
    private addressRepository: AddressRepository,
  ) {}

  public async execute(
    id: number,
    { address, cep, complement, district, number, reference }: IRequest,
  ): Promise<Address> {
    const findAddress = await this.addressRepository.findById(id);

    if (!findAddress) {
      throw new AppError('Responsible not exists.');
    }

    Object.assign(findAddress, {
      address,
      cep,
      complement,
      district,
      number,
      reference,
    });

    return await this.addressRepository.save(findAddress);
  }
}
