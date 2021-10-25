const imagemin = require('imagemin-keep-folder');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
// const imageminWebp = require('imagemin-webp');
const imageminGifsicle = require('imagemin-gifsicle');
const imageminSvgo = require('imagemin-svgo');

imagemin(['src/img/*.{webp,jpg,png,gif,svg,ico}'], {
  plugins: [
    imageminMozjpeg({
      quality: 85,
    }),
    imageminPngquant({
      quality: 90,
    }),
    // imageminWebp(),
    imageminGifsicle(),
    imageminSvgo(),
  ],
  replaceOutputDir: (output) => {
    return output.replace(/src\/img\//, './dest/assets/img/');
  },
}).then(() => {
  console.log('Images optimized');
});
