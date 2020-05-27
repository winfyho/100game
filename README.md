## 滚动区域
- el dom元素
- fps 帧率
- speed 滚动速度 / 难度
- player 游戏角色
- blocks 所有障碍物
- timer 动画计时器

methods


- init() 初始化区域，挂载player

- startScroll() 开始全局动画
    - this.speed

- scroll() 每一帧滚动一次
    - 改变wraper位置
    - 改变player位置

- stopScroll() 停止滚动
    - this.timer
- checkPlayer() 检查角色位置

***
## 玩家角色player
- el dom元素
- width 角色宽度
- height 角色高度
- x 横向位置（left）
- y 纵向位置 （top）
- moveX 横向移动
- moveY 纵向移动
- direction 人脸方向：left / right
- falling 坠落状态
- fallSpeedX 水平坠落速度
- fallSpeedY 垂直坠落速度

methods
- init() 初始化dom元素
- handleMove 键盘移动 左/右
- move() 左右移动 moveX
- fall() 向下坠落
    - 向左速度
    - 向右速度
- isOnBlock() 是否在物体上，是则停止坠落

## 障碍物block
- type 类型：normal / danger
- width 宽度
- height 高度
- left 水平位置
- top 垂直位置