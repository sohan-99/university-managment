import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import usersRouter from './app/modules/users/users.route'
const app: Application = express()
app.use(cors())
// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application routes

app.use('/api/v1/users/', usersRouter)
// Testing purposes npx prettier --write src/index.ts
app.get('/', async (_req: Request, res: Response) => {
  res.send('Working successfully')
})

export default app
