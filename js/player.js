export default {
    el: null,

    width: 1,
    height: 1.5,
    x: 0,
    y: 0,

    moveX:3,
    moveY:3,

    direction: 'normal',
    moveSpeed: 0.06,

    falling: false,
    fallSpeedX: 0.02,
    fallSpeedY: 0.04,
    fallTimer: null,

    init() {
        const player = document.createElement('div')
        player.id = 'player'
        player.style.width = `${this.width}rem`
        player.style.height = `${this.height}rem`
        player.style.background = `#0f0`
        player.style.left = `${this.x}rem`
        player.style.top = `${this.y}rem`
        player.style.transform = `translateX(${this.moveX}rem) translateY(${this.moveY}rem)`



        this.el = player
        this.handleKeydown()

        console.log(this);
        return this
    },

    handleKeydown() {
        document.addEventListener('keydown', (e) => {

            if (e.keyCode === 37) {
                this.direction = 'left'
                this.move()
            } else if (e.keyCode === 39) {
                this.direction = 'right'
                this.move()
            } 
        })
    },
    move() {
        
        if (this.direction === 'left') {
            this.moveX -= this.moveSpeed
        } else if (this.direction === 'right') {
            this.moveX += this.moveSpeed
        }
        // 边界处理
        if (this.moveX < 0) {
            this.moveX = 0
        }
        if (this.moveX > 7.5 - this.width) {
            this.moveX = 7.5 - this.width
        }
    },
    fall(){
        this.moveY += this.fallSpeedY
    },
    isOnBlock() {
        setTimeout(() => {
            this.stopFall()
        }, 500);
    },
    
}