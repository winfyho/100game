import wraper from "./wraper.js"
import player from "./player.js"
player.init()

// 先初始化player, 后初始化wraper
wraper.init({
    player
})

