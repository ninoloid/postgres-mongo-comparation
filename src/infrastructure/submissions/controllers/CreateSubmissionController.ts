import { Controller, Post, Body, HttpStatus, Inject } from '@nestjs/common';
import { ApiTags, ApiCreatedResponse } from '@nestjs/swagger';
import { SUCCESS } from '../../../common/constants/response.constant';
import { Result } from '../../../common/helpers/result.helper';
import { Submission } from '../../../domain/submissions/entities/submission.postgres.entity';
import { ICreateSubmissionService } from '../../../domain/submissions/interfaces/ICreateSubmissionService';
import { CreateSubmissionDto } from '../../../application/submissions/dtos/CreateSubmissionDto';
import { CreateSubmissionResponse } from '../../../application/submissions/responses/CreateSubmissionResponse';

@ApiTags('Postgres')
@Controller()
export class CreateSubmissionController {
  constructor(
    @Inject(ICreateSubmissionService)
    private readonly userService: ICreateSubmissionService,
  ) {}

  @ApiCreatedResponse({
    description: 'The boilerplate entity that got created',
    type: Submission,
  })
  @Post('/')
  async createSubmission(
    @Body() usersInput: CreateSubmissionDto,
  ): Promise<CreateSubmissionResponse> {
    const result = (await this.userService.create(
      usersInput,
      'postgres',
    )) as Submission;
    return new Result<Submission>().success(
      HttpStatus.CREATED,
      SUCCESS,
      result,
    );
  }
}
