import mongoose from 'mongoose';

mongoose.connect('uri',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
);
