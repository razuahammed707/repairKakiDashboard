const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb+srv://razu:munna707@cluster0-2gexu.mongodb.net/';
const dbName = 'test';

const allUser = async()=>{
    const client = new MongoClient(url);
        try {
            await client.connect();
            console.log("Connected correctly to server");


            const db = client.db(dbName);
            const allUsers = await db.collection("partnerprofiles").find({role:"user"})
            console.log(allUsers)

        } catch (err) {
            console.log(err.stack);
        }
  client.close();

}

module.exports={
    allUser
}