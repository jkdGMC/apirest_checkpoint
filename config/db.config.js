const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI,{
    useUnifiedTopology:true,
    useNewUrlParser: true,
})
    .then(() => console.log('Connected to mongodb database ! ;)'))
    .catch(console.error);

