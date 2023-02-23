// db config sample

const env = process.env;
const db = {
  host: env.DB_HOST,
  user: env.DB_USER,
  password: env.DB_PASSWORD,
  database: env.DB_NAME,
  port: env.DB_PORT || 1111,
  ssl: {
    mode: 'VERIFY_IDENTITY',
    ca: '',
  },
};
module.exports = db;
