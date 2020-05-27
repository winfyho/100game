import wraper from "./wraper.js"
import player from "./player.js"
import Block from "./block.js"

const diffcults = [0.04, 0.06, 0.08, 0.1]
const degreeEle = document.getElementById('degree')
const blocks = []

player.init()

// 先初始化player, 后初始化wraper
wraper.init({
    player
})




// 游戏主动画进程
let timer = null
const animation = () => {
    wraper.scroll()

    player.fall()
    player.el.style.transform = `translateX(${player.moveX}rem) translateY(${player.moveY}rem)`

    // 改变游戏难度
    // let degree = parseInt(-wraper.top * 100 / 1000)
    // wraper.speed = diffcults[degree] || 0.1


    // degreeEle.innerText = `当前关卡${degree+1}`




    timer = window.requestAnimationFrame(animation)

    // 结束游戏
    let flag = wraper.checkPlayer()
    if (flag === false) {
        window.cancelAnimationFrame(timer);
        wraper.stopScroll()
    }
}

timer = window.requestAnimationFrame(animation)
