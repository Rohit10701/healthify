import userRouter from "./routes/userEndpoint.mjs";
import medicineRouter from './routes/medicineEndpoint.mjs'
import express from 'express'
import cors from 'cors'
import dbConnection from './utils/db.mjs' 
const app = express()
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());


app.use('/users', userRouter)
app.use('/medicine', medicineRouter)


// db connection

dbConnection.on('open', () => {
	app.listen(port, () => console.log(`Server Port: ${port}`));
  });
  
  // Handle MongoDB connection errors
dbConnection.on('error', (error) => {
	console.error(`MongoDB connection error: ${error}`);
  });