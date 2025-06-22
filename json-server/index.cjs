// eslint-disable-next-line @typescript-eslint/no-require-imports
const fs = require('fs');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const jsonServer = require('json-server');
// eslint-disable-next-line @typescript-eslint/no-require-imports
// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require('path');

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(async (req, res, next) => {
  await new Promise(resolve => setTimeout(resolve, 800));
  next();
});

server.use(jsonServer.bodyParser);
server.use(jsonServer.defaults());

server.post('/login', (req, res) => {
  try {
    const { username, password } = req.body;
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), "UTF-8"));
    console.log(db)
    const { users } = db;

    const userFromDb = users.find(user => user.username === username && user.password === password);

    if (userFromDb) {
      return res.json(userFromDb);
    }

    return res.status(403).json({ message: 'auth error' });
  } catch (error) {
    console.error('Error in login endpoint:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

server.use((req, res, next) => {
  // Исключаем маршрут /login из проверки авторизации
  if (req.path === '/login') {
    return next();
  }

  if (!req.headers.authorization) {
    return res.status(403).json({ message: 'auth error' });
  }

  next();
});

// Используем router в конце
server.use(router);

server.listen(8000, () => {
  console.log(`Server running on port 8000`);
});