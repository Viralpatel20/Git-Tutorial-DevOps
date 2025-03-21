const config = {
  port: process.env.PORT,
  dbPort: process.env.DB_PORT,
  dbUrl: process.env.DB_URL,
  dbHost: process.env.DB_HOST ?? 'test_host',
  dbUser: process.env.DB_USER ?? 'test_user',
  dbPassword: process.env.DB_PASSWORD ?? 'test_password',
  dbName: process.env.DB_NAME ?? 'test_db',
};

export default config;