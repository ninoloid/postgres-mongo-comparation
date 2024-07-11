import { CreateSubmissionDto } from 'src/application/submissions/dtos/CreateSubmissionDto';
import { SubmissionMongo } from '../entities/submission.mongo.entity';

export interface ICreateSubmissionMongoRepository {
  save(usersInput: CreateSubmissionDto): Promise<SubmissionMongo>;
}

export const ICreateSubmissionMongoRepository = Symbol(
  'ICreateSubmissionMongoRepository',
);
