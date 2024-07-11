import { Inject, Injectable } from '@nestjs/common';
import { IGetSubmissionsMongoService } from '../../domain/submissions/interfaces/IGetSubmissionsMongoService';
import { IGetSubmissionsMongoRepository } from '../../domain/submissions/repositories/IGetSubmissionsMongoRepository';
import { SubmissionMongo } from '../../domain/submissions/entities/submission.mongo.entity';

@Injectable()
export class GetSubmissionsMongoService implements IGetSubmissionsMongoService {
  constructor(
    @Inject(IGetSubmissionsMongoRepository)
    private readonly getSubmissionMongoRepository: IGetSubmissionsMongoRepository,
  ) {}

  async findAll(): Promise<SubmissionMongo[]> {
    return await this.getSubmissionMongoRepository.find();
  }
}
