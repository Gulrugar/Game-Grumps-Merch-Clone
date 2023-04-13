document.getElementById('radix-10').addEventListener('change', (e) => {
  const section = document.getElementById('product-grid');
  const url = `${window.location.pathname}?section_id=${section.dataset.id}&sort_by=${e.target.value}`

  fetch(url)
    .then(response => response.text())
    .then((responseText) => {
      const html = responseText;
      console.log(document.getElementById('ProductGridContainer'));
      document.getElementById('ProductGridContainer').innerHTML = new DOMParser().parseFromString(html, 'text/html').getElementById('ProductGridContainer').innerHTML;
    });
})