const msToMm = {}

function convertMsToMm (ms) {
  const min = Math.floor(ms / 60000)
  const sec = ((ms % 60000) / 1000).toFixed(0)

  return `${min}:${sec < 10 ? `00` : sec} min`
}

msToMm.install = function (Vue) {
  Vue.filter('msToMm', val => {
    return convertMsToMm(val)
  })
}

export default msToMm
