import IResponsibleRepository from '@modules/candidate/responsible/repositories/IResponsibleRepository';
import { Repository, getRepository } from 'typeorm';
import Responsible from '../entities/Responsible';
import ICreateResponsible from '@modules/candidate/responsible/dtos/ICreateResponsible';

class ResponsibleRepository implements IResponsibleRepository {
  private ormRepository: Repository<Responsible>;

  constructor() {
    this.ormRepository = getRepository(Responsible);
  }

  public async create(data: ICreateResponsible): Promise<Responsible> {
    const responsible = this.ormRepository.create(data);
    await this.ormRepository.save(responsible);

    return responsible;
  }

  public async update(
    id: number,
    data: ICreateResponsible,
  ): Promise<Responsible | undefined> {
    await this.ormRepository.update(id, data);
    const responsible = await this.ormRepository.findOne(id);
    return responsible;
  }

  public async findById(id: number): Promise<Responsible | undefined> {
    const findResponsible = await this.ormRepository.findOne(id);
    return findResponsible;
  }

  public async save(responsible: Responsible): Promise<Responsible> {
    return this.ormRepository.save(responsible);
  }

  public async listAll(): Promise<Responsible[]> {
    const responsibles = await this.ormRepository.find();

    return responsibles;
  }
}

export default ResponsibleRepository;
