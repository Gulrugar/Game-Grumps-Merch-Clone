document.querySelector('[aria-controls="radix-3"]').addEventListener('click', (e) => {
  document.getElementById('radix-3').toggleAttribute('hidden')
})


// Handle menu hover
const explMerchEl = document.getElementById('radix-4-trigger-radix-0');
const explMerchMenu = document.getElementById('headerHoverMenuDesktop1');
let menuTimeout;

const explMerchMenuSetStyle = (display = 'none') => {
  if (display === 'none' && explMerchMenu.matches(":hover")) {
      menuTimeout = setTimeout(explMerchMenuSetStyle, 250);
  } else {
    explMerchMenu.style.display = display
  }
}

explMerchEl.addEventListener('mouseenter', (e) => {
  clearTimeout(menuTimeout);
  explMerchMenuSetStyle('flex');
})

explMerchEl.addEventListener('mouseleave', (e) => {
  menuTimeout = setTimeout(explMerchMenuSetStyle, 250)
})
