import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

const connectDatabase = () => {
  mongoose
    .connect(
      `mongodb+srv://${dbUser}:${dbPassword}@cluster0.csoqimt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
    )
    .then(() => {
      console.log('Conectado ao banco de dados.');
    })
    .catch((err) => console.error('Erro ao conectar ao banco:', err));
};

export default connectDatabase;
