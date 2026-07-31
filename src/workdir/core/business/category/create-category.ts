import { CreateCategoryDto } from "src/workdir/infra/http/category/dto/create-category.dto";
import { CategoryRepository } from "../../repository/category-repository";
import { CategoryModel } from "../../model/category-model";

export class CreateCategoryUseCase{

    constructor(
        private readonly reposotory: CategoryRepository
    ){}

    async execute(dto: CreateCategoryDto){
        try {

            const domain = CategoryModel.create(dto.nome, dto.slug);
            await this.reposotory.create(domain);
        } catch (error) {
            
        }
    }
}