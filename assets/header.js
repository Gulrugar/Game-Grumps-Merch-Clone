document.querySelector('[aria-controls="radix-3"]').addEventListener('click', (e) => {
  document.getElementById('radix-3').toggleAttribute('hidden')
})


// Handle menu hover
let menuTimeout1;
let menuTimeout2;

const exploreMerchBtnMenu = {
  button: document.getElementById('radix-4-trigger-radix-0'),
  menu: document.getElementById('headerHoverMenuDesktop1'),
  timeoutId: menuTimeout1
}
const moreBtnMenu = {
  button: document.getElementById('radix-4-trigger-radix-1'),
  menu: document.getElementById('headerHoverMenuDesktop2'),
  timeoutId: menuTimeout2
}

function setHoverMenu (targetBtnMenu, otherBtnMenu) {
  const menuSetStyle = (display = 'none') => {
    if (display === 'none' && targetBtnMenu.menu.matches(":hover")) {
        targetBtnMenu.timeoutId = setTimeout(menuSetStyle, 250);
        console.log('here')
    } else {
      targetBtnMenu.menu.style.display = display
    }
  }

  targetBtnMenu.button.addEventListener('mouseenter', (e) => {
    clearTimeout(targetBtnMenu.timeoutId);
    clearTimeout(otherBtnMenu.timeoutId);
    otherBtnMenu.menu.style.display = 'none';
    menuSetStyle('flex');
  })

  targetBtnMenu.button.addEventListener('mouseleave', (e) => {
    targetBtnMenu.timeoutId = setTimeout(menuSetStyle, 250)
  })
}
setHoverMenu(exploreMerchBtnMenu, moreBtnMenu);
setHoverMenu(moreBtnMenu, exploreMerchBtnMenu);

