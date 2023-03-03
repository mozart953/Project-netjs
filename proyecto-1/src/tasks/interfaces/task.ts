import {Document} from 'mongoose';

export interface Task extends Document{
    _id?:string;
    title:String;
    description: String;
    done:boolean;
}