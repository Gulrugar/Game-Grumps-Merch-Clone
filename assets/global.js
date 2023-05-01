const saucyDanArin = Array.from(document.querySelectorAll('#saucy-arin, #saucy-dan'))

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  saucyDanArin.forEach(element => {
    element.style.transform = `translateY(${scrollTop / 2 - 150}px)`
  })
})

class QuantityInput extends HTMLElement {
  constructor() {
    super();
    this.input = this.querySelector('input');
    this.changeEvent = new Event('change', { bubbles: true });

    this.input.addEventListener('change', this.onInputChange.bind(this));
    this.querySelectorAll('button').forEach(
      (button) => button.addEventListener('click', this.onButtonClick.bind(this))
    );
  }

  connectedCallback() {
    this.validateQtyRules();
  }

  onInputChange(event) {
    this.validateQtyRules();
  }

  onButtonClick(event) {
    event.preventDefault();
    const previousValue = this.input.value;

    event.currentTarget.name === 'plus' ? this.input.stepUp() : this.input.stepDown();
    if (previousValue !== this.input.value) this.input.dispatchEvent(this.changeEvent);
  }

  validateQtyRules() {
    const value = parseInt(this.input.value);
    if (this.input.min) {
      const min = parseInt(this.input.min);
      const buttonMinus = this.querySelector("[name='minus']");
      buttonMinus.classList.toggle('disabled', value <= min);
    }
    if (this.input.max) {
      const max = parseInt(this.input.max);
      const buttonPlus = this.querySelector("[name='plus']");
      buttonPlus.classList.toggle('disabled', value >= max);
    }
  }
}

customElements.define('quantity-input', QuantityInput);

function fetchConfig(type = 'json') {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': `application/${type}`
    }
  }
}

function debounce(fn, wait) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn.apply(this, args), wait);
  };
}

// Accordion buttons
Array.from(document.querySelectorAll('button[data-radix-collection-item]')).forEach(element => {
  element.addEventListener('click', function(e) {
    const toggleEl = document.querySelector(`[aria-labelledby="${this.getAttribute('id')}"]`)

    toggleEl.dataset.state = toggleEl.dataset.state === 'closed' ? 'open' : 'closed';
  })
})