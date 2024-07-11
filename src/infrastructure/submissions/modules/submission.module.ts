import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Submission } from '../../../domain/submissions/entities/submission.postgres.entity';
import { GetSubmissionsController } from '../controllers/GetSubmissionsController';
import { GetSubmissionsService } from '../../../application/submissions/GetSubmissionssService';
import { IGetSubmissionsRepository } from '../../../domain/submissions/repositories/IGetSubmissionsRepository';
import { IGetSubmissionsService } from '../../../domain/submissions/interfaces/IGetSubmissionService';
import { GetSubmissionsRepository } from '../repositories/GetSubmissionsRepository';
import { ICreateSubmissionRepository } from '../../../domain/submissions/repositories/ICreateSubmissionRepository';
import { ICreateSubmissionService } from '../../../domain/submissions/interfaces/ICreateSubmissionService';
import { CreateSubmissionService } from '../../../application/submissions/CreateSubmissionService';
import { CreateSubmissionController } from '../controllers/CreateSubmissionController';
import { CreateSubmissionRepository } from '../repositories/CreateSubmissionRepository';
import { ICreateSubmissionMongoRepository } from '../../../domain/submissions/repositories/ICreateSubmissionMongoRepository';
import { CreateSubmissionMongoRepository } from '../repositories/CreateSubmissionMongoRepository';
import { SubmissionMongo } from '../../../domain/submissions/entities/submission.mongo.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Submission]),
    TypeOrmModule.forFeature([SubmissionMongo], 'mongo'),
  ],
  controllers: [GetSubmissionsController, CreateSubmissionController],
  providers: [
    {
      provide: IGetSubmissionsRepository,
      useClass: GetSubmissionsRepository,
    },
    {
      provide: IGetSubmissionsService,
      useClass: GetSubmissionsService,
    },
    {
      provide: ICreateSubmissionRepository,
      useClass: CreateSubmissionRepository,
    },
    {
      provide: ICreateSubmissionMongoRepository,
      useClass: CreateSubmissionMongoRepository,
    },
    {
      provide: ICreateSubmissionService,
      useClass: CreateSubmissionService,
    },
  ],
})
export class SubmissionsModule {}
