import mongoose from 'mongoose'

export async function connectDB(mongoUri) {
  if (!mongoUri) {
    throw new Error('MONGODB_URI não definida')
  }

  await mongoose.connect(mongoUri)
  console.log('MongoDB conectado')
}
