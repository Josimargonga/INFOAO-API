import { CategoryModel } from "../model/category-model";


export abstract class CategoryRepository {

  abstract create(category: CategoryModel): Promise<void>;
  abstract findById(id: number): Promise<CategoryModel | null>;
  abstract findAll(): Promise<CategoryModel[]>;
  abstract update(category: CategoryModel): Promise<void>;
  abstract delete(id: number): Promise<void>;

}