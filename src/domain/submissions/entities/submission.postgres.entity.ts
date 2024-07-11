import { Column, DeleteDateColumn, Entity, Index } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Base } from '../../../common/entities/base.entity';

export enum SubmissionStatus {
  JAWABAN_BARU = 'JAWABAN BARU',
  BUTUH_REVIEW = 'BUTUH REVIEW',
  DISETUJUI = 'DISETUJUI',
  DITOLAK = 'DITOLAK',
  DITOLAK_DARI_QC = 'DITOLAK DARI QC',
}

export interface PopliteSubmissionAnswer {
  question: string;
  answer: string[];
  type?: string;
}

@Entity('Submissions')
export class Submission extends Base {
  @ApiProperty({ description: 'Study ID', example: 1 })
  @Column('int', { nullable: false })
  studyId: number;

  @ApiProperty({ description: 'Participant email', example: 'test@gmail.com' })
  @Column('varchar', { nullable: true })
  participantEmail?: string;

  @ApiProperty({
    description: 'Submission started date',
    example: new Date(),
  })
  @Column('timestamp', {
    default: new Date(),
    nullable: false,
  })
  startedAt: Date;

  @ApiProperty({
    description: 'Study status',
    example: 'JAWABAN BARU',
  })
  @Column({
    type: 'enum',
    enum: SubmissionStatus,
    nullable: false,
  })
  status: SubmissionStatus;

  @ApiProperty({
    description: 'Submission answer',
    example: [{ question: 'Brand olahraga favorit', answer: ['Adidas'] }],
  })
  @Column('json', { nullable: true })
  answer?: any[];

  @ApiProperty({
    description: 'Submission remarks',
    example: 'User terlalu cepat menyelesaikan studi (Speedster).',
  })
  @Column('varchar', { nullable: true })
  remarks?: string;

  @ApiProperty({
    description: 'Submission finished date',
    example: new Date(),
  })
  @Column('timestamp', {
    nullable: true,
  })
  finishedAt: Date;

  @ApiProperty({
    description: 'Flag to determine the study is a freemium',
    example: 0,
  })
  @Column({ type: 'boolean', nullable: false, default: false })
  isFreemium?: boolean;

  @ApiProperty({
    description: 'The Respondent ID Freemium Business',
    example: 1,
  })
  @Column('int')
  respondentId?: number;

  @ApiProperty({
    description: 'Deleted at',
    example: new Date(),
  })
  @DeleteDateColumn({ name: 'deletedAt' })
  deletedAt?: Date;
}
