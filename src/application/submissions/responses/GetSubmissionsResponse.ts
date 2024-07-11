import { ApiProperty } from '@nestjs/swagger';
import { Submission } from '../../../domain/submissions/entities/submission.postgres.entity';

export class GetSubmissionsResponse {
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
    description: 'Message',
    type: Submission,
    isArray: true,
  })
  data: Submission[];
}
