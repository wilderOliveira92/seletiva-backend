import ICategoryRepository from '@modules/selective/categories/repositories/ICategoryRepository';
import Category from '../entities/Category';
import { Repository, getRepository } from 'typeorm';

interface ICreateCategoryData {
  name: string;
}

class CategoryRepository implements ICategoryRepository {
  private ormRepository: Repository<Category>;

  constructor() {
    this.ormRepository = getRepository(Category);
  }

  public async create({ name }: ICreateCategoryData): Promise<Category> {
    const category = this.ormRepository.create({ name });
    await this.ormRepository.save(category);

    return category;
  }

  public async findByName(name: string): Promise<Category | undefined> {
    const findCategory = await this.ormRepository.findOne({
      where: {
        name,
      },
    });

    console.log(findCategory);

    return findCategory;
  }
}

export default CategoryRepository;
