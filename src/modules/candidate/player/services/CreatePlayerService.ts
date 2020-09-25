import PlayerRepository from '../infra/typeorm/repositories/PlayerRepository';
import { injectable, inject } from 'tsyringe';
import Player from '../infra/typeorm/entities/Player';
import AddressRepository from '@modules/candidate/address/infra/typeorm/repositories/AddressRepository';
import AppError from '@shared/errors/appError';

interface IRequest {
  name: string;
  date: Date;
  phone: number;
  email: string;
  position_primary: string;
  position_secondary: string;
  team: string;
  player_reference: string;
  project: string;
  category: string;
  address_id: number;
}

@injectable()
export default class CreatePlayerService {
  constructor(
    @inject('PlayerRepository')
    private playerRepository: PlayerRepository,
    @inject('AddressRepository')
    private addressRepository: AddressRepository,
  ) {}

  public async execute(data: IRequest): Promise<Player> {
    const findAddress = await this.addressRepository.findById(data.address_id);

    if (!findAddress) {
      throw new AppError('Address not found.');
    }

    const player = await this.playerRepository.create(data);

    return player;
  }
}
