const KoaRouter = require('koa-router')
const router = new KoaRouter({
  prefix:'/logout'
})

router.get('/', async ctx => {
  ctx.body = `logout success`
})

module.exports = router