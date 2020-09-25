import { Repository, getRepository } from 'typeorm';
import Player from '../entities/Player';
import ICreatePlayer from '@modules/candidate/player/dtos/ICreatePlayer';
import IPlayerResponsibleRepository from '@modules/candidate/player/repositories/IPlayerResponsibleRepository';

class PlayerResponsibleRepository implements IPlayerResponsibleRepository {
  private ormRepository: Repository<Player>;

  constructor() {
    this.ormRepository = getRepository(Player);
  }

  public async create(data: ICreatePlayer): Promise<Player> {
    const player = this.ormRepository.create(data);
    await this.ormRepository.save(player);

    return player;
  }

  public async update(
    id: number,
    data: ICreatePlayer,
  ): Promise<Player | undefined> {
    await this.ormRepository.update(id, data);
    const findPlayer = await this.ormRepository.findOne(id);

    return findPlayer;
  }

  public async save(player: Player): Promise<Player> {
    return await this.ormRepository.save(player);
  }

  public async findById(id: number): Promise<Player | undefined> {
    const findPlayer = await this.ormRepository.findOne(id);

    return findPlayer;
  }

  public async listAll(): Promise<Player[]> {
    const players = await this.ormRepository.find();

    return players;
  }
}

export default PlayerResponsibleRepository;
