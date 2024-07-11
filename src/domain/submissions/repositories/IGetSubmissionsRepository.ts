import { Submission } from '../entities/submission.postgres.entity';

export interface IGetSubmissionsRepository {
  find(): Promise<Submission[]>;
}

export const IGetSubmissionsRepository = Symbol('IGetSubmissionsRepository');
