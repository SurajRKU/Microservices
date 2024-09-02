const Koa = require('koa');
const Router = require('koa-router');
const db = require('./db.json');

const app = new Koa();
const router = new Router();

// Log requests
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log('%s %s - %s', ctx.method, ctx.url, ms);
});

// Define routes
router.get('/api/posts/in-thread/:threadId', async (ctx) => {
  const id = parseInt(ctx.params.threadId, 10);
  ctx.body = db.posts.filter((post) => post.thread === id);
});

router.get('/api/posts', async (ctx) => {
  ctx.body = db.posts;
});

router.get('/api/posts/by-user/:userId', async (ctx) => {
  const id = parseInt(ctx.params.userId, 10);
  ctx.body = db.posts.filter((post) => post.user === id);
});

router.get('/api/', async (ctx) => {
  ctx.body = "API ready to receive requests";
});

router.get('/', async (ctx) => {
  ctx.body = "Ready to receive requests";
});

// Apply the routes to the application
app.use(router.routes());
app.use(router.allowedMethods());

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
