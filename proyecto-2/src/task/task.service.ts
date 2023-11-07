import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import {Task} from "@prisma/client"

@Injectable()
export class TaskService{
    constructor(private prisma: PrismaService) {}

    async getAllTasks(): Promise<Task[]>{
        return await this.prisma.task.findMany();
    }

    async getTask(id:number): Promise<Task>{
        
        return await this.prisma.task.findUnique({
            where:{
                id:id
            }
        });

       
    }

    async postTask(task:Task): Promise<Task>{
        return await this.prisma.task.create({
            data:task
        });
    }

    async putTask(id:number, task:Task): Promise<Task>{
        return await this.prisma.task.update({
            where:{
                id:id
            },
            data: task
        });
    }

    async deleteTask(id:number): Promise<Task>{

       
            return await this.prisma.task.delete({
                where:{
                    id:id
                }
            });

    

       
    }



}