/*
 * @Author: ecitlm 
 * @Date: 2017-12-06 16:20:03 
 * @Last Modified by: ecitlm
 * @Last Modified time: 2017-12-19 09:59:15
 */

import { Router } from 'express'
const router = Router()

// const http = require('http')
// const router = express.Router()
    // const routerConfig=require('./config/routes')
// const filter = require('./utils/filter_sign')
    //
var path = require('path')
router.all('*', function(req, res, next) {
    // res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'X-Requested-With')
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
    res.header('X-Powered-By', ' 3.2.1')
    next()
        //   if (filter.simpleFilter(req, res)) {
        //   }
})

// const index = require('./routes/web/index')
const photo_type = require('./routes/api/photo/photo_type')
const photo_list = require('./routes/api/photo/photo_list')
const photo_view = require('./routes/api/photo/photo_view')
const huaban = require('./routes/api/photo/huaban')
const jandan = require('./routes/api/photo/jandan')
    // 音樂
const plist = require('./routes/api/music/plist')
const plist_songs = require('./routes/api/music/plist_songs')
const rank_list = require('./routes/api/music/rank_list')
const rank_list_info = require('./routes/api/music/rank_list_info')
const song_info = require('./routes/api/music/song_info')
const song_lrc = require('./routes/api/music/song_lrc')
const new_songs = require('./routes/api/music/new_songs')
const singer_classify = require('./routes/api/music/singer_classify')
const singer_list = require('./routes/api/music/singer_list')
const singer_info = require('./routes/api/music/singer_info')
const music_search = require('./routes/api/music/search')
const web_frame = require('./routes/api/it/web_frame')
const daily_list = require('./routes/api/it/daily_list')
const daily_info = require('./routes/api/it/daily_info')
const joke_list = require('./routes/api/joke/joke_list')
const joke_img = require('./routes/api/joke/joke_img')
const joke_photo = require('./routes/api/joke/joke_photo')
const news_list = require('./routes/api/news/news_list')
const video_list = require('./routes/api/news/video_list')
const news_detail = require('./routes/api/news/news_detail')
const job_list = require('./routes/api/job/job_list')
const job_info = require("./routes/api/job/job_info");
// router.use('/', index)
router.use('/api/photo_type', photo_type)
router.use('/api/huaban', huaban)
router.use('/api/photo_list', photo_list)
router.use('/api/photo_view', photo_view)
router.use('/api/rank_list', rank_list)
router.use('/api/rank_list_info', rank_list_info)
router.use('/api/song_info', song_info)
router.use('/api/song_lrc', song_lrc)
router.use('/api/plist', plist)
router.use('/api/plist_songs', plist_songs)
router.use('/api/new_songs', new_songs)
router.use('/api/singer_classify', singer_classify)
router.use('/api/singer_list', singer_list)
router.use('/api/singer_info', singer_info)
router.use('/api/music_search', music_search)
router.use('/api/web_frame', web_frame)
router.use('/api/daily_list', daily_list)
router.use('/api/daily_info', daily_info)
router.use('/api/joke_list', joke_list)
router.use('/api/joke_img', joke_img)
router.use('/api/joke_photo', joke_photo)
router.use('/api/jandan', jandan)
router.use('/api/news_list', news_list)
router.use('/api/video_list', video_list)
router.use('/api/news_detail', news_detail)
router.use('/api/job_list', job_list)
router.use("/api/job_info", job_info);
// web
const web_daily = require('./routes/web/daily_list')
const web_daily_info = require('./routes/web/daily_info')
const web_photo = require('./routes/web/photo')
const web_jandan = require('./routes/web/jandan')
router.use('/web/daily_list', web_daily)
router.use('/web/daily_info', web_daily_info)
router.use('/web/photo', web_photo)
router.use('/web/jandan', web_jandan)

// 测试
router.use('/test', function(req, res) {
    res.send({
        "code": 200,
        "data": [
            {
                "title": "做了个美梦，吓醒了。～～～～割～～～～；做梦刚开始好像是抱着老婆的咪咪喊别人的名字，后来想 ",
                "source": "糗事百科",
                "digest": "做了个美梦，吓醒了。～～～～割～～～～；做梦刚开始好像是抱着老婆的咪咪喊别人的名字，后来想想不对啊，应该抱着别人喊老婆才对，这样老婆就会高兴了，突然就惊醒了，我的老婆在哪呢。\u0001[流鼻血]\u0001[流鼻血]\u0001[流鼻血]"
            },
            {
                "title": "奶奶去世四十天了，生前最大的愿望就是想看到我女朋友，我的高中同学在那个医院做护士，是她帮了我这个忙，冒充了十分钟，她应该不玩段子的，还是衷心祝所有医院的天使一生平安！",
                "source": "内涵段子",
                "digest": "奶奶去世四十天了，生前最大的愿望就是想看到我女朋友，我的高中同学在那个医院做护士，是她帮了我这个忙，冒充了十分钟，她应该不玩段子的，还是衷心祝所有医院的天使一生平安！"
            }
        ],
        "msg": ""
    })
})
// app.use(router)
// app.listen(3000)
console.log('app start success port:3000')

export default router