import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from "@nestjs/common";
import { TaskService } from "./task.service";
import {Task} from '@prisma/client';

@Controller('tasks')
export class TaskController{
    constructor(private readonly taskService:TaskService){
        
    }


    @Get()
    async getTasks():Promise<Task[]>{
        return await this.taskService.getAllTasks();
    }

    @Post()
    async posTask(@Body() task:Task):Promise<Task>{
        return await this.taskService.postTask(task); 
    }

    @Get('/:id')
    async getOneTask(@Param('id') id:string):Promise<Task>{
        const tareaEncontrada = await this.taskService.getTask(Number(id));

        if(!tareaEncontrada){
            throw new NotFoundException('La tarea no existe');
        }
        else{
            return tareaEncontrada;
        }
    }

    @Put('/:id')
    async putTask(@Param('id') id:string, @Body() task:Task):Promise<Task>{
        return await this.taskService.putTask(Number(id),task);
    }

    @Delete('/:id')
    async deleteTask(@Param('id') id:string):Promise<Task>{
        

        try{
            return await this.taskService.deleteTask(Number(id));
           
        }
        catch(e){
            throw new NotFoundException('La tarea no existe' );
        }
    }
}