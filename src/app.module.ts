import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RouterModule } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from 'config/database';
import { internalRoutes } from './routes/default.route';
import { SubmissionsModule } from './infrastructure/submissions/modules/submission.module';
import { SubmissionMongo } from './domain/submissions/entities/submission.mongo.entity';
import { SubmissionsMongoModule } from './infrastructure/submissions/modules/submission.mongo.module';

const imports = [
  ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: '.env',
  }),
  TypeOrmModule.forRootAsync({
    useClass: TypeOrmConfigService,
  }),
  TypeOrmModule.forRoot({
    name: 'mongo',
    type: 'mongodb',
    url: 'mongodb://root:example@mongodb:27017/poplite',
    authSource: 'admin',
    port: 27017,
    database: 'poplite',
    synchronize: true,
    entities: [SubmissionMongo],
    useUnifiedTopology: true,
    useNewUrlParser: true,
    logging: true,
  }),
  RouterModule.register(internalRoutes),
  SubmissionsModule,
  SubmissionsMongoModule,
];

@Module({
  imports,
  providers: [],
})
export class AppModule {}
