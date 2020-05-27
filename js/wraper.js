import Block from "./block.js"


export default {
    el: null,
    fps: 16.7,
    speed: 0.04,
    top: 0,
    dis:0,
    player: null,
    blocks: [],
    timer: null,

    init(config) {
        this.player = config.player || document.getElementById('player')
        this.el = document.getElementById('wraper')
        this.el.appendChild(this.player.el)

        console.log(this);

        setTimeout(() => {
            this.startScroll()
        }, 100);

    },

    startScroll() {
        this.createBlocks({
            num:5,
            top:6
        })
        // this.timer = window.requestAnimationFrame(() => {
        //     this.scroll()
        // })
    },
    scroll() {
        this.top -= this.speed
        this.el.style.transform = `translateY(${this.top}rem)`   
        
        let dis = parseInt(-this.top * 100 / 600)
        if(this.dis !== dis){
            console.log(-this.top);
            this.createBlocks({
                num:4,
                top:-this.top + 13
            })
            this.dis = dis

        }
        
    },
    stopScroll() {
        this.player.el.style.background = '#f00'
    },

    checkPlayer() {
        let disBottom = document.documentElement.clientHeight - this.player.el.getBoundingClientRect().bottom
        let disTop = this.player.el.getBoundingClientRect().top

        if (disTop < 0 || disBottom < 0) {
            console.log('over');
            return false
        }
    },

    createBlocks(option = {}){
        let blocks = []
        for (let i = 0; i < option.num; i++) {
            blocks.push(new Block({
                x:Math.floor(Math.random()*5)*1.5,
                y:option.top + i*(2.2)
            }))
        }
        console.log(blocks);
        blocks.forEach(b => {
            this.el.appendChild(b.el)
        })
    }
}