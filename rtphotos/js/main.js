var pusher,
    channel,
    apiToken = 'da04f5af68a3ed9b77d1',
    // photoAPI = 'https://80cf5e8f.ngrok.io',
    photoAPI = 'https://aqueous-chamber-43940.herokuapp.com/',

// Pusher connection
pusher = new Pusher(apiToken, {
  encrypted: true
})

// Pusher channel and event subscription
channel = pusher.subscribe('photos')
channel.bind('new_photo', function(data) {
console.log(data)
renderPhoto(data)
})

function renderPhoto(photoObject) {
  var photos = document.getElementById('photos')

  var div = document.createElement('div')
  div.classList.add('grid-item')

  var img = document.createElement('img')
  img.setAttribute('src', photoObject.image_url)
  div.appendChild(img)

  var caption = document.createElement('h4')
  caption.classList.add('caption')
  caption.innerHTML = photoObject.caption
  div.appendChild(caption)

  photos.appendChild(div)
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
    $('.grid').masonry({
      itemSelector: '.grid-item',
      percentPosition: true,
      columnWidth: '.grid-sizer'
    })
  }
  ,2000)
})

.catch(function(ex) {
  console.log('parsing failed', ex)
})
