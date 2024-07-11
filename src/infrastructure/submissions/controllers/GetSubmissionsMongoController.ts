import { Controller, Get, HttpStatus, Inject } from '@nestjs/common';
import { ApiTags, ApiOkResponse } from '@nestjs/swagger';
import { SUCCESS } from '../../../common/constants/response.constant';
import { Result } from '../../../common/helpers/result.helper';
import { IGetSubmissionsMongoService } from '../../../domain/submissions/interfaces/IGetSubmissionsMongoService';
import { SubmissionMongo } from '../../../domain/submissions/entities/submission.mongo.entity';
import { GetSubmissionsMongoResponse } from '../../../application/submissions/responses/GetSubmissionsMongoResponse';

@ApiTags('Mongo')
@Controller()
export class GetSubmissionsMongoController {
  constructor(
    @Inject(IGetSubmissionsMongoService)
    private readonly getSubmissionsService: IGetSubmissionsMongoService,
  ) {}

  @ApiOkResponse({
    status: 200,
    description: 'The resources were returned successfully',
    type: GetSubmissionsMongoResponse,
  })
  @Get('/')
  async getSubmissions(): Promise<GetSubmissionsMongoResponse> {
    const result = await this.getSubmissionsService.findAll();

    return new Result<SubmissionMongo[]>().success(
      HttpStatus.OK,
      SUCCESS,
      result,
    );
  }
}
