import dotenv from 'dotenv';

// const { _ } = minimist(process.argv.slice(2));

// /* 根据打包配置设置环境变量，先设置的优先级最高 */
// /* 优先级：.env.mode >  .env.local > .env */
dotenv.config({ path: process.cwd() + '/env/' + '.env.' + process.env.NODE_ENV, override: true });
dotenv.config({ path: process.cwd() + '/env/' + '.env.local', override: true });
dotenv.config({ path: process.cwd() + '/env/' + '.env', override: true });
