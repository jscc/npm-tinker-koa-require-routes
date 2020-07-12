const fsr = require('@jscc/file-selector')
let koaApp = null
module.exports = {
  bind(app) {
    koaApp = app
    return this
  },
  load(dir) {
    if (!koaApp) {
      throw new Error(`Please bind app first`)
    }
    fsr.select(dir, 'js').forEach(path => {
      koaApp.use(require(path).routes())
    })
  }
}
