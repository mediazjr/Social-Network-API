const connection = require("../config/connection");
const { Reaction, Thought, User } = require("../models");

connection.on("error", (err) => err);

connection.once("open", async () => {
    console.log("connected");

    await User.deleteMany({});

    await Thought.deleteMany({});

    await Reaction.deleteMany({});

    const users = [];

    const thoughts = getRandomThoughts(5);

    for (let i = 0; i < 5; i++) {}
});

await User.collection.insertMany(users);

await Thought.collection.insertOne;

console.table(User);
console.table(Thought);
console.table(Reaction);
console.info("Seeding complete!");
process.exit(0);