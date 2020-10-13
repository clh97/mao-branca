$(document).ready(() => {
  const imageThumbs = $('.infra-images__thumbs__image');
  imageThumbs.each((i, el) => $(el, i).click(() => {
    const image = $('.infra-images__photo')[0];
    const prefix = $('.infra-images__thumbs').data('name');
    console.log(prefix)
    $(image).fadeOut(200, function() {
      $(image).attr('src', `img/${prefix}/${i+1}.jpg`);
    })
    $(image).fadeIn(500);
  }))
})