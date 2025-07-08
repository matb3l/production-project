// eslint-disable-next-line @typescript-eslint/no-require-imports
const fs = require('fs')
// eslint-disable-next-line @typescript-eslint/no-require-imports
const express = require('express')
// eslint-disable-next-line @typescript-eslint/no-require-imports
const jsonServer = require('json-server')
// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require('path')

const app = express()
const apiRouter = express.Router()

// Настройка JSON Server
const router = jsonServer.router(path.resolve(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()

// Функция для чтения базы данных
const getDb = () => {
  return JSON.parse(
    fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'),
  )
}

// Обработчик логина
const loginHandler = (req, res) => {
  try {
    const { username, password } = req.body

    const db = getDb()
    console.log(db)
    const { users } = db

    const userFromDb = users.find(
      user => user.username === username && user.password === password,
    )

    if (userFromDb) {
      return res.json(userFromDb)
    }

    return res.status(403).json({ message: 'auth error' })
  } catch (error) {
    console.error('Error in login endpoint:', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}

// Middleware для проверки авторизации
const authMiddleware = (req, res, next) => {
  // Исключаем маршрут /login из проверки авторизации
  if (req.path === '/login') {
    return next()
  }

  if (!req.headers.authorization) {
    return res.status(403).json({ message: 'auth error' })
  }

  next()
}

app.use(middlewares)
app.use(express.json())

// API маршруты
apiRouter.use(async (req, res, next) => {
  await new Promise(resolve => setTimeout(resolve, 800))
  next()
})

apiRouter.post('/login', loginHandler)
apiRouter.use(authMiddleware)
apiRouter.use(router)

// Подключаем API роутер
app.use('/api', apiRouter)

// Корневой маршрут
app.get('/', (req, res) => {
  res.json({ message: 'API available at /api' })
})

app.listen(8000, () => {
  console.log('Server running on http://localhost:8000')
  console.log('API available at http://localhost:8000/api')
})
