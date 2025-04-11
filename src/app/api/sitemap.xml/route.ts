import { games } from '@/data/games';

// 分类名到英文slug的映射
const categoryToSlug = {
    "热门": "popular",
    "经典": "classic",
    "益智": "puzzle",
    "街机": "arcade",
    "休闲": "casual",
    "动作": "action",
    "射击": "shooting",
    "解谜": "mystery",
    "策略": "strategy",
    "冒险": "adventure"
};

// 获取所有游戏分类
const allCategories = Array.from(
    new Set(games.flatMap(game => game.categories))
).sort();

export async function GET() {
    // 构建站点地图XML
    const baseUrl = 'https://overstarry.com';

    // 创建XML头部
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    // 添加主页
    xml += `  <url>\n    <loc>${baseUrl}/</loc>\n    <changefreq>daily</changefreq>\n    <priority>1.0</priority>\n  </url>\n`;

    // 添加站点地图页面
    xml += `  <url>\n    <loc>${baseUrl}/sitemap</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.5</priority>\n  </url>\n`;

    // 添加其他主要页面
    const mainPages = ['about', 'privacy', 'terms'];
    mainPages.forEach(page => {
        xml += `  <url>\n    <loc>${baseUrl}/${page}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>\n`;
    });

    // 添加分类页面
    allCategories.forEach(category => {
        const slug = categoryToSlug[category as keyof typeof categoryToSlug] || category;
        xml += `  <url>\n    <loc>${baseUrl}/category/${slug}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
    });

    // 添加游戏详情页面
    games.forEach(game => {
        xml += `  <url>\n    <loc>${baseUrl}/game/${game.id}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>0.6</priority>\n  </url>\n`;
    });

    // 关闭XML
    xml += '</urlset>';

    // 返回XML响应
    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, max-age=86400, s-maxage=86400'
        }
    });
}