import Player from '../infra/typeorm/entities/Player';
import ICreatePlayer from '../dtos/ICreatePlayer';

export default interface IPlayerRepository {
  save(player: Player): Promise<Player>;
  create(data: ICreatePlayer): Promise<Player>;
  update(id: number, data: ICreatePlayer): Promise<Player | undefined>;
  findById(id: number): Promise<Player | undefined>;
  listAll(): Promise<Player[]>;
}
