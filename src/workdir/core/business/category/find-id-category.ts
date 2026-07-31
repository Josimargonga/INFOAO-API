import { CreateCategoryDto } from "src/workdir/infra/http/category/dto/create-category.dto";
import { CategoryRepository } from "../../repository/category-repository";

export class FindByIdCategoryUseCase{

    constructor(
        private readonly reposotory: CategoryRepository
    ){}

    async execute(id: number){
        try { 
            return await this.reposotory.findById(id);
        } catch (error) {
            
        }
    }
}