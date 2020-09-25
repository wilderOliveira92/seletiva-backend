import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateResponsible1597834788742 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'responsible',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'relationship',
            type: 'varchar',
          },
          {
            name: 'phone',
            type: 'numeric',
          },
          {
            name: 'email',
            type: 'varchar',
          },
          {
            name: 'cpf',
            type: 'numeric',
          },
          {
            name: 'rg',
            type: 'numeric',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
