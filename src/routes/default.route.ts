import { SubmissionsMongoModule } from '../infrastructure/submissions/modules/submission.mongo.module';
import { SubmissionsModule } from '../infrastructure/submissions/modules/submission.module';

export const internalRoutes = [
  {
    path: '/api',
    children: [
      {
        path: '/postgres/submssions',
        module: SubmissionsModule,
      },
      {
        path: '/mongo/submssions',
        module: SubmissionsMongoModule,
      },
    ],
  },
];
