import mongoose from "mongoose"

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://sumethvindunu:RZNQkbNx9zJWVg5@mernsum.w3ctnrf.mongodb.net/food-del").then(()=>console.log("DB Connetced"));
}