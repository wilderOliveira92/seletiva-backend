import { injectable, inject } from 'tsyringe';
import PlayerRepository from '../infra/typeorm/repositories/PlayerRepository';
import Player from '../infra/typeorm/entities/Player';
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
export default class UpdatePlayerService {
  constructor(
    @inject(PlayerRepository)
    private playerRepository: PlayerRepository,
  ) {}

  public async execute(id: number, data: IRequest): Promise<Player> {
    const findPlayer = await this.playerRepository.findById(id);

    if (!findPlayer) {
      throw new AppError('Player not found.');
    }

    Object.assign(findPlayer, data);

    return await this.playerRepository.save(findPlayer);
  }
}
