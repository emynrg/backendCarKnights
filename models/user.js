import mongoose from "mongoose";
import { Schema,model } from "mongoose";



const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique : true
        },
       
        email: {
            type: String,
            required: true,
            unique : true
        },
        role: {
            type: String,
            required: true
           
        },
        datedenaissance: {
            type: String,
            required: true,
            unique : true
        },
        numero:{

            type : Number,
            required: true,
            unique : true

        },
        password: {
            type: String,
            required: true,
            
        }
    },
       
)

export default model("User", userSchema);

