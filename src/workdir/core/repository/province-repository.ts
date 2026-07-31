import { ProvinceModel } from "../model/province-model";


export abstract class ProvinceRepository {

  abstract create(category: ProvinceModel): Promise<void>;
  abstract findById(id: number): Promise<ProvinceModel | null>;
  abstract findByProvinceWithMunicipio(id: number): Promise<any | null>;
  abstract findAll(): Promise<ProvinceModel[]>;
  abstract update(category: ProvinceModel): Promise<void>;
  abstract delete(id: number): Promise<void>;

}