import {Schema} from 'mongoose'

interface IBook {
    name: string,
    author: string,
    publishyear: number,
    descriptio: string
}

const boodSchema = new Schema<IBook>({
    name:{

        type: String,
        required: true,
        trim: true
    },

    author:{
        type: String,
        required:true,
        trim:true
    },
    publishyear:{
        type: Number,
        required: true, 
        trim: true
    },
    descriptio:{
        type: String,
        required:true,
        trim: true
    }

})

