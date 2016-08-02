var pusher,
    channel,
    apiToken = 'da04f5af68a3ed9b77d1',
    photoAPI = 'https://80cf5e8f.ngrok.io',
    // photoAPI = '',

// Pusher connection
pusher = new Pusher(apiToken, {
  encrypted: true
})

// Pusher channel and event subscription
channel = pusher.subscribe('photos')
channel.bind('new_photo', function(data) {
  console.log(data)
})

function renderPhoto(photoObject) {
  var photos = document.getElementById('photos')

  var div = document.createElement('div')
  div.classList.add('col-sm-3')

  var img = document.createElement('img')
  img.classList.add('img-thumbnail')
  img.setAttribute('src', photoAPI + photoObject.image_url)
  div.appendChild(img)

  var caption = document.createElement('h4')
  caption.classList.add('caption')
  caption.innerHTML = photoObject.caption
  div.appendChild(caption)

  photos.appendChild(div)
}

function updateGrid() {
  var masonry = new Masonry('#photos')
}

fetch(photoAPI + '/photos/')

.then(function(data) {
  return data.json()
})

.then(function(photos) {
  console.log(photos)
  photos.forEach(function(photoObject) {
    renderPhoto(photoObject)
  })
  setTimeout(function() {
    updateGrid()
  }
  ,0)
})

.catch(function(ex) {
  console.log('parsing failed', ex)
})
