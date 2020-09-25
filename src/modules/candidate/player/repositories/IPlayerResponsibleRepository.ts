import Player from '../infra/typeorm/entities/Player';
import ICreatePlayer from '../dtos/ICreatePlayer';

export default interface IPlayerResponsibleRepository {
  save(player: Player): Promise<Player>;
  create(data: ICreatePlayer): Promise<Player>;
  findById(id: number): Promise<Player | undefined>;
  listAll(): Promise<Player[]>;
}
