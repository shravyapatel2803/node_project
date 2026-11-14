// require('dotenv').config();

import dotenv from 'dotenv';
dotenv.config({
    path: './.env'
})
import connectDB from './db/index.js';

connectDB()
.then(() => {
    import('./app.js').then(({ app }) => {
        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        }
        );
    });
}
)
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
}
)




/*
const app = express();

;(async () => {
  try {

    await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
    console.log('Connected to MongoDB');
    app.on('error', (err) => {
      console.error('Express server error:', err);
      throw err; // Rethrow the error to crash the server
    });

    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  } 
  catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
})();
*/