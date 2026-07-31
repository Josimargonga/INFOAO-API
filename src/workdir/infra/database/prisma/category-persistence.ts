import { CategoryModel } from "src/workdir/core/model/category-model";
import { CategoryRepository } from "src/workdir/core/repository/category-repository";
import { DatabaseService } from "../database.service";

export  class CategoryPersistence implements  CategoryRepository{

    constructor(private readonly prisma: DatabaseService){}
    
    async create(category: CategoryModel): Promise<void> {
        try {
            await this.prisma.categoria.create({
                data: {
                    nome: category.nome,
                    slug: category.slug
                }
            })
        } catch (error) {
            throw new Error("Erro ao criar categoria");
        }
        
    }

    async findById(id: number): Promise<CategoryModel | null> {
        try{
            const category = await this.prisma.categoria.findFirst({
                where:{
                    id:+id
                }
            });
            if (!category) {
                return null;
            }
            return CategoryModel.restore(category);
        }catch(error){
            throw new Error("Method not implemented.");
        }
    }

    async findAll(): Promise<CategoryModel[]> {
        try{
            const category = await this.prisma.categoria.findMany();

            return category.map(item => CategoryModel.restore(item));
        }catch(error){
            throw new Error("Method not implemented.");
        }
        
    }

    update(category: CategoryModel): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async delete(id: number): Promise<void> {
        try{
            await this.prisma.categoria.delete({where:{
                id:+id
            }});
        }catch(error){
            throw new Error("Method not implemented.");
        }
    }

  

}