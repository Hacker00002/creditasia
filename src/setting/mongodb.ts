import mongoose from 'mongoose'
import appConfig from '../config/app.config'
//database connection
export default async () => {
  try {
    //cennect to database
    await mongoose.connect(appConfig.DATABASE_URL)
    //log the success message
    console.log('Succesfully connected :)')
    //catch the error
  } catch (error) {
    //log the error message
    console.log(error)
  }
}
