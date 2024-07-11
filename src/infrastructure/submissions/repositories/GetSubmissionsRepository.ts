import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { IGetSubmissionsRepository } from '../../../domain/submissions/repositories/IGetSubmissionsRepository';
import { Submission } from '../../../domain/submissions/entities/submission.postgres.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class GetSubmissionsRepository implements IGetSubmissionsRepository {
  constructor(
    @InjectRepository(Submission)
    private readonly userRepository: Repository<Submission>,
  ) {}

  async find() {
    return this.userRepository.find();
  }
}
