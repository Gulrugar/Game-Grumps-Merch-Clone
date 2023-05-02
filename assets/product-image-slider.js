const resizeImgs = Array.from(document.querySelectorAll('.keen-slider__slide'));
const imageSlideBtns = Array.from(document.querySelectorAll('.ProductSliderControl_controlButton__S_YwH'))
const imageThumbs = Array.from(document.querySelectorAll('[id^="thumb-"]'));
const magnifyImage = document.querySelector('.ProductSlider_zoomFab__ny9vF');

let slidePosition = 0

function resizeImg() {
  let imgWidth = 369
  const innerWidth = window.innerWidth
  if (window.innerWidth < 656) {
    imgWidth = Math.max(parseInt(window.innerWidth) - 81, 369);
  } else if (window.innerWidth < 768){
    imgWidth = 576
  } else if (window.innerWidth < 786) {
    imgWidth = parseInt(window.innerWidth) - 81
  } else if (window.innerWidth < 1024){
    imgWidth = 704
  } else if (window.innerWidth < 1280) {
    imgWidth = 478
  } else {
    imgWidth = 606
  }
  
  resizeImgs.forEach(img => {
    img.style.maxWidth = `${imgWidth}px`
    img.style.minWidth = `${imgWidth}px`
    img.style.transform = `translate3d(${-slidePosition * imgWidth}px, 0px, 0px)`
  })
}

function highlightSelectedThumb() {
  const thumb = document.getElementById(`thumb-${slidePosition}`);

  document.querySelector('.ProductSlider_selected__cUbLA').classList.remove('ProductSlider_selected__cUbLA')

  thumb.querySelector('.ProductSlider_thumb__an0vK').classList.add('ProductSlider_selected__cUbLA')

  magnifyImage.href = thumb.querySelector('img').src
}

window.addEventListener('resize', (event) => {
  resizeImg();
})

imageSlideBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const positionChange = btn.dataset.direction == 'left' ? -1 : 1
    if (slidePosition + positionChange > imageThumbs.length - 1) {
      slidePosition = imageThumbs.length - 1;
    } else if (slidePosition + positionChange >= 0) {
      slidePosition = slidePosition + positionChange
    } else {
      slidePosition = 0;
    }
    highlightSelectedThumb();
    resizeImg();
  })
})

imageThumbs.forEach(thumb => {
  thumb.addEventListener('click', (event) => {
    slidePosition = thumb.dataset.position
    highlightSelectedThumb();
    resizeImg();
  })
})

resizeImg();