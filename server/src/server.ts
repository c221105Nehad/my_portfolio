import app from './app.js';

const PORT = Number(process.env['PORT'] ?? 5000);

if (!Number.isInteger(PORT) || PORT < 1 || PORT > 65535) {
  throw new Error('Invalid PORT configuration.');
}

app.listen(PORT, () => {
  console.log(
    `Portfolio API is running at http://localhost:${PORT}`
  );
});