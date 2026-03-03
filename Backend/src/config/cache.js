

const Redis = require("ioredis").default

const redis = new Redis({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASSWORD
})


// redis.on ka matlab hota hai jaise hi hamara server redis sa connect ho jaye tu ussi time pa hamara ek call back chala dena.
redis.on("connect", () => {
    console.log("server is running to redis")
})


// this for handling an error in redis if it come
redis.on("error", (err) => {
    console.log(err)
})

module.exports = redis