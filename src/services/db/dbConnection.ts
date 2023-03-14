import mongoose from 'mongoose'
import config from "../../config"

export default () => {
    const uri = `mongodb+srv://${config.mongo.MONGO_USERNAME}:${config.mongo.MONGO_PASS}@cluster0.gbdva.mongodb.net/${config.mongo.MONGO_DB}?retryWrites=true&w=majority`;
    mongoose.set("strictQuery", false);
    mongoose.connect(uri, (e) => {
        console.log("✅---------Connected to MongoDB Succesfully--------✅")
    })
}