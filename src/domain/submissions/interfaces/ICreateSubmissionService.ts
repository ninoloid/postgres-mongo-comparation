import { CreateSubmissionDto } from '../../../application/submissions/dtos/CreateSubmissionDto';
import { SubmissionMongo } from '../entities/submission.mongo.entity';
import { Submission } from '../entities/submission.postgres.entity';

export interface ICreateSubmissionService {
  create(
    usersInput: CreateSubmissionDto,
    type?: 'mongo' | 'postgres',
  ): Promise<Submission | SubmissionMongo>;
  insertIntoPostgres(usersInput: CreateSubmissionDto): Promise<Submission>;
  insertIntoMongo(usersInput: CreateSubmissionDto): Promise<SubmissionMongo>;
  bulkInsert(
    userInput: CreateSubmissionDto,
    type?: 'mongo' | 'postgres',
  ): Promise<any>;
}

export const ICreateSubmissionService = Symbol('ICreateSubmissionService');
