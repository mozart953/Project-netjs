import mongoose, {Schema} from 'mongoose';

export const TaskSchema = new mongoose.Schema({
    title: String,
    description:String,
    done: Boolean
});