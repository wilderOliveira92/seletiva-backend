import { Response, Request } from 'express';
import { container } from 'tsyringe';
import CreatePlayerService from '@modules/candidate/player/services/CreatePlayerService';
import PlayerRepository from '../../typeorm/repositories/PlayerRepository';
import UpdatePlayerService from '@modules/candidate/player/services/UpdatePlayerService';

export default class PlayerController {
  public async index(request: Request, response: Response) {
    const playerRepository = new PlayerRepository();

    const players = await playerRepository.listAll();

    return response.json(players);
  }

  public async create(request: Request, response: Response) {
    const {
      name,
      date,
      phone,
      email,
      position_primary,
      position_secondary,
      team,
      player_reference,
      project,
      category,
      address_id,
    } = request.body;

    const createPlayer = container.resolve(CreatePlayerService);

    const player = await createPlayer.execute({
      name,
      date,
      phone,
      email,
      position_primary,
      position_secondary,
      team,
      player_reference,
      project,
      category,
      address_id,
    });

    return response.json(player);
  }

  public async update(request: Request, response: Response) {
    const {
      id,
      name,
      date,
      phone,
      email,
      position_primary,
      position_secondary,
      team,
      player_reference,
      project,
      category,
      address_id,
    } = request.body;

    const updatePlayer = container.resolve(UpdatePlayerService);

    const player = await updatePlayer.execute(id, {
      name,
      date,
      phone,
      email,
      position_primary,
      position_secondary,
      team,
      player_reference,
      project,
      category,
      address_id,
    });

    return response.json(player);
  }
}
