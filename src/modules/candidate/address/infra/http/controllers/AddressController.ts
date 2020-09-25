import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateAddressService from '@modules/candidate/address/services/CreateAddressService';
import UpdateAddressService from '@modules/candidate/address/services/UpdateAddressService';
import AddressRepository from '../../typeorm/repositories/AddressRepository';

export default class AddressController {
  public async index(request: Request, response: Response) {
    const addressRepository = new AddressRepository();

    const players = await addressRepository.listAll();

    return response.json(players);
  }

  public async create(request: Request, response: Response) {
    const {
      cep,
      address,
      number,
      district,
      complement,
      reference,
    } = request.body;

    const createAddress = container.resolve(CreateAddressService);

    const addressCreate = await createAddress.execute({
      cep,
      address,
      number,
      district,
      complement,
      reference,
    });
    return response.json(addressCreate);
  }

  public async update(request: Request, response: Response) {
    const {
      id,
      cep,
      address,
      number,
      district,
      complement,
      reference,
    } = request.body;

    const updateAddress = container.resolve(UpdateAddressService);

    const addressUpdate = await updateAddress.execute(id, {
      cep,
      address,
      number,
      district,
      complement,
      reference,
    });
    return response.json(addressUpdate);
  }
}
