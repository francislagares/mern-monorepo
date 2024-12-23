const { env } = require('process');

/**
 * @description Root PM2 configuration file for monorepo
 */
module.exports = {
  apps: [
    {
      name: 'api-prod',
      cwd: './api',
      script: 'pnpm',
      args: 'node --env-file=.env.production dist/app/index.js',
      exec_mode: 'cluster',
      instance_var: 'INSTANCE_ID',
      instances: 2,
      autorestart: true,
      watch: false,
      ignore_watch: ['node_modules', 'logs'],
      max_memory_restart: '1G',
      merge_logs: true,
      output: './logs/access.log',
      error: './logs/error.log',
      env: {
        NODE_ENV: 'production',
        PORT: 4000,
      },
    },
    {
      name: 'api-dev',
      cwd: './api',
      script: 'node_modules/tsx/dist/cli.mjs',
      args: 'watch --env-file=.env.development.local src/app/index.ts',
      exec_mode: 'fork',
      instance_var: 'INSTANCE_ID',
      instances: 1,
      autorestart: true,
      watch: true,
      ignore_watch: ['node_modules', 'logs'],
      max_memory_restart: '1G',
      merge_logs: true,
      output: './logs/access.log',
      error: './logs/error.log',
      env: {
        NODE_ENV: 'development',
        PORT: 4000,
      },
    },
  ],
  deploy: {
    production: {
      user: 'user',
      host: '0.0.0.0',
      ref: 'origin/main',
      repo: 'git@github.com:repo.git',
      path: '/var/www/production',
      'post-deploy':
        'pnpm install && pnpm build && pm2 reload ecosystem.config.js --only api-prod',
    },
    staging: {
      user: 'user',
      host: '0.0.0.0',
      ref: 'origin/develop',
      repo: 'git@github.com:repo.git',
      path: '/var/www/staging',
      'post-deploy':
        'pnpm install && pnpm build && pm2 reload ecosystem.config.js --only api-dev',
    },
  },
};
