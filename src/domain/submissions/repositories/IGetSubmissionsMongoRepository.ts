import { SubmissionMongo } from '../entities/submission.mongo.entity';

export interface IGetSubmissionsMongoRepository {
  find(): Promise<SubmissionMongo[]>;
}

export const IGetSubmissionsMongoRepository = Symbol(
  'IGetSubmissionsMongoRepository',
);
