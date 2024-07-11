import { SubmissionMongo } from '../entities/submission.mongo.entity';

export interface IGetSubmissionsMongoService {
  findAll(): Promise<SubmissionMongo[]>;
}

export const IGetSubmissionsMongoService = Symbol(
  'IGetSubmissionsMongoService',
);
