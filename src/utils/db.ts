import mongoose from 'mongoose'

export const connectDB: () => Promise<void> = async () =>{
    try{
       await  mongoose.connect(process.env.MONGO_URL as string)
       console.log('mongoDB connection true')

    } catch (error:any){
        console.log('mongo is not connected', error.message)
        process.exit(1)
    }
}