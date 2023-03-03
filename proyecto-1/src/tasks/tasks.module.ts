import { Module } from '@nestjs/common';
import { Controller } from '@nestjs/common/decorators';
import{TasksService} from './tasks.service';
import { TasksController } from './tasks.controller';

@Module({
    imports:[],
    controllers: [TasksController],
    providers:[TasksService]
})
export class TasksModule {}
