var bilder = document.querySelectorAll('.slider img'),
    bilderLength  = bilder.length - 1,
    slider = document.getElementById('slider'),
    sliderHeight = parseInt(slider.offsetHeight),
    activeImage = 0,
    push = 0;

/* slider */

slider.style.overflow = 'hidden';

slider.insertAdjacentHTML('afterbegin', '<div id="prev" class="control slider-prev"><a href="#" onclick="return: false;"></a></div><div id="next" class="control slider-next"><a href="#" onclick="return: false;"></a></div>');

/* bilder */

for (var i = 0; i < bilder.length; i++) {
  var bild = bilder[i];

  if (i == 0) {
    bild.classList.add('active');
  }

  bild.style.top = '-' + push + 'px';
  push += sliderHeight;
}

/* navigation */

var prev = document.getElementById('prev'),
    next = document.getElementById('next');

prev.addEventListener('click', function() {
  bilder[activeImage].classList.remove('active');

  if (activeImage == 0) {
    bilder[bilderLength].classList.add('active');
    activeImage = bilderLength;
  } else {
    bilder[activeImage - 1].classList.add('active');
    activeImage--;
  }
});

next.addEventListener('click', function() {
  bilder[activeImage].classList.remove('active');

  if (activeImage >= bilderLength) {
    bilder[0].classList.add('active');
    activeImage = 0;
  } else {
    bilder[activeImage + 1].classList.add('active');
    activeImage++;
  }
});