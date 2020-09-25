import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateResponsibleService from '@modules/candidate/responsible/services/CreateResponsibleService';
import UpdateResponsibleService from '@modules/candidate/responsible/services/UpdateResponsibleService';
import ResponsibleRepository from '../../typeorm/repositories/ResponsibleRepository';

export default class ResponsibleController {
  public async index(request: Request, response: Response) {
    const responsibleRepository = new ResponsibleRepository();

    const players = await responsibleRepository.listAll();

    return response.json(players);
  }

  public async create(request: Request, response: Response) {
    const { name, relationship, phone, email, cpf, rg } = request.body;

    const responsibleService = container.resolve(CreateResponsibleService);

    const responsible = await responsibleService.execute({
      name,
      relationship,
      phone,
      email,
      cpf,
      rg,
    });
    return response.json(responsible);
  }

  public async update(request: Request, response: Response) {
    const { id, name, relationship, phone, email, cpf, rg } = request.body;

    const updateResponsible = container.resolve(UpdateResponsibleService);

    const responsible = await updateResponsible.execute(id, {
      name,
      relationship,
      phone,
      email,
      cpf,
      rg,
    });

    return response.json(responsible);
  }
}
