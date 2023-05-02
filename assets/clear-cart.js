if (document.getElementById('clear_cart')) {
  let variantIds = []
  const lineItems = Array.from(document.querySelectorAll('.CartItem_root__n8ra_'));
  lineItems.forEach(element => {
    variantIds.push(element.dataset.variantId)
  });

  let body = { updates: {} }

  for (i = 0; i < variantIds.length; i++) {
    body.updates[variantIds[i]] = 0;
  }

  body = JSON.stringify(body)

  document.getElementById('clear_cart').addEventListener('click', (e) => {
    fetch(`${routes.cart_update_url}`, {...fetchConfig(), ...{body} })
    .then((response) => {
      window.location.reload();
    })
    .catch(error => {
      console.error(error);
    })
  });
}