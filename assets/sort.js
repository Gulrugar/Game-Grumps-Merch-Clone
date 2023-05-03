class SearchSortForm extends HTMLElement {
  constructor() {
    super();

    this.debouncedOnSubmit = debounce((event) => {
      this.onSubmitHandler(event);
    }, 500);

    const sortForm = this.querySelector('form');
    sortForm.addEventListener('input', this.debouncedOnSubmit.bind(this));

    this.setListeners();
  }

  setListeners() {
    const onHistoryChange = (event) => {
      const searchParams = event.state ? event.state.searchParams :
      SearchSortForm.searchParamsInitial;
      if (searchParams === SearchSortForm.searchParamsPrev) return;
      this.renderPage(searchParams, null, false)
    }

    window.addEventListener('popstate', onHistoryChange)
  }

  renderPage(searchParams, event, updateURLHash = true) {
    SearchSortForm.searchParamsPrev = searchParams;
    const sections = this.getSections();
    const countContainer = document.getElementById('ProductCount');

    sections.forEach((section) => {
      const url = `${window.location.pathname}?section_id=${section.section}&${searchParams}`;
      const filterDataUrl = (element) => element.url === url

      SearchSortForm.filterData.some(filterDataUrl) ?
        this.renderSectionFromCache(filterDataUrl, event) :
        this.renderSectionFromFetch(url, event)
    });

    if (updateURLHash) this.updateURLHash(searchParams);
  }

  renderSectionFromFetch(url, event) {
    fetch(url)
      .then(response => response.text())
      .then((responseText) => {
        const html = responseText;
        SearchSortForm.filterData = [...SearchSortForm.filterData, { html, url }];
        this.renderProductGridContainer(html);
        this.renderProductCount(html)
      })
  }

  renderSectionFromCache(filterDataUrl, event) {
    const html = SearchSortForm.filterData.find(filterDataUrl).html;
    this.renderProductGridContainer(html);
    this.renderProductCount(html)
  }

  renderProductGridContainer(html) {
    document.getElementById('ProductGridContainer').innerHTML = new DOMParser().parseFromString(html, 'text/html').getElementById('ProductGridContainer').innerHTML;
  }

  renderProductCount(html) {
    const count = new DOMParser().parseFromString(html, 'text/html').getElementById('ProductCount').innerHTML
    const container = document.getElementById('ProductCount')
    container.innerHTML = count;
  }

  updateURLHash(searchParams) {
    history.pushState({ searchParams }, '', `${window.location.pathname}${searchParams && '?'.concat(searchParams)}`);
  }

  getSections() {
    return [
      {
        section: document.getElementById('product-grid').dataset.id
      }
    ]
  }

  createSearchParams(form) {
    const formData = new FormData(form);
    return new URLSearchParams(formData).toString();
  }


  onSubmitHandler(event) {
    event.preventDefault();
    const form = document.querySelector('search-sort-form form');

    const searchParams = this.createSearchParams(form);

    this.renderPage(searchParams, event)
  }
}

SearchSortForm.filterData = [];
SearchSortForm.searchParamsInitial = window.location.search.slice(1);
SearchSortForm.searchParamsPrev = window.location.search.slice(1);
customElements.define('search-sort-form', SearchSortForm);

// Barebones
// document.getElementById('radix-10').addEventListener('change', (e) => {
//   const section = document.getElementById('product-grid');
//   const url = `${window.location.pathname}?section_id=${section.dataset.id}&sort_by=${e.target.value}`

//   fetch(url)
//     .then(response => response.text())
//     .then((responseText) => {
//       const html = responseText;
//       document.getElementById('ProductGridContainer').innerHTML = new DOMParser().parseFromString(html, 'text/html').getElementById('ProductGridContainer').innerHTML;
//     });
// })