export default class Block{
    constructor(option = {}){
        this.width = option.width || 1.5
        this.height = option.height || 0.2
        this.type = option.type || 'normal'
        this.x = option.x
        this.y = option.y
        this.el = this.createEle()
    }

    createEle(){
        let el = document.createElement('div')
        el.className = 'blocks'
        el.style.width = `${this.width}rem`
        el.style.height = `${this.height}rem`
        el.style.left = `${this.x}rem`
        el.style.top = `${this.y}rem`
        el.style.background = this.type === 'danger' ? '#f40' : '#aaa'

        el.dataset.type = this.type
        el.dataset.x = this.x
        el.dataset.y = this.y



        return el
    }
}