import { ApiProperty } from '@nestjs/swagger';
import { Submission } from '../../../domain/submissions/entities/submission.postgres.entity';

export class CreateSubmissionResponse {
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
    type: Submission,
  })
  data: Submission;
}
