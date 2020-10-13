const nav = document.getElementsByTagName('nav')[0];
const navMobile = document.getElementsByClassName('nav__mobile__menu')[0];
const aboutImage = document.getElementsByClassName('about-image')[0];
const navItensMobile = document.getElementsByClassName('nav__items__mobile')[0];
const navItensMobileClose = document.getElementsByClassName('mobile__close')[0];

$(document).ready(() => {
  //aboutReposition(.5, $(window).scrollTop());
  $(window).scroll(e => {
    if (!$(nav).hasClass('nav--fixed'))
      navScroll();
    })
    
    $(navMobile).click(() => {
      $(navItensMobile).toggleClass('nav__items__mobile--shown')
    })
    $(navItensMobileClose).click(() => {
      $(navItensMobile).toggleClass('nav__items__mobile--shown')
    })
    
  });
  
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  const navScroll = () => {
    var scroll = $(window).scrollTop();
    scroll >= 1 ?
    $(nav).addClass('nav--scroll') :
    $(nav).removeClass('nav--scroll')
    //aboutReposition(.5, scroll);
}

const aboutReposition = (factor, scrollTop) => {
  const position = -700 + (scrollTop * factor) * -1
  $(aboutImage).css('background-position', `${position}px -350px`);
}