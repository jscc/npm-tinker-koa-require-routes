const assert = require('assert')
const rr = require('../index')
const Koa = require('koa')
const app = new Koa()
const axios = require('axios')
const path = require('path')

describe(`自动注册 routes `, function() {
  it(`require routes`, function() {
    rr.bind(app).load(path.resolve(__dirname, './routes'))
    // console.log(app)
    let server = app.listen(4321)
    return new Promise((resolve, rej) => {
      setTimeout(() => {
        axios.get('http://localhost:4321/login').then(function(res) {
          // assert.fail(`成功`)  
          // server.close()
          resolve()
        // assert.equal(res.data, 'login page')
        }).catch(function(err) {
          // console.log(err)
          // server.close()
          rej()
        })
      }, 300);
    }).then(res => {
      assert.ok(`验证成功`)
    }).catch(err => {
      assert.fail(`验证失败`)
    }).finally( () => {
      // server.close()
    })
    
  })


})


