// server.js — servidor estático para a pasta out/
// Usado pelo `npm start` em produção (Hostinger) e desenvolvimento.
const { spawn } = require('child_process');
const path = require('path');

const port = process.env.PORT || 3000;
const outDir = path.join(__dirname, 'out');

console.log(`[Pixi Formaturas] Serving static files from ${outDir} on port ${port}`);

// Chama o binário do 'serve' via node_modules, passando porta como argumento numérico
const serveBin = path.join(__dirname, 'node_modules', 'serve', 'build', 'main.js');

const child = spawn('node', [serveBin, '-s', outDir, '-l', String(port), '--no-clipboard'], {
  stdio: 'inherit',
});

child.on('exit', (code) => {
  console.log(`[Pixi Formaturas] serve exited with code ${code}`);
  process.exit(code || 0);
});

// Repassar sinais para o processo filho (para shutdown limpo)
process.on('SIGTERM', () => child.kill('SIGTERM'));
process.on('SIGINT', () => child.kill('SIGINT'));
