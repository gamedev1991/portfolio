import * as ftp from 'basic-ftp';
import { config } from 'dotenv';

config(); // load .env

const {
  VITE_FTP_URL,
  VITE_FTP_USER,
  VITE_FTP_PASSWORD,
} = process.env;

if (!VITE_FTP_URL || !VITE_FTP_USER || !VITE_FTP_PASSWORD) {
  console.error('Missing FTP credentials in .env');
  process.exit(1);
}

// Strip ftp:// prefix if present
const host = VITE_FTP_URL.replace(/^ftp:\/\//, '');

const client = new ftp.Client();
client.ftp.verbose = false;

try {
  await client.access({
    host,
    user: VITE_FTP_USER,
    password: VITE_FTP_PASSWORD,
    secure: false,
  });

  console.log('Connected to FTP server');

  // Upload dist/ to public_html on Hostinger
  await client.uploadFromDir('dist', 'public_html');

  console.log('Deploy complete!');
} catch (err) {
  console.error('Deploy failed:', err);
  process.exit(1);
} finally {
  client.close();
}
