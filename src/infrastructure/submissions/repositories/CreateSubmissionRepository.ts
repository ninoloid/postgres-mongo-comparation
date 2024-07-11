import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Submission } from '../../../domain/submissions/entities/submission.postgres.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateSubmissionDto } from '../../../application/submissions/dtos/CreateSubmissionDto';
import { ICreateSubmissionRepository } from '../../../domain/submissions/repositories/ICreateSubmissionRepository';

@Injectable()
export class CreateSubmissionRepository implements ICreateSubmissionRepository {
  constructor(
    @InjectRepository(Submission)
    private readonly submissionRepository: Repository<Submission>,
  ) {}

  async save(usersInput: CreateSubmissionDto) {
    return this.submissionRepository.save(usersInput);
  }
}
