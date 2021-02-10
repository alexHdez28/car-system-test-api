import {Document, Schema } from 'mongoose';

export const VehicleSchema = new Schema({
    image: { type:String, required:true },
    make: { type:String, required:true },
    modelCar:{ type:String, required:true },
    description:{ type:String, required:true },
    programDate:{ type:String, required:true },
    km:{ type:Number, required:true },
    maintenance:{ type:Boolean, required:true },
});

export interface Vehicle extends Document {
    id:string;
    image:string;
    make:string;
    modelCar:string;
    description:string;
    programDate:string;
    km:number;
    maintenance:boolean;
};