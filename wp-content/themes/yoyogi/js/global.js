
document.addEventListener( 'DOMContentLoaded', function () {
  var menuIcon = document.getElementById('menu-icon');
  var menu = document.getElementById('menu');
  var body = document.getElementById('body');
  menuIcon.addEventListener('click', function () {
    menuIcon.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('active');
  });
  var menuItems = document.getElementsByClassName('menu-item');
  for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', function () {
      menuIcon.classList.remove('active');
      menu.classList.remove('active');
      body.classList.remove('active');
    });
  }
  new Splide( '#main-slider', {
    type: 'loop',
    perPage: 4,
    perMove: 1,
    pagination: false,
    fixedWidth : '315px',
    gap: 45,
    breakpoints: {
      1600: {
        fixedWidth: '275px',
      },
      1400: {
        fixedWidth: '225px',
      },
      1199: {
        fixedWidth: 'unset',
        perPage: 3,
        gap: 30
      }
    }
  }).mount();
  new Splide( '#food-top-slider', {
    type: 'fade',
    perPage: 1,
    rewind: true,
    pagination: false,
    arrows: false,
    autoplay: true
  }).mount();
  new Splide( '#food-bottom-slider', {
    type: 'fade',
    perPage: 1,
    rewind: true,
    pagination: false,
    arrows: false,
    autoplay: true
  }).mount();
  var aboutUsLink = document.getElementById('menu-item-53');
  var aboutUsLink1 = document.getElementById('about-us-link');
  var sushiTrainLink = document.getElementById('menu-item-54');
  var handrollBarLink = document.getElementById('menu-item-55');
  var menuLink = document.getElementById('menu-item-56');
  var beverageLink = document.getElementById('menu-item-57');
  var contactLink = document.getElementById('menu-item-58');
  scrollToElement(aboutUsLink, 'about-us');
  scrollToElement(aboutUsLink1, 'about-us');
  scrollToElement(sushiTrainLink, 'sushi-train');
  scrollToElement(handrollBarLink, 'hand-roll');
  scrollToElement(beverageLink, 'beverage');
  scrollToElement(contactLink, 'footer');

  var viewMapLink = document.getElementById('view-map');
  var map = document.getElementById('map');
  viewMapLink.addEventListener('click', function (e) {
    e.preventDefault();
    map.classList.toggle('active');
  });

  inView('.fadeUp').on('enter', function (element) {
    element.classList.add('fadeUp--anime');
  });

  inView('.fadeUp-10').on('enter', function (element) {
    element.classList.add('fadeUp--anime');
  });

  inView('.type-1').on('enter', function (element) {
    typeWriter1()
  });
  inView('.type-2').on('enter', function (element) {
    typeWriter2()
  });
  inView('.type-3').on('enter', function (element) {
    typeWriter3()
  });
  inView('.type-4').on('enter', function (element) {
    typeWriter4()
  });

  document.addEventListener('mousemove', parallax);
  var elem = document.getElementById("wrapper");
  function parallax(e) {
    var _w = window.innerWidth/2;
    var _h = window.innerHeight/2;
    var _mouseX = e.clientX;
    var _mouseY = e.clientY;
    var _depth1 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
    var _depth2 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
    var _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
    var x = `${_depth3}, ${_depth2}, ${_depth1}`;
    elem.style.backgroundPosition = x;
  }

  var i = 0;
  var j = 0;
  var k = 0;
  var l = 0;
  var txt1 = 'SUSHI TRAIN · HAND-ROLL SUSHI BAR · OMAKASE'; /* The text */
  var txt2 = 'SUSHI TRAIN · HAND-ROLL SUSHI BAR · OMAKASE'; /* The text */
  var txt3 = 'SUSHI TRAIN · HAND-ROLL SUSHI BAR · OMAKASE'; /* The text */
  var txt4 = 'SUSHI TRAIN · HAND-ROLL SUSHI BAR · OMAKASE'; /* The text */
  var speed = 200; /* The speed/duration of the effect in milliseconds */

  function typeWriter1() {
    var d = document.getElementById("type-1")
    if (i < txt1.length) {
      d.innerHTML += txt1.charAt(i);
      i++;
      setTimeout(typeWriter1, speed);
    }
  }
  function typeWriter2() {
    var d = document.getElementById("type-2")
    if (j < txt2.length) {
      d.innerHTML += txt2.charAt(j);
      j++;
      setTimeout(typeWriter2, speed);
    }
  }
  function typeWriter3() {
    var d = document.getElementById("type-3")
    if (k < txt3.length) {
      d.innerHTML += txt3.charAt(k);
      k++;
      setTimeout(typeWriter3, speed);
    }
  }
  function typeWriter4() {
    var d = document.getElementById("type-4")
    if (l < txt4.length) {
      d.innerHTML += txt4.charAt(l);
      l++;
      setTimeout(typeWriter4, speed);
    }
  }
});


function scrollToElement(link, elementId) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    var targetElement = document.getElementById(elementId)
    if (targetElement) {
        const yOffset = -50; // Optional: Adjust the vertical offset if needed
        window.scrollTo({
            top: targetElement.offsetTop + yOffset,
            behavior: 'smooth'
        });
    }
  })
}