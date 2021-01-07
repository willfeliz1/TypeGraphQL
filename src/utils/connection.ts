import mongoose from 'mongoose';

mongoose.connect('URI_CONEXAO_MONGODB_CODE',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
