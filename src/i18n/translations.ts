export type Language = 'en' | 'zh';

export interface Translation {
  en: string;
  zh: string;
}

export interface Translations {
  [key: string]: Translation;
}

export const translations: Translations = {
  // Navigation
  'site.title': {
    en: 'HTML5 Games',
    zh: 'HTML5 游戏',
  },
  'search.placeholder': {
    en: 'Search games...',
    zh: '搜索游戏...',
  },

  // Home page
  'home.hero.title': {
    en: 'Free Online Games',
    zh: '免费在线小游戏',
  },
  'home.hero.subtitle': {
    en: 'Play instantly, no downloads, anytime and anywhere',
    zh: '即刻开始游戏，无需下载，随时随地畅玩',
  },
  'home.stats.totalGames': {
    en: 'Total Games',
    zh: '游戏总数',
  },
  'home.stats.categories': {
    en: 'Categories',
    zh: '分类',
  },
  'home.stats.totalPlays': {
    en: 'Total Plays',
    zh: '总游玩次数',
  },
  'home.section.topRated': {
    en: 'Top Rated',
    zh: '评分最高',
  },
  'home.section.mostPlayed': {
    en: 'Most Played',
    zh: '最多人玩',
  },
  'home.viewAll': {
    en: 'View All',
    zh: '查看全部',
  },
  'navbar.search.placeholder': {
    en: 'Search games...',
    zh: '搜索游戏...',
  },
  'language.switch': {
    en: 'Language',
    zh: '语言',
  },
  // Game page
  'game.backToHome': {
    en: '← Back to Home',
    zh: '← 返回首页',
  },
  'game.playTime': {
    en: 'min',
    zh: '分钟',
  },
  'game.plays': {
    en: 'plays',
    zh: '次游玩',
  },
  'game.startButton': {
    en: 'Start Game',
    zh: '开始游戏',
  },
  'game.loading': {
    en: 'Loading...',
    zh: '加载中...',
  },
  'game.fullscreen': {
    en: 'Fullscreen',
    zh: '全屏',
  },
  'game.restart': {
    en: 'Restart',
    zh: '重新开始',
  },
  'game.info': {
    en: 'Game Info',
    zh: '游戏说明',
  },
  'game.categories': {
    en: 'Categories',
    zh: '游戏分类',
  },
  'game.relatedGames': {
    en: 'Related Games',
    zh: '相关游戏',
  },
  'game.avgPlayTime': {
    en: 'Average Play Time',
    zh: '平均游戏时长',
  },
  'game.difficulty': {
    en: 'Difficulty',
    zh: '难度',
  },
  'game.releaseDate': {
    en: 'Release Date',
    zh: '发布日期',
  },
  'game.stats': {
    en: 'Stats',
    zh: '游戏统计',
  },
  // Category translations
  'category.热门': {
    en: 'Popular',
    zh: '热门',
  },
  'category.经典': {
    en: 'Classic',
    zh: '经典',
  },
  'category.益智': {
    en: 'Puzzle',
    zh: '益智',
  },
  'category.街机': {
    en: 'Arcade',
    zh: '街机',
  },
  'category.休闲': {
    en: 'Casual',
    zh: '休闲',
  },
  'category.动作': {
    en: 'Action',
    zh: '动作',
  },
  'category.射击': {
    en: 'Shooting',
    zh: '射击',
  },
  'category.解谜': {
    en: 'Mystery',
    zh: '解谜',
  },
  'category.策略': {
    en: 'Strategy',
    zh: '策略',
  },
  'category.冒险': {
    en: 'Adventure',
    zh: '冒险',
  },
  'category.3D': {
    en: '3D',
    zh: '3D',
  },
  'category.Sports': {
    en: 'Sports',
    zh: '体育',
  },
  'category.Sandbox': {
    en: 'Sandbox',
    zh: '沙盒',
  },
  'category.Popular': {
    en: 'Popular',
    zh: '热门',
  },
  'category.生存': {
    en: 'Survival',
    zh: '生存',
  },
  'category.Puzzle': {
    en: 'Puzzle',
    zh: '解谜',
  },
  'category.Science': {
    en: 'Science',
    zh: '科学',
  },
  'category.科幻': {
    en: 'Sci-Fi',
    zh: '科幻',
  },
  'category.Racing': {
    en: 'Racing',
    zh: '赛车',
  },
  'category.Strategy': {
    en: 'Strategy',
    zh: '策略',
  },
  'category.管理': {
    en: 'Management',
    zh: '管理',
  },
  'category.Classic': {
    en: 'Classic',
    zh: '经典',
  },
  'category.classic': {
    en: 'Classic',
    zh: '经典',
  },
  'category.艺术': {
    en: 'Art',
    zh: '艺术',
  },
  'category.Arcade': {
    en: 'Arcade',
    zh: '街机',
  },
  'category.Mystery': {
    en: 'Mystery',
    zh: '解谜',
  },
  'category.Parkour': {
    en: 'Parkour',
    zh: '跑酷',
  },
  'category.迷宫': {
    en: 'Maze',
    zh: '迷宫',
  },
  'category.Music': {
    en: 'Music',
    zh: '音乐',
  },
  'category.黑客': {
    en: 'Hacker',
    zh: '黑客',
  },
  'category.Innovative': {
    en: 'Innovative',
    zh: '创新',
  },
  'category.Action': {
    en: 'Action',
    zh: '动作',
  },
  'category.复古': {
    en: 'Retro',
    zh: '复古',
  },
  'category.Shooting': {
    en: 'Shooting',
    zh: '射击',
  },
  'category.工业': {
    en: 'Industrial',
    zh: '工业',
  },
  'category.恐怖': {
    en: 'Horror',
    zh: '恐怖',
  },
  'category.Idle': {
    en: 'Idle',
    zh: '放置',
  },
  'category.Text': {
    en: 'Text',
    zh: '文字',
  },
  'category.极简': {
    en: 'Minimalist',
    zh: '极简',
  },
  'category.格斗': {
    en: 'Fighting',
    zh: '格斗',
  },
  'category.模拟': {
    en: 'Simulation',
    zh: '模拟',
  },
  'category.Adventure': {
    en: 'Adventure',
    zh: '冒险',
  },
  'category.Casual': {
    en: 'Casual',
    zh: '休闲',
  },
  'category.games': {
    en: 'games',
    zh: '个游戏',
  },
  // Add missing translations
  'category.体育': {
    en: 'Sports',
    zh: '体育',
  },
  'category.创新': {
    en: 'Innovative',
    zh: '创新',
  },
  'category.放置': {
    en: 'Idle',
    zh: '放置',
  },
  'category.文字': {
    en: 'Text',
    zh: '文字',
  },
  'category.沙盒': {
    en: 'Sandbox',
    zh: '沙盒',
  },
  'category.科学': {
    en: 'Science',
    zh: '科学',
  },
  'category.竞速': {
    en: 'Racing',
    zh: '竞速',
  },
  'category.跑酷': {
    en: 'Parkour',
    zh: '跑酷',
  },
  'category.音乐': {
    en: 'Music',
    zh: '音乐',
  },
  // Footer translations
  'footer.about': {
    en: 'About',
    zh: '关于我们',
  },
  'footer.privacy': {
    en: 'Privacy',
    zh: '隐私政策',
  },
  'footer.terms': {
    en: 'Terms',
    zh: '使用条款',
  },
  'footer.contact': {
    en: 'Contact',
    zh: '联系我们',
  },
  // About page translations
  'about.title': {
    en: 'About Us',
    zh: '关于我们',
  },
  'about.mission.title': {
    en: 'Our Mission',
    zh: '我们的使命',
  },
  'about.mission.content': {
    en: 'We are dedicated to bringing you the best HTML5 gaming experience. Our platform offers a wide selection of free online games that you can play instantly without any downloads.',
    zh: '我们致力于为您带来最好的HTML5游戏体验。我们的平台提供丰富的免费在线游戏，无需下载即可立即开始游戏。',
  },
  'about.games.title': {
    en: 'Our Games',
    zh: '我们的游戏',
  },
  'about.games.content': {
    en: 'We carefully curate and maintain a collection of high-quality HTML5 games across various genres. From classic arcade games to modern puzzle adventures, there is something for everyone.',
    zh: '我们精心策划并维护着各种类型的高质量HTML5游戏集合。从经典街机游戏到现代解谜冒险，总有适合每个人的游戏。',
  },
  'about.contact.title': {
    en: 'Contact Us',
    zh: '联系我们',
  },
  'about.contact.content': {
    en: 'Have questions or suggestions? We would love to hear from you! Feel free to reach out to us via email.',
    zh: '有问题或建议？我们很乐意听取您的意见！请随时通过电子邮件与我们联系。',
  },
};

export const getTranslation = (key: string, language: Language): string => {
  if (!translations[key]) {
    console.warn(`Translation key not found: ${key}`);
    return key;
  }
  return translations[key][language];
};
