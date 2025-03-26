export interface Game {
  id: string;
  title: string; // Keep for backward compatibility
  titleTranslation: {
    en: string;
    zh: string;
  };
  description: string; // Keep for backward compatibility
  descriptionTranslation?: {
    en: string;
    zh: string;
  };
  path: string;
  thumbnail?: string;
  categories: string[];
  rating: number;
  plays: number;
}

export const games: Game[] = [
  {
    id: '2048',
    title: '2048',
    titleTranslation: {
      en: '2048',
      zh: '2048',
    },
    description: '益智数字游戏，合并方块以达到2048！挑战你的策略思维。',
    descriptionTranslation: {
      en: 'A puzzle game where you merge tiles to reach 2048! Challenge your strategic thinking.',
      zh: '益智数字游戏，合并方块以达到2048！挑战你的策略思维。',
    },
    path: '/html5/2048/index.html',
    categories: ['益智', '热门'],
    rating: 4.5,
    plays: 15800
  },
  {
    id: 'pacman',
    title: '吃豆人',
    titleTranslation: {
      en: 'Pac-Man',
      zh: '吃豆人',
    },
    description: '经典街机游戏，在迷宫中吃掉所有豆子，同时躲避可怕的幽灵。',
    descriptionTranslation: {
      en: 'Classic arcade game where you eat all dots in a maze while avoiding ghosts.',
      zh: '经典街机游戏，在迷宫中吃掉所有豆子，同时躲避可怕的幽灵。',
    },
    path: '/html5/pacman/index.html',
    categories: ['街机', '经典', '热门'],
    rating: 4.8,
    plays: 25600
  },
  {
    id: 'tetris',
    title: '俄罗斯方块',
    titleTranslation: {
      en: 'Tetris',
      zh: '俄罗斯方块',
    },
    description: '世界著名的方块消除游戏，考验你的空间思维和反应能力。',
    descriptionTranslation: {
      en: 'World-famous block-clearing game that tests your spatial thinking and reaction speed.',
      zh: '世界著名的方块消除游戏，考验你的空间思维和反应能力。',
    },
    path: '/html5/tetris/index.html',
    categories: ['益智', '经典', '热门'],
    rating: 4.7,
    plays: 32100
  },
  {
    id: 'snake',
    title: '贪吃蛇',
    titleTranslation: {
      en: 'Snake',
      zh: '贪吃蛇',
    },
    description: '控制蛇吃掉食物不断变长，考验你的反应能力和规划能力。',
    descriptionTranslation: {
      en: 'Control a snake to eat food and grow longer, testing your reaction and planning skills.',
      zh: '控制蛇吃掉食物不断变长，考验你的反应能力和规划能力。',
    },
    path: '/html5/snake/index.html',
    categories: ['街机', '经典'],
    rating: 4.3,
    plays: 18900
  },
  {
    id: 'flappybird',
    title: 'Flappy Bird',
    titleTranslation: {
      en: 'Flappy Bird',
      zh: 'Flappy Bird',
    },
    description: '控制小鸟穿过管道，看看你能飞多远！简单但极具挑战性。',
    descriptionTranslation: {
      en: 'Control a bird through pipes and see how far you can fly! Simple but challenging.',
      zh: '控制小鸟穿过管道，看看你能飞多远！简单但极具挑战性。',
    },
    path: '/html5/flappybird/index.html',
    categories: ['街机', '热门'],
    rating: 4.6,
    plays: 28400
  },
  {
    id: 'chess',
    title: '国际象棋',
    titleTranslation: {
      en: 'Chess',
      zh: '国际象棋',
    },
    description: '经典的国际象棋游戏，体验策略与智慧的较量。',
    descriptionTranslation: {
      en: 'Classic chess game, experience a battle of strategy and wisdom.',
      zh: '经典的国际象棋游戏，体验策略与智慧的较量。',
    },
    path: '/html5/chess/index.html',
    categories: ['策略', '益智'],
    rating: 4.4,
    plays: 12300
  },
  {
    id: 'breakout',
    title: '打砖块',
    titleTranslation: {
      en: 'Breakout',
      zh: '打砖块',
    },
    description: '经典的弹球打砖块游戏，考验你的反应能力和角度预判。',
    descriptionTranslation: {
      en: 'Classic ball and paddle game that tests your reaction time and angle prediction.',
      zh: '经典的弹球打砖块游戏，考验你的反应能力和角度预判。',
    },
    path: '/html5/breakout/index.html',
    categories: ['街机', '经典'],
    rating: 4.2,
    plays: 15600
  },
  {
    id: 'asteroids',
    title: '小行星',
    titleTranslation: {
      en: 'Asteroids',
      zh: '小行星',
    },
    description: '驾驶飞船在太空中射击小行星，躲避危险获得高分。',
    descriptionTranslation: {
      en: 'Pilot a spaceship to shoot asteroids in space, avoid dangers and get high scores.',
      zh: '驾驶飞船在太空中射击小行星，躲避危险获得高分。',
    },
    path: '/html5/asteroids/index.html',
    categories: ['射击', '街机'],
    rating: 4.1,
    plays: 9800
  },
  {
    id: 'connect3',
    title: '三消连线',
    titleTranslation: {
      en: 'Connect 3',
      zh: '三消连线',
    },
    description: '经典三消游戏，连接相同颜色的宝石获得分数。',
    descriptionTranslation: {
      en: 'Classic match-3 game, connect gems of the same color to score points.',
      zh: '经典三消游戏，连接相同颜色的宝石获得分数。',
    },
    path: '/html5/connect3/index.html',
    categories: ['益智', '休闲'],
    rating: 4.3,
    plays: 21400
  },
  {
    id: 'cookieclicker',
    title: '点击饼干',
    titleTranslation: {
      en: 'Cookie Clicker',
      zh: '点击饼干',
    },
    description: '休闲放置类游戏，点击制作饼干，解锁更多自动化设施。',
    descriptionTranslation: {
      en: 'Casual idle game where you click to make cookies and unlock more automated facilities.',
      zh: '休闲放置类游戏，点击制作饼干，解锁更多自动化设施。',
    },
    path: '/html5/cookieclicker/index.html',
    categories: ['休闲', '放置'],
    rating: 4.5,
    plays: 31200
  },
  {
    id: 'hextris',
    title: 'Hextris',
    titleTranslation: {
      en: 'Hextris',
      zh: 'Hextris',
    },
    description: '六边形版俄罗斯方块，创新玩法带来全新体验。',
    descriptionTranslation: {
      en: 'Hexagonal version of Tetris, innovative gameplay brings a brand new experience.',
      zh: '六边形版俄罗斯方块，创新玩法带来全新体验。',
    },
    path: '/html5/hextris/index.html',
    categories: ['益智', '创新'],
    rating: 4.4,
    plays: 16700
  },
  {
    id: 'racer',
    title: '赛车',
    titleTranslation: {
      en: 'Racer',
      zh: '赛车',
    },
    description: '3D赛车游戏，体验速度与激情，挑战各种赛道。',
    descriptionTranslation: {
      en: '3D racing game, experience speed and excitement, challenge various tracks.',
      zh: '3D赛车游戏，体验速度与激情，挑战各种赛道。',
    },
    path: '/html5/racer/index.html',
    categories: ['竞速', '体育'],
    rating: 4.2,
    plays: 19500
  },
  {
    id: 'adarkroom',
    title: '黑暗房间',
    titleTranslation: {
      en: 'A Dark Room',
      zh: '黑暗房间',
    },
    description: '文字冒险游戏，在黑暗中生存并探索神秘的世界。',
    descriptionTranslation: {
      en: 'Text adventure game, survive in darkness and explore a mysterious world.',
      zh: '文字冒险游戏，在黑暗中生存并探索神秘的世界。',
    },
    path: '/html5/adarkroom/index.html',
    categories: ['冒险', '文字'],
    rating: 4.7,
    plays: 23400
  },
  {
    id: 'minecraft',
    title: 'MC经典版',
    titleTranslation: {
      en: 'Minecraft Classic',
      zh: 'MC经典版',
    },
    description: '经典像素沙盒游戏，在方块世界中自由创造和冒险。',
    descriptionTranslation: {
      en: 'Classic pixel sandbox game where you can freely create and explore in a block world.',
      zh: '经典像素沙盒游戏，在方块世界中自由创造和冒险。',
    },
    path: '/html5/minecraft/index.html',
    categories: ['沙盒', '冒险', '热门'],
    rating: 4.9,
    plays: 45600
  },
  {
    id: 'geometrydash',
    title: '几何冲刺',
    titleTranslation: {
      en: 'Geometry Dash',
      zh: '几何冲刺',
    },
    description: '节奏跑酷游戏，随着音乐节奏跳跃和滑行。',
    descriptionTranslation: {
      en: 'A rhythm-based running game where you jump and slide to the beat of the music.',
      zh: '节奏跑酷游戏，随着音乐节奏跳跃和滑行。',
    },
    path: '/html5/geometrydash/index.html',
    categories: ['音乐', '动作'],
    rating: 4.6,
    plays: 27800
  },
  {
    id: 'chromedino',
    title: '小恐龙',
    titleTranslation: {
      en: 'Chrome Dino',
      zh: '小恐龙',
    },
    description: '谷歌浏览器断网小游戏，帮助小恐龙跳跃障碍物。',
    descriptionTranslation: {
      en: 'A browser-based game where you help a dinosaur jump over obstacles.',
      zh: '谷歌浏览器断网小游戏，帮助小恐龙跳跃障碍物。',
    },
    path: '/html5/chromedino/index.html',
    categories: ['街机', '休闲'],
    rating: 4.3,
    plays: 29500
  },
  {
    id: 'run3',
    title: 'Run 3',
    titleTranslation: {
      en: 'Run 3',
      zh: 'Run 3',
    },
    description: '在太空中奔跑，躲避障碍物，挑战重力。',
    descriptionTranslation: {
      en: 'A space-based game where you run and avoid obstacles while challenging gravity.',
      zh: '在太空中奔跑，躲避障碍物，挑战重力。',
    },
    path: '/html5/run3/index.html',
    categories: ['跑酷', '动作'],
    rating: 4.5,
    plays: 24700
  },
  {
    id: 'particleclicker',
    title: '粒子对撞机',
    titleTranslation: {
      en: 'Particle Clicker',
      zh: '粒子对撞机',
    },
    description: '模拟粒子物理实验，发现新粒子并获得研究成果。',
    descriptionTranslation: {
      en: 'A simulation of particle physics where you discover new particles and gain research results.',
      zh: '模拟粒子物理实验，发现新粒子并获得研究成果。',
    },
    path: '/html5/particleclicker/index.html',
    categories: ['益智', '科学'],
    rating: 4.2,
    plays: 8900
  },
  {
    id: 'spacecompany',
    title: '太空公司',
    titleTranslation: {
      en: 'Space Company',
      zh: '太空公司',
    },
    description: '建立自己的太空公司，探索宇宙资源。',
    descriptionTranslation: {
      en: 'A simulation of building a space company and exploring the universe.',
      zh: '建立自己的太空公司，探索宇宙资源。',
    },
    path: '/html5/spacecompany/index.html',
    categories: ['策略', '放置'],
    rating: 4.6,
    plays: 17800
  },
  {
    id: 'breaklock',
    title: '密码破解',
    titleTranslation: {
      en: 'Break Lock',
      zh: '密码破解',
    },
    description: '类似于Android解锁图案的益智游戏，破解密码模式。',
    descriptionTranslation: {
      en: 'A puzzle game where you break a lock by tracing a pattern similar to the one used in Android.',
      zh: '类似于Android解锁图案的益智游戏，破解密码模式。',
    },
    path: '/html5/breaklock/index.html',
    categories: ['益智', '解谜'],
    rating: 4.1,
    plays: 12400
  },
  {
    id: 'astray',
    title: '迷宫',
    titleTranslation: {
      en: 'Astray',
      zh: '迷宫',
    },
    description: '3D迷宫游戏，通过倾斜控制小球到达终点。',
    descriptionTranslation: {
      en: 'A 3D maze game where you control a ball to reach the end.',
      zh: '3D迷宫游戏，通过倾斜控制小球到达终点。',
    },
    path: '/html5/astray/index.html',
    categories: ['益智', '3D'],
    rating: 4.3,
    plays: 14600
  },
  {
    id: 'towermaster1',
    title: '叠叠乐',
    titleTranslation: {
      en: 'Tower Master',
      zh: '叠叠乐',
    },
    description: '考验手速与耐心的叠塔游戏，看看你能叠多高。',
    descriptionTranslation: {
      en: 'A puzzle game where you test your hand speed and patience by stacking towers.',
      zh: '考验手速与耐心的叠塔游戏，看看你能叠多高。',
    },
    path: '/html5/towermaster/index.html',
    categories: ['休闲', '益智'],
    rating: 4.4,
    plays: 19200
  },
  {
    id: 'radiusraid1',
    title: '半径突袭',
    titleTranslation: {
      en: 'Radius Raid',
      zh: '半径突袭',
    },
    description: '射击游戏，在圆形空间中躲避敌人的攻击。',
    descriptionTranslation: {
      en: 'A shooting game where you avoid enemy attacks in a circular space.',
      zh: '射击游戏，在圆形空间中躲避敌人的攻击。',
    },
    path: '/html5/radiusraid/index.html',
    categories: ['射击', '动作'],
    rating: 4.2,
    plays: 11300
  },
  {
    id: 'trimps1',
    title: 'Trimps',
    titleTranslation: {
      en: 'Trimps',
      zh: 'Trimps',
    },
    description: '复杂的放置类游戏，管理资源和军队征服新区域。',
    descriptionTranslation: {
      en: 'A complex placement game where you manage resources and armies to conquer new territories.',
      zh: '复杂的放置类游戏，管理资源和军队征服新区域。',
    },
    path: '/html5/trimps/index.html',
    categories: ['策略', '放置'],
    rating: 4.7,
    plays: 15900
  },
  {
    id: 'asciispace',
    title: 'ASCII太空',
    titleTranslation: {
      en: 'ASCII Space',
      zh: 'ASCII太空',
    },
    description: '复古风格的ASCII码太空射击游戏，体验独特的文字艺术风格。',
    descriptionTranslation: {
      en: 'A nostalgic ASCII space shooter game where you experience the unique art of text-based graphics.',
      zh: '复古风格的ASCII码太空射击游戏，体验独特的文字艺术风格。',
    },
    path: '/html5/asciispace/index.html',
    categories: ['射击', '复古'],
    rating: 4.0,
    plays: 7800
  },
  {
    id: 'backcountry',
    title: '荒野探险',
    titleTranslation: {
      en: 'Backcountry',
      zh: '荒野探险',
    },
    description: '在荒野中探险生存，寻找资源并面对各种挑战。',
    descriptionTranslation: {
      en: 'An adventure game where you explore the wilderness, find resources, and face various challenges.',
      zh: '在荒野中探险生存，寻找资源并面对各种挑战。',
    },
    path: '/html5/backcountry/index.html',
    categories: ['冒险', '生存'],
    rating: 4.2,
    plays: 9200
  },
  {
    id: 'blackholesquare',
    title: '黑洞方块',
    titleTranslation: {
      en: 'Black Hole Square',
      zh: '黑洞方块',
    },
    description: '创新的解谜游戏，利用黑洞效应解决谜题。',
    descriptionTranslation: {
      en: 'An innovative puzzle game where you use black hole effects to solve puzzles.',
      zh: '创新的解谜游戏，利用黑洞效应解决谜题。',
    },
    path: '/html5/blackholesquare/index.html',
    categories: ['解谜', '创新'],
    rating: 4.1,
    plays: 8500
  },
  {
    id: 'bounceback',
    title: '弹球回旋',
    titleTranslation: {
      en: 'Bounce Back',
      zh: '弹球回旋',
    },
    description: '考验反应的弹球游戏，让球体精准反弹。',
    descriptionTranslation: {
      en: 'A reflex-based puzzle game where you guide a ball to bounce back with precision.',
      zh: '考验反应的弹球游戏，让球体精准反弹。',
    },
    path: '/html5/bounceback/index.html',
    categories: ['街机', '休闲'],
    rating: 4.0,
    plays: 11200
  },
  {
    id: 'captaincallisto',
    title: '卡利斯托船长',
    titleTranslation: {
      en: 'Captain Callisto',
      zh: '卡利斯托船长',
    },
    description: '太空探险游戏，指挥飞船探索未知的宇宙。',
    descriptionTranslation: {
      en: 'A space exploration game where you command a ship to explore unknown galaxies.',
      zh: '太空探险游戏，指挥飞船探索未知的宇宙。',
    },
    path: '/html5/captaincallisto/index.html',
    categories: ['冒险', '科幻'],
    rating: 4.3,
    plays: 13400
  },
  {
    id: 'chromaincident',
    title: '色彩事件',
    titleTranslation: {
      en: 'Chroma Incident',
      zh: '色彩事件',
    },
    description: '独特的色彩解谜游戏，探索色彩的奥秘。',
    descriptionTranslation: {
      en: 'A unique puzzle game where you explore the mysteries of color.',
      zh: '独特的色彩解谜游戏，探索色彩的奥秘。',
    },
    path: '/html5/chromaincident/index.html',
    categories: ['解谜', '艺术'],
    rating: 4.2,
    plays: 9800
  },
  {
    id: 'edgenotfound',
    title: '边缘未知',
    titleTranslation: {
      en: 'Edge Not Found',
      zh: '边缘未知',
    },
    description: '探索未知边界的冒险游戏，发现隐藏的秘密。',
    descriptionTranslation: {
      en: 'An adventure game where you explore unknown boundaries and discover hidden secrets.',
      zh: '探索未知边界的冒险游戏，发现隐藏的秘密。',
    },
    path: '/html5/edgenotfound/index.html',
    categories: ['冒险', '解谜'],
    rating: 4.1,
    plays: 8900
  },
  {
    id: 'evilglitch',
    title: '邪恶故障',
    titleTranslation: {
      en: 'Evil Glitch',
      zh: '邪恶故障',
    },
    description: '在充满故障的世界中生存，对抗系统错误。',
    descriptionTranslation: {
      en: 'A survival game where you navigate a world filled with system errors.',
      zh: '在充满故障的世界中生存，对抗系统错误。',
    },
    path: '/html5/evilglitch/index.html',
    categories: ['动作', '科幻'],
    rating: 4.2,
    plays: 10500
  },
  {
    id: 'factoryballsforever',
    title: '永恒工厂球',
    titleTranslation: {
      en: 'Factory Balls Forever',
      zh: '永恒工厂球',
    },
    description: '制作和处理工厂小球，解决各种工业难题。',
    descriptionTranslation: {
      en: 'A puzzle game where you create and process factory balls to solve industrial challenges.',
      zh: '制作和处理工厂小球，解决各种工业难题。',
    },
    path: '/html5/factoryballsforever/index.html',
    categories: ['益智', '工业'],
    rating: 4.3,
    plays: 12600
  },
  {
    id: 'konnekt',
    title: '连接',
    titleTranslation: {
      en: 'Konnekt',
      zh: '连接',
    },
    description: '创新的连接解谜游戏，连接各种元素完成挑战。',
    descriptionTranslation: {
      en: 'An innovative puzzle game where you connect various elements to complete challenges.',
      zh: '创新的连接解谜游戏，连接各种元素完成挑战。',
    },
    path: '/html5/konnekt/index.html',
    categories: ['解谜', '创新'],
    rating: 4.2,
    plays: 11800
  },
  {
    id: 'ninjavsevilcorp',
    title: '忍者大战邪恶公司',
    titleTranslation: {
      en: 'Ninja vs Evil Corp',
      zh: '忍者大战邪恶公司',
    },
    description: '扮演忍者对抗邪恶公司，展现你的武术技能。',
    descriptionTranslation: {
      en: 'A ninja-style action game where you defend against an evil corporation.',
      zh: '扮演忍者对抗邪恶公司，展现你的武术技能。',
    },
    path: '/html5/ninjavsevilcorp/index.html',
    categories: ['动作', '格斗'],
    rating: 4.4,
    plays: 15600
  },
  {
    id: 'packabunchas',
    title: '包裹大师',
    titleTranslation: {
      en: 'Pack a Bunchas',
      zh: '包裹大师',
    },
    description: '考验空间思维的包裹整理游戏。',
    descriptionTranslation: {
      en: 'A puzzle game where you test spatial reasoning to organize packages.',
      zh: '考验空间思维的包裹整理游戏。',
    },
    path: '/html5/packabunchas/index.html',
    categories: ['益智', '休闲'],
    rating: 4.1,
    plays: 9400
  },
  {
    id: 'pushback',
    title: '推回',
    titleTranslation: {
      en: 'Push Back',
      zh: '推回',
    },
    description: '创新的推箱子类游戏，需要巧妙规划路线。',
    descriptionTranslation: {
      en: 'An innovative push puzzle game where you plan routes to move blocks.',
      zh: '创新的推箱子类游戏，需要巧妙规划路线。',
    },
    path: '/html5/pushback/index.html',
    categories: ['益智', '策略'],
    rating: 4.0,
    plays: 8700
  },
  {
    id: 'q1k3',
    title: 'Q1K3',
    titleTranslation: {
      en: 'Q1K3',
      zh: 'Q1K3',
    },
    description: '极简风格的射击游戏，体验纯粹的游戏乐趣。',
    descriptionTranslation: {
      en: 'A minimalist-style shooter where you experience pure game乐趣。',
      zh: '极简风格的射击游戏，体验纯粹的游戏乐趣。',
    },
    path: '/html5/q1k3/index.html',
    categories: ['射击', '极简'],
    rating: 4.1,
    plays: 9100
  },
  {
    id: 'radiusraid2',
    title: '半径突袭',
    titleTranslation: {
      en: 'Radius Raid',
      zh: '半径突袭',
    },
    description: '太空射击游戏，在圆形战场中击退敌人的进攻。',
    descriptionTranslation: {
      en: 'A space shooter where you defend against enemy attacks in a circular battlefield.',
      zh: '太空射击游戏，在圆形战场中击退敌人的进攻。',
    },
    path: '/html5/radiusraid/index.html',
    categories: ['射击', '动作'],
    rating: 4.4,
    plays: 18900
  },
  {
    id: 'retrohaunt',
    title: '复古幽灵',
    titleTranslation: {
      en: 'Retro Haunt',
      zh: '复古幽灵',
    },
    description: '复古风格的恐怖冒险游戏，探索幽灵庄园。',
    descriptionTranslation: {
      en: 'A retro-style horror adventure game where you explore a haunted mansion.',
      zh: '复古风格的恐怖冒险游戏，探索幽灵庄园。',
    },
    path: '/html5/retrohaunt/index.html',
    categories: ['冒险', '恐怖'],
    rating: 4.2,
    plays: 11200
  },
  {
    id: 'roadblocks',
    title: '道路阻塞',
    titleTranslation: {
      en: 'Road Blocks',
      zh: '道路阻塞',
    },
    description: '交通管理益智游戏，合理调度车辆避免堵塞。',
    descriptionTranslation: {
      en: 'A traffic management puzzle game where you schedule vehicles to avoid traffic jams.',
      zh: '交通管理益智游戏，合理调度车辆避免堵塞。',
    },
    path: '/html5/roadblocks/index.html',
    categories: ['益智', '策略'],
    rating: 4.2,
    plays: 12400
  },
  {
    id: 'shuttledeck',
    title: '航天甲板',
    titleTranslation: {
      en: 'Shuttle Deck',
      zh: '航天甲板',
    },
    description: '管理航天飞机的停靠和发射，考验调度能力。',
    descriptionTranslation: {
      en: 'Manage the docking and launch of space shuttles, test your scheduling skills.',
      zh: '管理航天飞机的停靠和发射，考验调度能力。',
    },
    path: '/html5/shuttledeck/index.html',
    categories: ['策略', '管理'],
    rating: 4.3,
    plays: 10800
  },
  {
    id: 'sleepingbeauty',
    title: '睡美人',
    titleTranslation: {
      en: 'Sleeping Beauty',
      zh: '睡美人',
    },
    description: '唯美风格的解谜冒险游戏，探索童话世界。',
    descriptionTranslation: {
      en: 'A beautiful puzzle adventure game where you explore a fairy tale world.',
      zh: '唯美风格的解谜冒险游戏，探索童话世界。',
    },
    path: '/html5/sleepingbeauty/index.html',
    categories: ['冒险', '解谜'],
    rating: 4.4,
    plays: 14500
  },
  {
    id: 'spacegarden',
    title: '太空花园',
    titleTranslation: {
      en: 'Space Garden',
      zh: '太空花园',
    },
    description: '在太空中种植和培育植物，建造美丽的花园。',
    descriptionTranslation: {
      en: 'Grow and cultivate plants in space, build a beautiful garden.',
      zh: '在太空中种植和培育植物，建造美丽的花园。',
    },
    path: '/html5/spacegarden/index.html',
    categories: ['模拟', '休闲'],
    rating: 4.2,
    plays: 11600
  },
  {
    id: 'spacehuggers',
    title: '太空拥抱者',
    titleTranslation: {
      en: 'Space Huggers',
      zh: '太空拥抱者',
    },
    description: '独特的太空射击游戏，与外星生物互动。',
    descriptionTranslation: {
      en: 'A unique space shooter where you interact with alien creatures.',
      zh: '独特的太空射击游戏，与外星生物互动。',
    },
    path: '/html5/spacehuggers/index.html',
    categories: ['射击', '科幻'],
    rating: 4.1,
    plays: 10200
  },
  {
    id: 'themazeofspacegoblins',
    title: '太空哥布林迷宫',
    titleTranslation: {
      en: 'The Maze of Space Goblins',
      zh: '太空哥布林迷宫',
    },
    description: '在迷宫中躲避太空哥布林，寻找出口。',
    descriptionTranslation: {
      en: 'Avoid space goblins in a maze, find the exit.',
      zh: '在迷宫中躲避太空哥布林，寻找出口。',
    },
    path: '/html5/themazeofspacegoblins/index.html',
    categories: ['迷宫', '冒险'],
    rating: 4.0,
    plays: 9600
  },
  {
    id: 'towermaster2',
    title: '塔楼大师',
    titleTranslation: {
      en: 'Tower Master',
      zh: '塔楼大师',
    },
    description: '建造和管理塔楼，平衡各种资源和需求。',
    descriptionTranslation: {
      en: 'Build and manage towers, balance various resources and demands.',
      zh: '建造和管理塔楼，平衡各种资源和需求。',
    },
    path: '/html5/towermaster/index.html',
    categories: ['策略', '管理'],
    rating: 4.3,
    plays: 13200
  },
  {
    id: 'trimps2',
    title: 'Trimps',
    titleTranslation: {
      en: 'Trimps',
      zh: 'Trimps',
    },
    description: '独特的增量放置类游戏，管理Trimps种族的发展。',
    descriptionTranslation: {
      en: 'A unique idle game where you manage the development of Trimps.',
      zh: '独特的增量放置类游戏，管理Trimps种族的发展。',
    },
    path: '/html5/trimps/index.html',
    categories: ['放置', '策略'],
    rating: 4.5,
    plays: 16800
  },
  {
    id: 'underrun',
    title: '地下狂奔',
    titleTranslation: {
      en: 'Under Run',
      zh: '地下狂奔',
    },
    description: '在地下世界中奔跑和战斗，躲避危险。',
    descriptionTranslation: {
      en: 'In a underground world, run and fight, avoid danger.',
      zh: '在地下世界中奔跑和战斗，躲避危险。',
    },
    path: '/html5/underrun/index.html',
    categories: ['动作', '跑酷'],
    rating: 4.2,
    plays: 12100
  },
  {
    id: 'xx142-b2exe',
    title: 'XX142-B2.exe',
    titleTranslation: {
      en: 'XX142-B2.exe',
      zh: 'XX142-B2.exe',
    },
    description: '复古风格的黑客模拟游戏，入侵并破解系统。',
    descriptionTranslation: {
      en: 'A nostalgic hacker simulation game where you can break into and hack systems.',
      zh: '复古风格的黑客模拟游戏，入侵并破解系统。',
    },
    path: '/html5/xx142-b2exe/index.html',
    categories: ['策略', '黑客'],
    rating: 4.3,
    plays: 11400
  }
];
