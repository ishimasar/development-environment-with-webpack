const imagemin = require('imagemin-keep-folder');
const imageminWebp = require('imagemin-webp');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const imageminGifsicle = require('imagemin-gifsicle');
const imageminSvgo = require('imagemin-svgo');

imagemin(['src/img/*.{webp,jpg,png,gif,svg,ico}'], {
  plugins: [
    imageminWebp({
      quality: 80,
    }),
    imageminMozjpeg({
      quality: 85,
    }),
    imageminPngquant({
      quality: 90,
    }),
    imageminGifsicle(),
    imageminSvgo(),
  ],
  replaceOutputDir: (output) => {
    return output.replace(/src\/img\//, './dest/assets/img/');
  },
}).then(() => {
  console.log('Images optimized');
});
