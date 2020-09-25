import ResponsibleRepository from '../infra/typeorm/repositories/ResponsibleRepository';
import Responsible from '../infra/typeorm/entities/Responsible';
import { injectable, inject } from 'tsyringe';

interface IRequest {
  name: string;
  relationship: string;
  phone: number;
  email: string;
  cpf: number;
  rg: number;
}

@injectable()
export default class CreateResponsibleService {
  constructor(
    @inject('ResponsibleRepository')
    private responsibleRepository: ResponsibleRepository,
  ) {}

  public async execute({
    name,
    relationship,
    phone,
    email,
    cpf,
    rg,
  }: IRequest): Promise<Responsible> {
    const responsible = await this.responsibleRepository.create({
      name,
      relationship,
      phone,
      email,
      cpf,
      rg,
    });

    return responsible;
  }
}
