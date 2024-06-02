import { readdirSync, statSync } from 'fs';
import { join, extname } from 'path';

function generateRoutes(dir) {
    const files = readdirSync(dir);
    const routes = [];

    files.forEach(file => {
        const filePath = join(dir, file);
        const stats = statSync(filePath);

        if (stats.isDirectory()) {
            routes.push(...generateRoutes(filePath));
        } else if (extname(file) === '.vue') {
            let route = filePath
                .replace(/\\/g, '/') // 将路径中的反斜杠替换为正斜杠
                .replace(/\.vue$/, '') // 删除文件扩展名
                .replace(/^src\/views\//, ''); // 删除 "src/views/" 前缀
            route = `<RouterLink to="/${route}">Home</RouterLink>`;
            routes.push(route);
        }
    });

    return routes;
}

const routes = generateRoutes('src/views');
console.log(routes);