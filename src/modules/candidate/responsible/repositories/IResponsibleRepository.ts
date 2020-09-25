import Responsible from '../infra/typeorm/entities/Responsible';
import ICreateResponsible from '../dtos/ICreateResponsible';

export default interface IResponsibleRepository {
  save(responsible: Responsible): Promise<Responsible>;
  create(data: ICreateResponsible): Promise<Responsible>;
  update(
    id: number,
    data: ICreateResponsible,
  ): Promise<Responsible | undefined>;
  findById(id: number): Promise<Responsible | undefined>;
  listAll(): Promise<Responsible[]>;
}
