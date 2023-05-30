import { RedisSessionStore } from '@ethercorps/sveltekit-redis-session';
import Redis from 'ioredis';
import { REDIS_LOCAL_URL, REDIS_PASSWORD } from '$env/static/private';

// Now we will create new Instance for RedisSessionStore
const options = {
  redisClient: new Redis(REDIS_LOCAL_URL),
  secret: REDIS_PASSWORD
} 
// These are the required options to use RedisSessionStore.
export const sessionManager = new RedisSessionStore(options)
