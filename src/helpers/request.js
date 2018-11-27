export default (url, options = {}) => {
  if (options.data) {
    options.data = JSON.stringify(options.data)
    options.method = 'POST'
  }

  const opts = Object.assign({
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }, options)

  return fetch(url, opts)
    .then(res => res.json())
    .catch(error => { error })
}