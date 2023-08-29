import mongoose from 'mongoose';

export const dbConnect = () => {
  const user = process.env.DB_USER;
  const password = process.env.DB_PASSWD;
  const uri = `mongodb+srv://${user}:${password}@cluster0.wyzrngt.mongodb.net/AnimeCharacters?retryWrites=true&w=majority`;
  return mongoose.connect(uri);
};
