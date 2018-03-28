const router = require('koa-router')()
const request = require('../libs/index');

//小说分类
router.get('/cats', async (ctx, next) => {
    try {
        let url = "http://api.zhuishushenqi.com/cats/lv2/statistics",
            data = await request.getData(url);
        ctx.body = data
    } catch (error) {
        ctx.body = {
            error: "发生错误",
            detail: error
        }
    }
})
//小说分类列表
router.get('/book/by-categories', async (ctx, next) => {
    try {
        let url = `http://api.zhuishushenqi.com/book/by-categories?${ctx.querystring}`,
            data = await request.getData(url);
        ctx.body = data
    } catch (error) {
        ctx.body = {
            error: "发生错误",
            detail: error
        }
    }
})
//小说详情
router.get('/book/:id', async (ctx, next) => {
    try {
        let url = `http://api.zhuishushenqi.com${ctx.path}`,
            data = await request.getData(url);
        ctx.body = data
    } catch (error) {
        ctx.body = {
            error: "发生错误",
            detail: error
        }
    }
})
//小说排行榜类型
router.get('/rank', async (ctx, next) => {
    try {
        let url = `http://api.zhuishushenqi.com/ranking/gender`,
            data = await request.getData(url);
        ctx.body = data
    } catch (error) {
        ctx.body = {
            error: "发生错误",
            detail: error
        }
    }
})
//小说排行榜小说
router.get('/rank/:id', async(ctx, next) => {
    try {
        let url = `http://api.zhuishushenqi.com${ctx.path}`,
            data = await request.getData(url);
        ctx.body = data
    } catch (error) {
        ctx.body = {
            error: "发生错误",
            detail: error
        }
    }
})
module.exports = router