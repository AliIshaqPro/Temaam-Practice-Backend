require('dotenv').config();

const { Pool } = require('pg');

// No need to manually pass config, pg will use PGHOST, PGPORT, etc. automatically
const pool = new Pool();

pool.connect()
  .then(() => console.log('✅ PostgreSQL connected successfully!'))
  .catch((err) => console.error('❌ DB connection error:', err));

module.exports = pool;
