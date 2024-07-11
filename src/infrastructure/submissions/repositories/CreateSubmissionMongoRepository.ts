import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateSubmissionDto } from '../../../application/submissions/dtos/CreateSubmissionDto';
import { ICreateSubmissionMongoRepository } from '../../../domain/submissions/repositories/ICreateSubmissionMongoRepository';
import { SubmissionMongo } from '../../../domain/submissions/entities/submission.mongo.entity';

@Injectable()
export class CreateSubmissionMongoRepository
  implements ICreateSubmissionMongoRepository
{
  constructor(
    @InjectRepository(SubmissionMongo, 'mongo')
    private readonly submissionRepository: Repository<SubmissionMongo>,
  ) {}

  async save(usersInput: CreateSubmissionDto) {
    try {
      return this.submissionRepository.save(usersInput);
    } catch (error) {
      console.log('eeeeeeee', error);
    }
  }
}
