import express, { Application, Request, Response } from 'express'
import cors from 'cors'
const app: Application = express()
app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Testing purposes npx prettier --write src/index.ts
app.get('/', (_req: Request, res: Response) => {
  res.send('Working successfully')
})

export default app
