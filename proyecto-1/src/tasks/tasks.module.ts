import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { TaskSchema } from './schemas/task.schema';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Task', schema: TaskSchema }]),
    MongooseModule.forRoot('mongodb://localhost/nest-tutorial1', {
      useNewUrlParser: true,
    }),
  ],
  controllers: [TasksController],
  providers: [
    TasksService,
    {
      provide: 'TaskModel',
      useFactory: (mongoose) => mongoose.model('Task', TaskSchema),
      inject: [MongooseModule]
    },
  ],
})
export class TasksModule {}
