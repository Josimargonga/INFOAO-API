
import { ProvinceRepository } from "src/workdir/core/repository/province-repository";
import { DatabaseService } from "../database.service";
import { ProvinceModel } from "src/workdir/core/model/province-model";

export  class ProvincePersistence implements  ProvinceRepository{

    constructor(private readonly prisma: DatabaseService){}
    
    async create(category: ProvinceModel): Promise<void> {
        try {
            await this.prisma.provincia.create({
                data: {
                    nome: category.nome,
                }
            })
        } catch (error) {
            throw new Error("Erro ao criar provincia");
        }
        
    }

    async findById(id: number): Promise<ProvinceModel | null> {
        try{
            const province = await this.prisma.provincia.findFirst({
                where:{
                    id:+id
                }
            });
            if (!province) {
                return null;
            }
            return ProvinceModel.restore(province);
        }catch(error){
            throw new Error("Method not implemented.");
        }
    }

    async findByProvinceWithMunicipio(id: number): Promise<any | null> {
        try{
            return await this.prisma.provincia.findFirst({
                where:{
                    id:+id
                },
                include:{
                    municipios: true,
                }
            });
            
        }catch(error){
            throw new Error("Method not implemented.");
        }
    }

    async findAll(): Promise<ProvinceModel[]> {
        try{
            const province = await this.prisma.provincia.findMany();

            return province.map(item => ProvinceModel.restore(item));
        }catch(error){
            throw new Error("Method not implemented.");
        }
        
    }

    update(category: ProvinceModel): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async delete(id: number): Promise<void> {
        try{
            await this.prisma.provincia.delete({where:{
                id:+id
            }});
        }catch(error){
            throw new Error("Method not implemented.");
        }
    }

  

}