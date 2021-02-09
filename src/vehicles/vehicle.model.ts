import * as mongoose from 'mongoose';

export const VehicleSchema = new mongoose.Schema({
    image: { type:String, required:true },
    make: { type:String, required:true },
    model:{ type:String, required:true },
    description:{ type:String, required:true },
    programDate:{ type:String, required:true },
    km:{ type:Number, required:true },
    maintenance:{ type:Boolean, required:true },
});

export interface Vehicle extends Document {
    id:string;
    image:string;
    make:string;
    model:string;
    description:string;
    programDate:string;
    km:number;
    maintenance:boolean;
};