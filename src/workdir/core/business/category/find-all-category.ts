import { CreateCategoryDto } from "src/workdir/infra/http/category/dto/create-category.dto";
import { CategoryRepository } from "../../repository/category-repository";

export class FindAllCategoryUseCase{

    constructor(
        private readonly reposotory: CategoryRepository
    ){}

    async execute(dto: CreateCategoryDto){
        try { 
            return await this.reposotory.findAll();
        } catch (error) {
            
        }
    }
}