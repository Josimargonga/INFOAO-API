export class CategoryModel {

  private constructor(
    public readonly id: number | null,
    public nome: string,
    public slug: string,
  ) {}

  static create(nome: string, slug: string) {

    if (!nome.trim()) {
      throw new Error('Nome obrigatório');
    }

    return new CategoryModel(
      null,
      nome,
      slug,
    );
  }

  static update(nome: string, slug: string) {

    if (!nome.trim()) {
      throw new Error("Nome obrigatório");
    }

    // validações...

    return new CategoryModel(
      null,
      nome,
      slug,
    );
  }

  static restore(data: {
    id: number;
    nome: string;
    slug: string;
  }) {

    return new CategoryModel(
      data.id,
      data.nome,
      data.slug,
    );
  }

}