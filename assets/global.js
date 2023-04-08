const saucyDanArin = Array.from(document.querySelectorAll('#saucy-arin, #saucy-dan'))

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  saucyDanArin.forEach(element => {
    element.style.transform = `translateY(${scrollTop / 2 - 150}px)`
  })
})

function fetchConfig(type = 'json') {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': `application/${type}`
    }
  }
}