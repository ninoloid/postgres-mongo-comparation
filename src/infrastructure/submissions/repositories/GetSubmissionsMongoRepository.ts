import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { IGetSubmissionsMongoRepository } from '../../../domain/submissions/repositories/IGetSubmissionsMongoRepository';
import { InjectRepository } from '@nestjs/typeorm';
import { SubmissionMongo } from '../../../domain/submissions/entities/submission.mongo.entity';

@Injectable()
export class GetSubmissionsMongoRepository
  implements IGetSubmissionsMongoRepository
{
  constructor(
    @InjectRepository(SubmissionMongo, 'mongo')
    private readonly submissionRepository: Repository<SubmissionMongo>,
  ) {}

  async find() {
    return this.submissionRepository.find();
  }
}
