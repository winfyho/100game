## 滚动区域

- fps帧率
- speed滚动速度 / 难度
- player 游戏角色
- blocks 所有障碍物


methods

- init() 初始化区域

- startScroll() 开始滚动
    - this.speed
- stopScroll() 停止滚动
    - this.timer
- checkPlayer() 检查角色位置


## 玩家角色player
- width 角色宽度
- height 角色高度
- x 横向位置（transform或者left）
- y 纵向位置 （top & e.pageY）
- direction 移动方向：left / right
- fallSpeed 坠落速度

methods

- handleMove 键盘移动 左/右
- fall 坠落
    - 向左速度
    - 向右速度

## 障碍物block
- type 类型：normal / danger
- width 宽度
- height 高度
- left 水平位置
- top 垂直位置