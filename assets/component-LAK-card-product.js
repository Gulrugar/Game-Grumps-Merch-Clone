class FeaturedCollection extends HTMLElement {
  constructor() {
    super();
    // Scrolling behavior
    this.prevBtn = this.querySelector('.pagination-controls__previous')
    this.nextBtn = this.querySelector('.pagination-controls__next')

    this.scrollCard = this.querySelector('.paginated-products__product')
    this.scrollContainer = this.querySelector('.product-category-quick-view__scroll')

    this.prevBtn.addEventListener('click', this.scrollContainerLeft.bind(this))
    this.nextBtn.addEventListener('click', this.scrollContainerRight.bind(this))

    // Handle Add to cart
    this.addToCartBtns = Array.from(this.querySelectorAll('[id^=SubmitBtn-'))
    this.addToCartBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        this.handleAddToCart(btn.dataset.id)
      })
    })
  }

  scrollContainerLeft() {
    const scrollWidth = this.scrollCard.clientWidth
    this.scrollContainer.scrollTo({
      left: this.scrollContainer.scrollLeft - scrollWidth,
      behavior: "smooth"
    })
  }

  scrollContainerRight() {
    const scrollWidth = this.scrollCard.clientWidth
    this.scrollContainer.scrollTo({
      left: this.scrollContainer.scrollLeft + scrollWidth,
      behavior: "smooth"
    })
  }

  handleAddToCart(id) {
    const formData = new FormData();
    formData.append('id', parseInt(id))
    formData.append('quantity', 1)
    
    const config = fetchConfig('javascript');
    config.headers['X-Requested-With'] = 'XMLHttpRequest';
    delete config.headers['Content-Type']
    config.body = formData

    fetch(`${routes.cart_add_url}`, config)
      .then((response) => {
        return response.json()
      })
      .then((response) => {
        if (response.status) {
          console.error(response.description)
        } else {
          console.log('Add to cart success')
        }
      })
      .catch(() => {
        console.error('Add to cart fetch error')
    })
  }
}

customElements.define('featured-collection', FeaturedCollection)

const featuredImages = Array.from(document.querySelectorAll('.paginated-products__product'));

// (max-width: 466px)
const handleMatchMediaMax466 = (matchMedia) => {
  if (matchMedia.matches) {
    featuredImages.forEach(image => {
      image.style.width = "90%"
    })
  }
}

var matchMediaMax466 = window.matchMedia("(max-width: 466px)")
handleMatchMediaMax466(matchMediaMax466);
matchMediaMax466.addListener(handleMatchMediaMax466)

// (min-width: 467px) and (max-width: 691px)
const handleMatchMediaMin477Max691 = (matchMedia) => {
  if (matchMedia.matches) {
    featuredImages.forEach(image => {
      image.style.width = "45%"
    });
  }
}

var matchMediaMin477Max691 = window.matchMedia("(min-width: 467px) and (max-width: 691px)")
handleMatchMediaMin477Max691(matchMediaMin477Max691)
matchMediaMin477Max691.addListener(handleMatchMediaMin477Max691)

// (min-width: 692px) and (max-width: 916px)
const handleMatchMediaMin692Max916 = (matchMedia) => {
  if (matchMedia.matches) {
    featuredImages.forEach(image => {
      image.style.width = "30%"
    });
  }
}

var matchMediaMin692Max916 = window.matchMedia("(min-width: 692px) and (max-width: 916px)")
handleMatchMediaMin692Max916(matchMediaMin692Max916)
matchMediaMin692Max916.addListener(handleMatchMediaMin692Max916)

// (min-width: 917px) and (max-width: 1141px)
const handleMatchMediaMin917Max1141 = (matchMedia) => {
  if (matchMedia.matches) {
    featuredImages.forEach(image => {
      image.style.width = "22.5%"
    });
  }
}

var matchMediaMin917Max1141 = window.matchMedia("(min-width: 917px) and (max-width: 1141px)")
handleMatchMediaMin917Max1141(matchMediaMin917Max1141)
matchMediaMin917Max1141.addListener(handleMatchMediaMin917Max1141)

// (min-width: 1142px) and (max-width: 1366px)
const handleMatchMediaMin1142Max1366 = (matchMedia) => {
  if (matchMedia.matches) {
    featuredImages.forEach(image => {
      image.style.width = "18%"
    });
  }
}

var matchMediaMin1142Max1366 = window.matchMedia("(min-width: 1142px) and (max-width: 1366px)")
handleMatchMediaMin1142Max1366(matchMediaMin1142Max1366)
matchMediaMin1142Max1366.addListener(handleMatchMediaMin1142Max1366)

// (min-width: 1367px) and (max-width: 1591px)
const handleMatchMediaMin1367Max1591 = (matchMedia) => {
  if (matchMedia.matches) {
    featuredImages.forEach(image => {
      image.style.width = "15%"
    });
  }
}

var matchMediaMin1367Max1591 = window.matchMedia("(min-width: 1367px) and (max-width: 1591px)")
handleMatchMediaMin1367Max1591(matchMediaMin1367Max1591)
matchMediaMin1367Max1591.addListener(handleMatchMediaMin1367Max1591)