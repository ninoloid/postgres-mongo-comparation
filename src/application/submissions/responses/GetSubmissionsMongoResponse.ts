import { ApiProperty } from '@nestjs/swagger';
import { SubmissionMongo } from '../../../domain/submissions/entities/submission.mongo.entity';

export class GetSubmissionsMongoResponse {
  @ApiProperty({
    description: 'HTTP Code',
    example: '200',
  })
  code: number;

  @ApiProperty({
    description: 'Message',
    example: 'Success',
  })
  message: string;

  @ApiProperty({
    description: 'Data',
    type: SubmissionMongo,
    isArray: true,
  })
  data: SubmissionMongo[];
}
