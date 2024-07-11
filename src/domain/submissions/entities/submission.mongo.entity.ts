import { ObjectId } from 'mongodb';
import {
  Entity,
  Column,
  ObjectIdColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum SubmissionStatus {
  JAWABAN_BARU = 'JAWABAN BARU',
  BUTUH_REVIEW = 'BUTUH REVIEW',
  DISETUJUI = 'DISETUJUI',
  DITOLAK = 'DITOLAK',
  DITOLAK_DARI_QC = 'DITOLAK DARI QC',
}

@Entity('Submissions')
export class SubmissionMongo {
  @ObjectIdColumn()
  id: ObjectId;

  @Column('int', { nullable: false })
  studyId: number;

  @Column('varchar', { nullable: true })
  participantEmail?: string;

  @CreateDateColumn({ name: 'startedAt' })
  startedAt: Date;

  @Column('varchar', { nullable: false })
  status: SubmissionStatus;

  @Column('json', { nullable: true })
  answer?: any[];

  @Column('varchar', { nullable: true })
  remarks?: string;

  @Column('timestamp', { nullable: true })
  finishedAt?: Date;

  @Column({ type: 'boolean', nullable: false, default: false })
  isFreemium?: boolean;

  @Column('int', { nullable: true })
  respondentId?: number;

  @Column('timestamp', { nullable: true, name: 'deletedAt' })
  deletedAt?: Date;

  @CreateDateColumn({ name: 'createdAt' })
  createdAt?: Date;

  @UpdateDateColumn({ name: 'updatedAt' })
  updatedAt?: Date;
}
