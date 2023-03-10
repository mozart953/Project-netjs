import { Controller, Delete, Get, Post, Put, Body, HttpCode, Req, Res } from '@nestjs/common';
import { Param } from '@nestjs/common/decorators';

import { createTaskDto } from './dto/create.task.dto';
import { Request, Response } from 'express';

import {Task} from './interfaces/task';
import {TasksService} from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private taskService:TasksService){

    }

    @Get()
    getTasks():Promise<Task[]>{
        return this.taskService.getTasks();
    }

    @Get('/:taskId')
    getTask(@Param('taskId') taskId:string){
        return this.taskService.getTask(taskId);
    }

    // @Get
    // getTask(@Req()req,@Res() res):Response {
    //     return res.send("hello world");
    // }

    @Post()
    createTasks(@Body() task: createTaskDto):string{
        return this.taskService.createTask(task);
    }

    @Put('/:id')
    updateTasks(@Body() task: createTaskDto, @Param('id') id): String {
        console.log(task);
        console.log(id);
        return 'updating tasks';
    }


    @Delete('/:id')
    deleteTasks(@Param('id') id): String {
        console.log(id);
        return `Deleting task ${id}`;
    }

}
