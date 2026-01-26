// config/env.js
import 'dotenv/config'

export const env = {
  port: process.env.PORT ?? 3000,
  mongoUri: process.env.MONGODB_URI
}
