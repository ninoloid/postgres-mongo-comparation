import { CreateSubmissionDto } from 'src/application/submissions/dtos/CreateSubmissionDto';
import { Submission } from '../entities/submission.postgres.entity';

export interface ICreateSubmissionRepository {
  save(usersInput: CreateSubmissionDto): Promise<Submission>;
}

export const ICreateSubmissionRepository = Symbol(
  'ICreateSubmissionRepository',
);
