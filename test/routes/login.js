const KoaRouter = require('koa-router')
const router = new KoaRouter({
  prefix: '/login'
})

router.get('/', async ctx => {
  ctx.body = `login page`
})

router.post('/', async ctx => {
  ctx.body = `login success`
})

module.exports = router