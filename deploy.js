// deploy.js
import { publish } from 'gh-pages';
import fs from 'fs';
import path from 'path';
import url from 'url';

// Fix for ES modules __dirname
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Copy CNAME if exists
if (fs.existsSync('CNAME')) {
  fs.copyFileSync('CNAME', path.join('dist', 'CNAME'));
  console.log('CNAME file copied to dist folder');
}

// Copy favicons from public/
const faviconFiles = ['favicon.ico', 'favicon.svg'];
faviconFiles.forEach(file => {
  const src = path.join('public', file);
  const dest = path.join('dist', file);
  if (fs.existsSync(src)) {
  fs.copyFileSync(src, dest);
    console.log(`${file} copied to dist folder`);
  }
});

// Deploy using GITHUB_TOKEN automatically injected by GitHub Actions
const repoURL = process.env.GITHUB_TOKEN
  ? `https://${process.env.GITHUB_TOKEN}@github.com/${process.env.GITHUB_REPOSITORY}.git`
  : 'https://github.com/dansarpong/dansarpong.github.io.git'; // fallback (won't work on CI)

publish('dist', {
  branch: 'gh-pages',
  repo: repoURL,
  message: `Deploy: ${new Date().toISOString()} - ${process.env.GITHUB_SHA?.slice(0, 7)}}`,
  dotfiles: true,
  user: {
    name: 'github-actions[bot]',
    email: 'github-actions[bot]@users.noreply.github.com'
  }
}, (err) => {
  if (err) {
    console.error('Error deploying to GitHub Pages:', err);
    process.exit(1);
  } else {
    console.log('Successfully deployed to GitHub Pages!');
  }
});