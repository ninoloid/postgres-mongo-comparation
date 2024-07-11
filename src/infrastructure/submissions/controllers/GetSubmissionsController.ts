import { Controller, Get, HttpStatus, Inject } from '@nestjs/common';
import { ApiTags, ApiOkResponse } from '@nestjs/swagger';
import { SUCCESS } from '../../../common/constants/response.constant';
import { Result } from '../../../common/helpers/result.helper';
import { IGetSubmissionsService } from '../../../domain/submissions/interfaces/IGetSubmissionService';
import { Submission } from '../../../domain/submissions/entities/submission.postgres.entity';
import { GetSubmissionsResponse } from '../../../application/submissions/responses/GetSubmissionsResponse';

@ApiTags('Postgres')
@Controller()
export class GetSubmissionsController {
  constructor(
    @Inject(IGetSubmissionsService)
    private readonly getSubmissionsService: IGetSubmissionsService,
  ) {}

  @ApiOkResponse({
    status: 200,
    description: 'The resources were returned successfully',
    type: GetSubmissionsResponse,
  })
  @Get('/')
  async getSubmissions(): Promise<GetSubmissionsResponse> {
    const result = await this.getSubmissionsService.findAll();

    return new Result<Submission[]>().success(HttpStatus.OK, SUCCESS, result);
  }
}
