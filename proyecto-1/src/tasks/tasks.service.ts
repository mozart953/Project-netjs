import { Injectable } from '@nestjs/common';

import {Task} from './interfaces/task';

import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';


@Injectable()
export class TasksService {

    // tasks:Task[] = [
    //     {
    //         id:1,
    //         title:"Testing",
    //         description:"Testing description",
    //         done:true
    //     },
    //     {
    //         id:2,
    //         title:"Testing 2",
    //         description:"Testing description 2",
    //         done:true
    //     },
    //     {
    //         id:3,
    //         title:"Testing 3",
    //         description:"Testing description 3",
    //         done:true
    //     }
        
    // ];

    // getTasks():Task[]{
    //     return this.tasks;

    // }

    // getTask(id:number):Task{
    //     return this.tasks.find(task => task.id===id);

    // }

    constructor(@InjectModel('Task') private taskModel:Model<Task>){

    }

    async getTasks(){
      return await this.taskModel.find();
    }

    async getTask(id:string){
        return await this.taskModel.findById(id);
    }
}
