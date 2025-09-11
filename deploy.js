import { publish } from 'gh-pages';
import fs from 'fs';
import path from 'path';

// Ensure CNAME exists in dist
if (fs.existsSync('CNAME')) {
  fs.copyFileSync('CNAME', 'dist/CNAME');
  console.log('CNAME file copied to dist folder');
}

// Ensure favicon files are copied
const faviconFiles = ['favicon.ico', 'favicon.svg'];
faviconFiles.forEach(file => {
  const srcPath = path.join('public', file);
  const destPath = path.join('dist', file);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`${file} copied to dist folder`);
  }
});

// Deploy to GitHub Pages
publish('dist', {
  branch: 'gh-pages',
  repo: 'https://github.com/dansarpong/dansarpong.github.io.git',
  message: 'Deploy to GitHub Pages with favicon fix',
  dotfiles: true, // Include dotfiles like .nojekyll
}, (err) => {
  if (err) {
    console.error('Error deploying to GitHub Pages:', err);
    return;
  }
  console.log('Successfully deployed to GitHub Pages!');
});
