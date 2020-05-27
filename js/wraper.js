export default {
    el: null,
    fps: 16.7,
    speed: 0.04,
    top: 0,
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
        this.timer = window.requestAnimationFrame(() => {
            this.scroll()
        })
    },
    scroll() {
        this.top -= this.speed
        this.el.style.transform = `translateY(${this.top}rem)`

        // this.player.fall()
        this.player.el.style.transform = `translateX(${this.player.moveX}rem) translateY(${this.player.moveY}rem)`



        this.timer = window.requestAnimationFrame(() => {
            this.scroll()
        })
        this.checkPlayer()

        
    },
    stopScroll() {
        window.cancelAnimationFrame(this.timer);
        this.player.el.style.background = '#f00'
    },

    checkPlayer() {
        let disBottom = document.documentElement.clientHeight - this.player.el.getBoundingClientRect().bottom
        let disTop = this.player.el.getBoundingClientRect().top

        if (disTop < 0 || disBottom < 0) {
            this.stopScroll()
            console.log('over');
        }
    }
}