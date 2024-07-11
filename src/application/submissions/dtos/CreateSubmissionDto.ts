import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsDate,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

export enum SubmissionStatus {
  JAWABAN_BARU = 'JAWABAN BARU',
  BUTUH_REVIEW = 'BUTUH REVIEW',
  DISETUJUI = 'DISETUJUI',
  DITOLAK = 'DITOLAK',
  DITOLAK_DARI_QC = 'DITOLAK DARI QC',
}

class SubmissionAnswer {
  @IsNotEmpty()
  @IsString()
  question: string;

  @IsNotEmpty()
  @IsArray()
  @ArrayMinSize(1)
  answer: string[];
}

export class CreateSubmissionDto {
  @IsNotEmpty()
  @IsInt()
  @Type(() => Number)
  studyId: number;

  @IsInt()
  @Type(() => Number)
  @IsOptional()
  submissionId: number;

  @IsNotEmpty()
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  // @Type(() => any)
  answer: any[];

  @IsNotEmpty()
  @IsString()
  participantEmail: string;

  @IsNotEmpty()
  @IsEnum(SubmissionStatus)
  status: SubmissionStatus;

  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  startedAt: Date;

  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  finishedAt: Date;

  @IsString()
  @IsOptional()
  remarks: string;
}

// {
//   "studyId": 123,
//   "answer": [{ "id": 1, "question": "dummy", "answer": [{ "answer": ["test"] }] }],
//   "participantEmail": "email@email.com",
//   "status": "BUTUH REVIEW",
//   "startedAt": "2024-07-10T12:00:00Z",
//   "finishedAt": "2024-07-10T12:00:00Z"
// }
