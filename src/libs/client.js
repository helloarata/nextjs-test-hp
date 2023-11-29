import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: 'a1ejjo2lpe',
  apiKey: process.env.API_KEY,
});