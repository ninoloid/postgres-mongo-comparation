import { Inject, Injectable } from '@nestjs/common';
import { Submission } from '../../domain/submissions/entities/submission.postgres.entity';
import { IGetSubmissionsService } from '../../domain/submissions/interfaces/IGetSubmissionService';
import { IGetSubmissionsRepository } from '../../domain/submissions/repositories/IGetSubmissionsRepository';

@Injectable()
export class GetSubmissionsService implements IGetSubmissionsService {
  constructor(
    @Inject(IGetSubmissionsRepository)
    private readonly getSubmissionsRepository: IGetSubmissionsRepository,
  ) {}

  async findAll(): Promise<Submission[]> {
    return await this.getSubmissionsRepository.find();
  }
}
