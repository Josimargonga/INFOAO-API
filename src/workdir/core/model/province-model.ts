export class ProvinceModel {

  private constructor(
    public readonly id: number | null,
    public nome: string,
  ) {}

  static create(nome: string) {

    if (!nome.trim()) {
      throw new Error('Nome obrigatório');
    }

    return new ProvinceModel(
      null,
      nome,
    );
  }

  static update(nome: string) {

    if (!nome.trim()) {
      throw new Error("Nome obrigatório");
    }

    // validações...

    return new ProvinceModel(
      null,
      nome,
    );
  }

  static restore(data: {
    id: number;
    nome: string;
  }) {

    return new ProvinceModel(
      data.id,
      data.nome,
    );
  }

}