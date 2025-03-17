import mongoose from "mongoose";

const MONGODB_URI=process.env.MONGODB_URI!;

if(!MONGODB_URI){
    throw new Error("please define mongodb uri in env file");
}

let cached=global.mongoose;

if(!cached){
    cached=global.mongoose={conn: null, promise:null};

}
// Why This Matters:(bufferConnections)
//If you want your app to fail fast when the database is unavailable, use bufferCommands: false.
//If you want your app to wait until the connection is established and then execute all buffered operations, keep bufferCommands: true.
export async function connectToDatabase(){
    if(cached.conn){
        return cached.conn;
    }


    if(!cached.promise){
        const opts={
            bufferCommands:true,
            maxPoolSize:10
        }
          //bufferCommands is an option used with Mongoose when you connect to a MongoDB database in a Next.js application (or any Node.js app). It controls whether Mongoose buffers database operations when the connection is not yet established.
    
    cached.promise=mongoose
    .connect(MONGODB_URI,opts)
    .then(()=>mongoose.connection)
    }


    try {
        cached.conn=await cached.promise

    }
     catch (error) {
        cached.promise=null
        throw error;
    }

    return cached.conn;

}