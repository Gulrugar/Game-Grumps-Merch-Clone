const variantBtns = document.querySelectorAll('.Swatch_swatch__GDm0T');
const productForm = document.getElementById('product-items-form')
const variantData = JSON.parse(productForm.querySelector('[type="application/json"]').textContent)
const variantInput = productForm.querySelector('input[name="id"]');
const sectionURL = productForm.querySelector('[id^=Data-]').dataset.url;

Array.from(variantBtns).forEach(btn => {
  btn.addEventListener('click', (e) => {
    
    // Set Styles
    Array.from(variantBtns).forEach(btnAgain => {
      btnAgain.classList.remove('Swatch_active__UtqPO')
    })
    btn.classList.add('Swatch_active__UtqPO');

    // Find Variant
    const currentVariant = variantData.find(
      (variant) => {
        return variant.options[0] === e.target.dataset.value
      }
    )

    // Update Input and URL
    variantInput.value = currentVariant.id;
    window.history.replaceState({}, '', `${sectionURL}?variant=${currentVariant.id}`)
    
  })
})