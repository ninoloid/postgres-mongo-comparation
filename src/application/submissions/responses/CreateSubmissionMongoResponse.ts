import { ApiProperty } from '@nestjs/swagger';
import { SubmissionMongo } from '../../../domain/submissions/entities/submission.mongo.entity';

export class CreateSubmissionMongoResponse {
  @ApiProperty({
    description: 'HTTP Code',
    example: '201',
  })
  code: number;

  @ApiProperty({
    description: 'Message',
    example: 'Success',
  })
  message: string;

  @ApiProperty({
    description: 'Message',
    type: SubmissionMongo,
  })
  data: SubmissionMongo;
}
