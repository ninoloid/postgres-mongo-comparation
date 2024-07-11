import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubmissionMongo } from '../../../domain/submissions/entities/submission.mongo.entity';
import { IGetSubmissionsMongoRepository } from '../../../domain/submissions/repositories/IGetSubmissionsMongoRepository';
import { GetSubmissionsMongoRepository } from '../repositories/GetSubmissionsMongoRepository';
import { IGetSubmissionsMongoService } from '../../../domain/submissions/interfaces/IGetSubmissionsMongoService';
import { GetSubmissionsMongoService } from '../../../application/submissions/GetSubmissionssMongoService';
import { GetSubmissionsMongoController } from '../controllers/GetSubmissionsMongoController';
import { ICreateSubmissionRepository } from '../../../domain/submissions/repositories/ICreateSubmissionRepository';
import { CreateSubmissionRepository } from '../repositories/CreateSubmissionRepository';
import { CreateSubmissionService } from '../../../application/submissions/CreateSubmissionService';
import { ICreateSubmissionService } from '../../../domain/submissions/interfaces/ICreateSubmissionService';
import { ICreateSubmissionMongoRepository } from '../../../domain/submissions/repositories/ICreateSubmissionMongoRepository';
import { CreateSubmissionMongoRepository } from '../repositories/CreateSubmissionMongoRepository';
import { CreateSubmissionMongoController } from '../controllers/CreateSubmissionMongoController';
import { Submission } from '../../../domain/submissions/entities/submission.postgres.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([SubmissionMongo], 'mongo'),
    TypeOrmModule.forFeature([Submission]),
  ],
  controllers: [GetSubmissionsMongoController, CreateSubmissionMongoController],
  providers: [
    {
      provide: IGetSubmissionsMongoRepository,
      useClass: GetSubmissionsMongoRepository,
    },
    {
      provide: IGetSubmissionsMongoService,
      useClass: GetSubmissionsMongoService,
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
export class SubmissionsMongoModule {}
