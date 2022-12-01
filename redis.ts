import Redis from "ioredis";

const redis = new Redis(
    `redis://default:${process.env.REDIS_PW}@us1-stunning-louse-37106.upstash.io:37106`
);

export default redis;
