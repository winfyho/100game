import Block from "./block.js"


export default {
    el: null,
    fps: 16.7,
    speed: 0.04,
    top: 0,
    dis: 0,
    player: null,
    blocks: [],
    numbers: ``,
    index: 1,
    timer: null,

    degree:1,

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
        this.createNumbers(this.index, 40)
        this.createBlocks({
            num: 20,
            top: 6
        })
        this.player.curBlock = this.blocks[0]
        // this.timer = window.requestAnimationFrame(() => {
        //     this.scroll()
        // })
    },
    scroll() {
        console.log(this.top);
        
        if(-this.top > this.degree*20){
            this.degree += 1
            this.speed += 0.01
            this.player.fallSpeedY += 0.018
        }
        this.top -= this.speed
        this.el.style.transform = `translateY(${this.top}rem)`

        let dis = parseInt(-this.top / 20)
        if (this.dis !== dis && dis >= 1) {
            console.log(dis);
            this.createNumbers(this.index, 20)
            this.createBlocks({
                num: 8,
                top: this.index
            })
            console.log(this.index);

            this.dis = dis
        }

        if (this.player.falling) {
            console.log(this.blocks);
            
            this.blocks.filter(item => {
                return item.y > (this.player.moveY + this.player.height * 0.8) &&
                    item.y < this.player.moveY + this.player.height + 0.2
            }).forEach(item => {
                if (item.y > (this.player.moveY + this.player.height*0.7) &&
                    item.y < this.player.moveY + this.player.height&&
                    item.x > this.player.moveX - 1.3 &&
                    item.x < this.player.moveX + 1.3) {
                    // console.log('yes', item);
                    item.el.style.background = item.type === 'danger' ? '#f00' : '#fff'
                    this.player.falling = false
                    this.player.curBlock = item
                    this.player.stopFall()
                }
            })
        }



    },
    stopScroll() {
        this.player.el.style.background = '#f00'
        console.log(this.blocks);

    },

    checkPlayer() {
        let disBottom = document.documentElement.clientHeight - this.player.el.getBoundingClientRect().bottom
        let disTop = this.player.el.getBoundingClientRect().top

        if (disTop < 0 || disBottom < 0) {
            console.log('over');
            return false
        }
    },

    createBlocks(option = {}) {
        let blocks = []
        for (let i = 0; i < option.num; i++) {
            blocks.push(new Block({
                x: Math.floor(Math.random() * 5) * 1.5,
                y: option.top + i * (2.4)
            }))
        }
        console.log(blocks);

        this.blocks = this.blocks.slice(option.num).concat(blocks)
        blocks.forEach(b => {
            this.el.appendChild(b.el)
        })
    },

    createNumbers(start, size) {
        for (let i = start; i < (start + size); i++) {
            this.numbers += `<li>${i}</li>`
        }
        const wraperNum = document.getElementById('wraper-num')
        wraperNum.innerHTML = this.numbers
        this.index = start + size
    }
}