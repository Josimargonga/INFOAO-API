export class MunicipioModel {

  private constructor(
    public readonly id: number | null,
    public name: string,
    public readonly province_id: number,
  ) {}

  static create(name: string, province_id:number) {

    if (!name.trim()) {
      throw new Error('Nome obrigatório');
    }

    return new MunicipioModel(
      null,
      name,
      province_id,
    );
  }

  static update(name: string, province_id:number) {

    if (!name.trim()) {
      throw new Error("Nome obrigatório");
    }

    // validações...

    return new MunicipioModel(
      null,
      name,
      province_id,
    );
  }

  static restore(data: {
    id: number;
    name: string;
    province_id:number;
  }) {

    return new MunicipioModel(
      data.id,
      data.name,
      data.province_id,
    );
  }

}