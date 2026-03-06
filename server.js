import app from './src/app.js'
import dotenv from 'dotenv'
dotenv.config()
import connectDB from './src/db/db.js'

connectDB()
app.listen(3000, () => {
    console.log(3000);
})