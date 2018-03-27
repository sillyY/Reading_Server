const router = require('koa-router')()
const request = require('../libs/index');


router.get('/cats', async (ctx, next) => {
    try {
        let url = "http://api.zhuishushenqi.com/cats/lv2/statistics",
            data = await request.getData(url);
        ctx.body = data
    } catch (error) {
        ctx.body = {
            error: "发生错误"
        }
    }
})
router.get('/book/by-categories', async (ctx, next) => {
    try {
        let url = `http://api.zhuishushenqi.com/book/by-categories?${ctx.querystring}`,
            data = await request.getData(url);
        ctx.body = data
    } catch (error) {
        ctx.body = {
            error: "发生错误"
        }
    }
})
router.get('/book/:id', async (ctx, next) => {
    try {
        let url = `http://api.zhuishushenqi.com${ctx.path}`,
            data = await request.getData(url);
        ctx.body = data
    } catch (error) {
        ctx.body = {
            error: "发生错误"
        }
    }
})
module.exports = router