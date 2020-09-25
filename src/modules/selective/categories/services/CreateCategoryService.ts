import ICategoryRepository from '../repositories/ICategoryRepository';
import AppError from '@shared/errors/appError';
import { injectable, inject } from 'tsyringe';

interface IRequest {
  name: string;
}

@injectable()
class CreateCategoryService {
  constructor(
    @inject('CategoryRepository')
    private categoryRepository: ICategoryRepository,
  ) {}

  public async execute({ name }: IRequest) {
    const findCategory = await this.categoryRepository.findByName(name);

    if (findCategory) {
      throw new AppError('Category already exists.');
    }

    const category = await this.categoryRepository.create({ name });

    return category;
  }
}

export default CreateCategoryService;
