export default {
  //port: number
  PORT: process.env.API_PORT ?? 5995,
  //database: url
  DATABASE_URL:
    process.env.DATABASE_URL ?? 'mongodb+srv://hacker:123456789qwerty@cluster0.mwokqtl.mongodb.net/creditasiauz',
}
