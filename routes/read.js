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
//小说分类下小类别
router.get('/cats/lv2', async (ctx, next) => {
    try {
        let url = "http://api.zhuishushenqi.com/cats/lv2",
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
router.get('/rank/:id', async (ctx, next) => {
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
//换源
router.get('/toc', async (ctx, next) => {
    try {
        let url = `http://api.zhuishushenqi.com/toc?view=summary&${ctx.querystring}`,
            data = await request.getData(url);
        ctx.body = data
    } catch (error) {
        ctx.body = {
            error: "发生错误",
            detail: error
        }
    }
})
//小说目录
router.get('/toc/:id', async (ctx, next) => {
    try {
        let url = `http://api.zhuishushenqi.com${ctx.path}?view=chapters`,
            data = await request.getData(url);
        ctx.body = data
    } catch (error) {
        ctx.body = {
            error: "发生错误",
            detail: error
        }
    }
})
//小说章节内容
router.get('/chapter/:link', async (ctx, next) => {
    try {
        let url = `http://api.zhuishushenqi.com${ctx.path}?k=2124b73d7e2e1945&t=1468223717`,
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