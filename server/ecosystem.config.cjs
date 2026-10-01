// PM2 process file — keeps the API running and restarts it if it crashes or
// the server reboots.   Start:  pm2 start ecosystem.config.cjs && pm2 save
module.exports = {
  apps: [
    {
      name: 'kiran-nonwovens-api',
      script: 'index.js',
      cwd: __dirname, // so index.js finds its .env
      env: { NODE_ENV: 'production' },
      max_memory_restart: '300M',
      time: true, // timestamps in the logs
    },
  ],
};
