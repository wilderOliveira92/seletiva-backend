import ResponsibleRepository from '../infra/typeorm/repositories/ResponsibleRepository';
import Responsible from '../infra/typeorm/entities/Responsible';
import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/appError';

interface IRequest {
  name: string;
  relationship: string;
  phone: number;
  email: string;
  cpf: number;
  rg: number;
}

@injectable()
export default class UpdateResponsibleService {
  constructor(
    @inject('ResponsibleRepository')
    private responsibleRepository: ResponsibleRepository,
  ) {}

  public async execute(
    id: number,
    { name, relationship, phone, email, cpf, rg }: IRequest,
  ): Promise<Responsible> {
    const findResponsible = await this.responsibleRepository.findById(id);

    if (!findResponsible) {
      throw new AppError('Responsible not exists.');
    }

    Object.assign(findResponsible, {
      name,
      relationship,
      phone,
      email,
      cpf,
      rg,
    });

    return this.responsibleRepository.save(findResponsible);
  }
}
