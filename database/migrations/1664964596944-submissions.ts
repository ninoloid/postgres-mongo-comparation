import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createTableSubmissions1675754500775 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'Submissions',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'studyId',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'participantEmail',
            type: 'varchar',
            length: '255',
            isNullable: false,
          },
          {
            name: 'startedAt',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'status',
            type: 'enum',
            enum: [
              'JAWABAN BARU',
              'BUTUH REVIEW',
              'DISETUJUI',
              'DITOLAK',
              'DITOLAK DARI QC',
            ],
            isNullable: false,
          },
          {
            name: 'answer',
            type: 'json',
            isNullable: false,
          },
          {
            name: 'remarks',
            type: 'text',
            isNullable: true,
          },
          {
            name: 'deletedAt',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'finishedAt',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'createdBy',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'updatedAt',
            type: 'timestamp',
            default: 'now()',
            onUpdate: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'updatedBy',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'isFreemium',
            type: 'boolean',
            isNullable: false,
            default: false,
          },
          {
            name: 'respondentId',
            type: 'int',
            isNullable: true,
            default: null,
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Submissions');
  }
}
