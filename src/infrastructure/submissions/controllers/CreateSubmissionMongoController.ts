import { Controller, Post, Body, HttpStatus, Inject } from '@nestjs/common';
import { ApiTags, ApiCreatedResponse } from '@nestjs/swagger';
import { SUCCESS } from '../../../common/constants/response.constant';
import { Result } from '../../../common/helpers/result.helper';
import { ICreateSubmissionService } from '../../../domain/submissions/interfaces/ICreateSubmissionService';
import { CreateSubmissionDto } from '../../../application/submissions/dtos/CreateSubmissionDto';
import { SubmissionMongo } from '../../../domain/submissions/entities/submission.mongo.entity';
import { CreateSubmissionMongoResponse } from 'src/application/submissions/responses/CreateSubmissionMongoResponse';

@ApiTags('Mongo')
@Controller()
export class CreateSubmissionMongoController {
  constructor(
    @Inject(ICreateSubmissionService)
    private readonly userService: ICreateSubmissionService,
  ) {}

  @ApiCreatedResponse({
    description: 'The boilerplate entity that got created',
    type: SubmissionMongo,
  })
  @Post('/')
  async createSubmission(
    @Body() usersInput: CreateSubmissionDto,
  ): Promise<CreateSubmissionMongoResponse> {
    const result = (await this.userService.create(
      usersInput,
      'mongo',
    )) as SubmissionMongo;
    return new Result<SubmissionMongo>().success(
      HttpStatus.CREATED,
      SUCCESS,
      result,
    );
  }
}
