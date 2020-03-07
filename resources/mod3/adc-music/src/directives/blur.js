const blur = {}

function setBlur (el, binding) {
  el.style.filter = !binding.value ? 'blur(3px)' : '(none)'
  el.style.filter = !binding.value ? 'not-allowed' : 'inherit'

  el.querySelectorAll('a').forEach(element => {
    if (!binding.value) {
      element.setAttribute('disabled', true)
    } else {
      element.removeAttribute('disabled')
    }
  })
}

blur.install = function (Vue) {
  Vue.directive('blur', {
    bind (el, binding) {
      setBlur(el, binding)
    }
  })
}

export default blur
